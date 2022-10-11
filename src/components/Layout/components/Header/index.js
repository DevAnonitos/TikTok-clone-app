import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/image';

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
                    </button>
                    {/* Loading */}
                    <button className={cx('search-btn')}>
                        {/* search */}
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;