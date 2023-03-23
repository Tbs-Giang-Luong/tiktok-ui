import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles)
function MenuItem({ to, title, icon, active }) {
    return (

        <NavLink className={(nav) => cx("menu-item", { active: nav.isActive })} to={to}>
            <span className={cx('icon')}> {icon}</span>
            <span className={cx("active-icon")}> {active}</span>
            <span className={cx('title')}>{title}</span>

        </NavLink>

    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    active: PropTypes.object.isRequired
}

export default MenuItem;