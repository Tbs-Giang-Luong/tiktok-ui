import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/Component/Popper';

import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = "false" }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleData = () => {
        return current.data?.map((item, index) => {
            const parent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (parent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {

        setHistory((prev) => prev.slice(0, prev.length - 1))

    }

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return (
        <Tippy

            hideOnClick={hideOnClick}
            offset={[8, 12]}
            delay={[0, 700]}
            onHide={handleResetMenu}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menuList')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory(handleBack);
                                }}
                            />
                        )}
                        <div className={cx("body-scroll")}> {handleData()}</div >
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool

}

export default Menu;
