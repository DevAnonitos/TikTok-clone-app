// style from css
import React, {useState, useEffect, useRef} from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCircleXmark, 
    faSpinner, faMagnifyingGlass, 
    } 
from '@fortawesome/free-solid-svg-icons';

// components
import {Wrapper as PopperWrapper } from '@/components/Popper';
import HeadelessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItems from '@/components/AccountItems';

const cx = classNames.bind(styles);

const Search = () => {


    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
              setSearchResult([1,1,1,1])
        }, 3000)
      }, [])

    const handleHideResult = () => {
        setShowResult(false);
    }
  return (
    <>
        <HeadelessTippy
            interactive
            offset={[12, 8]}
            visible={setShowResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
                <div className={cx('search')}>
                    <input 
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setSearchResult(true)}
                    />
                    {!!searchValue && (
                        <button 
                            className={cx('clear')} 
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus()
                            }}
                        >
                            {/* clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* Loading */}
                    
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                            {/* search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
        </HeadelessTippy>
    </>
  )
}

export default Search