// font style

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// style name
import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'
import Image from '@/components/Image'

const cx = classNames.bind(styles);

function AccountItems() {
    return ( 
        <div className={cx('wrapper')}>
            {/* images accounts */}
            <Image className={cx('avatar')} src="https://static2.yan.vn/YanNews/2167221/201904/nguyen-viet-phuong-thoa-la-ai-d8d2d2ea.jpg" alt="Hoaaa" />
            
            {/* user info */}
            <div className={cx('info')}>
                <p className={cx('names')}>
                    <span>nguyen Van Son</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>
                    nguyenVanA
                </span>
            </div>

        </div> 
    );
}

export default AccountItems;