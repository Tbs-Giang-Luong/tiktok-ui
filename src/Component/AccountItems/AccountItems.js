import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss'
import Image from '../Image/image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar
            } alt="user not found"></Image>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name
                    }</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>

                <span className={cx('userName')}>{data.nickname

                }</span>
            </div>
        </Link>
    );
}
AccountItems.prototype = {
    data: PropTypes.node.isRequired
}

export default AccountItems;
