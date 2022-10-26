// module file
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/image';

// components and feature
import Button from '@/components/Button';
import {Wrapper as PopperWrapper } from '@/components/Popper';
import Menu from '@/components/Popper/Menu';
import Image from '@/components/Image';

// lib sub from components
import Tippy from '@tippyjs/react'
import HeadelessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

// material and hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faMessage, faUser, faCoins, faGear, faLongArrowAltUp, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import AccountItems from '@/components/AccountItems';
import { UploadIcon, MessageIcon } from '@/components/Icons';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    code: 'jp',
                    title: '日本語',
                },
                {
                    code: 'chs',
                    title: '中文',
                },
                {
                    code: 'korea',
                    title: '대한민국',
                },
            ]
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Key board',
        to: '/shortcut'
    }
]

const currentUser = true

function Header() {

    // state and effect
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
      setTimeout(() => {
            setSearchResult([])
      }, 3000)
    }, [])
    // handle Logic events
    const handleMenuChange = (menuItems) => {
        console.log(menuItems);
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ]

    // fnc components
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo page */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                {/* search bar */}
                <HeadelessTippy
                    interactive
                    offset={[12, 8]}
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
                </HeadelessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content='upload'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy 
                                content='message'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS} 
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image src="https://1.bp.blogspot.com/-z8Npt8UhDa8/YBjXVGREGAI/AAAAAAAA4TQ/2v0Y-csthiE6YoSlFxsfn3SHLlR0E-oigCLcBGAsYHQ/s0/Khanh-Huyen-2k4%2B%25282%2529.jpg" 
                            className={cx('user-avatar')}
                            alt="logo" />
                        ) :(
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                {/* actionbar */}
            </div>
        </header>
    );
};

export default Header;