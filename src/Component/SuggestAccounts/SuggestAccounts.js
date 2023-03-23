import PropTypes from 'prop-types';

import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <label className={cx('label')}>{label}</label>
            <AccountItem />

            <p className={cx('more-btn')}>See all </p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
