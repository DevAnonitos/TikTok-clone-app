// module file
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/image';
import {Wrapper as PopperWrapper } from '@/components/Popper';

// lib sub from components
import Tippy from '@tippyjs/react/headless';

// material and hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AccountItems from '@/components/AccountItems';


const cx = classNames.bind(styles);

function Header() {

    // state and effect
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
      setTimeout(() => {
            setSearchResult([1, 2, 3])
      }, 3000)
    }, [])
    

    // fnc components
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
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
                <div className={cx('action')}>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;