import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItems.module.scss'

const cx = classNames.bind(styles);

function AccountItems() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="" />
            <div className={cx('info')}>
                <p className={cx('names')}>Nguyen Van Son</p>
                <span className={cx('username')}>
                    <span>nguyenVanA</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </span>
            </div>
        </div> 
    );
}

export default AccountItems;