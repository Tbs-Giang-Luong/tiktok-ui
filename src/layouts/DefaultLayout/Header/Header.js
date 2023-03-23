import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import routerConfig from '~/config/routes';
import images from '~/assets/images';
import { Button } from '~/Component/Button';
import { DATA_ITEMS, userMenu } from '~/Component/Data/Data';
import { InboxIcon, MessageIcon } from '~/Component/Icons/icons';
import Image from '~/Component/Image/image';
import { Menu } from '~/Component/Popper';
import { Search } from '~/Component/Search';

const cx = classNames.bind(styles);
const currentUser = false;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routerConfig.home}>
                        <img src={images.logo} alt="Tik Tok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content={'Message'} delay={[0, 300]} interactive placement={'bottom-end'}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content={'Inbox'} delay={[0, 300]} interactive placement={'bottom-end'}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Register</Button>
                            <Button outline>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : DATA_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('userAvatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1679472000&x-signature=J4mBZsMZjUvNBJYEozjyXTl9OTs%3D"
                                alt="Nguyen Van A"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <>
                                {
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                }
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
