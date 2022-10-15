// module file
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/image';

// components and feature
import Button from '@/components/Button';
import {Wrapper as PopperWrapper } from '@/components/Popper';
import Menu from '@/components/Popper/Menu';

// lib sub from components
import Tippy from '@tippyjs/react/headless';

// material and hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AccountItems from '@/components/AccountItems';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and shortcuts',
    }
]

function Header() {

    // state and effect
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
      setTimeout(() => {
            setSearchResult([])
      }, 3000)
    }, [])
    

    // fnc components
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo page */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                {/* search bar */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItems />
                                    <AccountItems />
                                    <AccountItems />
                                </PopperWrapper>
                            </div>    
                    )} 
                >
                    <div className={cx('search')}>
                        <input 
                            placeholder='Search accounts and videos'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        {/* Loading */}
                    
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            {/* search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* actionbar */}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>

                    <Menu
                        items={MENU_ITEMS} 
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;