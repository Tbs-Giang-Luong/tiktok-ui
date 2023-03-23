import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Button } from '~/Component/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item')
    return (
        <div className={cx('wrapper', {
            separate: data.separate
        })}>
            <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div >

    )
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func

}
export default MenuItem;
