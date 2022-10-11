import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
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
                <div className={cx('action')}>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;