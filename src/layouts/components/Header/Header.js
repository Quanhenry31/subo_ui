import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.modules.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import {
    faCartShopping,
    faUserAlt,
    faCircleQuestion,
    faEarthAsia,
    faGear,
    faKeyboard,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import { useLocation } from 'react-router-dom';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
// import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const location = useLocation();
    const nameh1 = () => {
        if (location.pathname === '/') {
            return <h1>Modern Interior Design Studio</h1>;
        }
        if (location.pathname === '/shop') {
            return <h1>Shop</h1>;
        }
        if (location.pathname === '/about') {
            return <h1>About</h1>;
        }
        if (location.pathname === '/services') {
            return <h1>Service</h1>;
        }
        if (location.pathname === '/blog') {
            return <h1>Blog</h1>;
        }
        if (location.pathname === '/contact') {
            return <h1>Contact</h1>;
        }
    };
    const currentUser = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle chage language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: './viewprofile',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>,
            title: 'Get coins',
            to: './coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: './setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>,
            title: 'Log out',
            to: './out',
            separate: true,
        },
    ];
    return (
        <header>
            {/* navbar and menu */}
            <div className={cx('navbar')}>
                <div className={cx('main-logo')}>
                    <Link className={cx('logo')}>
                        Subo<span>.</span>
                    </Link>
                </div>
                <div className={cx('main-menu')}>
                    <ul className={cx('main-menu-ul')}>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.home}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.shop}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.about}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.services}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.blog}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('menu-hover-a')} to={config.routes.contact}>
                                Contact us
                            </Link>
                        </li>
                        {/* menu-user,cart */}
                        <div className={cx('menu-li')}>
                            <li>
                                {/* <Link to={config.routes.login}>
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </Link> */}

                                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                    {currentUser ? (
                                        <Link className={cx('menu-hover-a')} to={config.routes.login}>
                                            <FontAwesomeIcon icon={faUserAlt} />
                                        </Link>
                                    ) : (
                                        <Link to={config.routes.login}>
                                            <FontAwesomeIcon icon={faUserAlt} />
                                        </Link>
                                    )}
                                </Menu>
                            </li>
                            <li>
                                <Link className={cx('menu-hover-a')} to={config.routes.cart}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            {/* anh navbar */}
            <div className={cx('navbackground')}>
                <div className={cx('nav-left')}>
                    <div className={cx('modern')}>
                        {nameh1()}

                        <h6>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                            velit imperdiet dolor tempor tristique.
                        </h6>
                        <Button primary>Shop now</Button>
                        <Button outline>Explore</Button>
                    </div>
                </div>
                <div className={cx('nav-right')}>
                    <img className={cx('nav-right-img')} src={images.couch} alt="error img" />
                </div>
            </div>
        </header>
    );
}
export default Header;
