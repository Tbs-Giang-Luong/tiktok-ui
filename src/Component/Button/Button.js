import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    className = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };
    let Comp = 'button';
    if (to) {
        props.to = to;
        Comp = Link;
    }

    if (href) {
        props.href = href;
        Comp = 'a';
    }
    if (disable) {
        Object.keys(props).forEach((key) => {
            // eslint-disable-next-line valid-typeof
            if (key.search === 'on' && typeof props[key] === ' function ') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        disable,
        rounded,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    round: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node.isRequired,
    rightIcon: PropTypes.node.isRequired,
}

export default Button;
