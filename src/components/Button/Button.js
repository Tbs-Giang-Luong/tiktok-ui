import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    href,
    primary = false,
    outline = false,
    to,
    text = false,
    small = false,
    large = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    disabled = false,
    className,
    onClick,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };

    let Comp = 'button';
    if (disabled) {
        Object.keys[props]?.forEach((key) => {
            if (key.startWith('on') && typeof props[key] === 'function') {
                delete props.onClick;
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.to = href;
        Comp = 'a';
    }

    const classes = cx(
        'wrapper',
        {
            primary,
            outline,
            disabled,
            rounded,
            leftIcon,
            rightIcon,
            small,
            large,
            text,
            onClick,
        },
        className,
    );
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    primary:PropTypes.string,
    outline:PropTypes.string,
    to:PropTypes.bool,
    href:PropTypes.bool,
    text:PropTypes.bool,
    small:PropTypes.bool,
    rounded:PropTypes.bool,
    large:PropTypes.bool,
    children:PropTypes.node.isRequired,
    disabled:PropTypes.string,
    className:PropTypes.string,
    rightIcon:PropTypes.node,
    leftIcon:PropTypes.node,
    onClick:PropTypes.func,
}


export default Button;
