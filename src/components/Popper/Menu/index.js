import { useState } from "react";

import classNames from "classnames/bind";
import styles from './Menu.module.scss'

import {Wrapper as PopperWrapper } from '@/components/Popper'

import Tippy from '@tippyjs/react/headless';
import MenuItems from "./MenuItems";
import Header from "./Header";

const cx = classNames.bind(styles);

const deFaultFn = () => {

}


function Menu({children, items=[], onChange = deFaultFn}) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return <MenuItems key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                }else {
                    onChange(items);
                }
            }} />
        });
    };

    return (
        <Tippy
            delay={[0, 600]}
            interactive
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() =>{
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>    
            )} 
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;