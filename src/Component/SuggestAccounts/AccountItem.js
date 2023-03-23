import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountPreView from './AccountPreView';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreView />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy visible interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1679724000&x-signature=oavjYJxPMsyDSOP1qpQrMAFQbCU%3D"
                    alt=""
                />

                <div className={cx('account-info')}>
                    <p className={cx('nick-name')}>
                        <strong> Nguyen Trong Phu</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Nguyen Van A</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
