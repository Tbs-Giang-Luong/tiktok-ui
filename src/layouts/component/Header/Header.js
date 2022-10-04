import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import images from 'assets/images';
import styles from './Header.module.scss';

import config from 'config/config';
import Button from 'components/Button';
import { Inbox, Message, UploadIcon } from 'components/Icons';
import Image from 'components/Image';
import Menu from 'components/Popper/Menu';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;
    const handleMenuChange = () => {};

    const listMenu = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    }, {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vn',
                        title: 'Vietnamese',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },

        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Views profile',
            to: '/Trinh Khanh LInh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        ...listMenu,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Sign Out',
            to: '/sign Out',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                
                <Search />

                <div className={cx('action')}>      
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Videos">
                                <button className={cx('upload-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message">
                                <button className={cx('message-btn')}>
                                    <Message />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('inbox-btn')}>
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : listMenu} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="http://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/309003807_1582990785494193_5435176050388812364_n.jpg?stp=dst-jpg_s720x720&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qNeXMIpqG8kAX9wyR_X&_nc_ht=scontent.fhph1-3.fna&oh=00_AT8Y6B3M2Vn4rvcf0SBpZJsjvVIFOESJRlVcTmzwi76elQ&oe=63373B22"
                                className={cx('user-avatar')}
                                alt="Trịnh Khánh Linh"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
