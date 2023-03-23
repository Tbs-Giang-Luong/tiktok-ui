import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Button } from '~/Component/Button';
import styles from './AccountPreView.module.scss';
const cx = classNames.bind(styles);

function AccountPreView() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3ac5e7f4f8ebbe0dae86007ddb729341~c5_100x100.jpeg?x-expires=1679724000&x-signature=1y5ofA18TJH6cGJcXfvoUY3FMww%3D"
                    alt=""
                />

                <div className={cx('button')}><Button primary>Follow</Button></div >
            </div>

            <div className={cx('body')}>
                <div className={cx('account-info')}>
                    <p className={cx('nick-name')}>
                        <strong> Nguyen Trong Phu</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyen Van A</p>
                </div>


                <p className={cx('analytics')}>
                    <span className={cx('value')}>8.8M </span>
                    <span className={cx('label')}>Follower</span>

                    <span className={cx('value')}>251M </span>
                    <span className={cx('label')}>Like</span>

                </p>

            </div>
        </div>
    );
}

export default AccountPreView;
