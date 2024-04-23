import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.modules.scss';
import { Link, NavLink } from 'react-router-dom';
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
    faEllipsisVertical,
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
];

function Header() {
    const location = useLocation();
    const nameh1 = () => {
        if (location.pathname === '/') {
            return (
                <div className={cx('intro-excerpt')}>
                    <h1>
                        Modern Interior <span className={cx('d-block')}>Design Studio</span>
                    </h1>
                    <p className={cx('mb-4')}>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                        imperdiet dolor tempor tristique.
                    </p>
                    <p>
                        {/* <a href="" className={cx('btn', 'btn-secondary', 'me-2')}></a> */}
                        <Button primary className={cx('btn', 'btn-secondary', 'me-2')}>
                            {' '}
                            Shop Now
                        </Button>
                        {/* <a href="#" className={cx('btn', 'btn-white-outline')}>
                            Explore
                        </a> */}
                        <Button outline className={cx('btn', 'btn-white-outline')}>
                            {' '}
                            Explore
                        </Button>
                    </p>
                </div>
            );
        }
        if (location.pathname === '/shop') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Shop</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/about') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>About</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/services') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Services</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/blog') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Blog</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/contact') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Contact</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/login') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Login</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/cart') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Cart</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/oneProduct') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Product detail</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
        }
        if (location.pathname === '/checkOut') {
            return (
                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                    <h1>
                        <span className={cx('d-block')}>Payment</span>
                    </h1>
                    <p className={cx('mb-4')}></p>
                </div>
            );
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
            to: './login',
            separate: true,
        },
    ];
    return (
        <header>
            {/* navbar and menu */}
            <>
                {/* Start Header/Navigation */}
                <nav
                    className={cx('custom-navbar', 'navbar', 'navbar-expand-md', 'navbar-dark', 'bg-dark')}
                    arial-label="Furni navigation bar"
                >
                    <div className="container">
                        {/* <a className="navbar-brand" href="index.html">
                            Furni<span>.</span>
                        </a> */}
                        <Link to={config.routes.home} className="navbar-brand">
                            Furni<span>.</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarsFurni"
                            aria-controls="navbarsFurni"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsFurni">
                            <ul className={cx('custom-navbar-nav', 'navbar-nav', 'ms-auto', 'mb-2', 'mb-md-0')}>
                                <NavLink
                                    to={config.routes.home}
                                    className={(nav) =>
                                        cx('nav-link nav-item ', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>Home</span>
                                </NavLink>

                                <NavLink
                                    to={config.routes.shop}
                                    className={(nav) =>
                                        cx('nav-link nav-item ', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>Shop</span>
                                </NavLink>

                                <NavLink
                                    to={config.routes.about}
                                    className={(nav) =>
                                        cx('nav-link nav-item', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>About us</span>
                                </NavLink>

                                <NavLink
                                    to={config.routes.services}
                                    className={(nav) =>
                                        cx('nav-link nav-item', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>Services</span>
                                </NavLink>

                                <NavLink
                                    to={config.routes.blog}
                                    className={(nav) =>
                                        cx('nav-link nav-item', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>Blog</span>
                                </NavLink>

                                <NavLink
                                    to={config.routes.contact}
                                    className={(nav) =>
                                        cx('nav-link nav-item', {
                                            active: nav.isActive,
                                        })
                                    }
                                >
                                    <span>Contact us</span>
                                </NavLink>
                            </ul>
                            <ul className={cx('custom-navbar-cta', 'navbar-nav', 'mb-2', 'mb-md-0', 'ms-5')}>
                                <li>
                                    <NavLink
                                        to={config.routes.cart}
                                        className={(nav) =>
                                            cx('nav-link nav-item', {
                                                active: nav.isActive,
                                            })
                                        }
                                    >
                                        <span>
                                            <img src="https://themewagon.github.io/furni/images/cart.svg" />
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                                        {currentUser ? (
                                            <Image
                                                className={cx('user-avatar')}
                                                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/279861878_1636305450077264_1549291109211245035_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=r0pnRX5BInMQ7kNvgFK3rTm&_nc_oc=AdgwaFSjZL7hlKdEm96GTldUixB6ZaNvPz9IqoO1RHOUbd_QvEh72GSyY-0slVy9tfM&_nc_ht=scontent-hkg1-1.xx&oh=00_AfDfOYppTSLa4cchUuKAWQI-0EXqVqfWe1voU2uzZJkOUw&oe=662CF425"
                                                alt="avatar"
                                                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d80d1f6d50cd3b37510964b21f2fb571~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709733600&x-signature=JqERa95Mhczw9L7N93MLgkhx3UE%3D"
                                            />
                                        ) : (
                                            <button className={cx('more-btn')}>
                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                            </button>
                                        )}
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Header/Navigation */}
                {/* Start Hero Section */}
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>{nameh1()}</div>
                            <div className={cx('col-lg-7')}>
                                <div className={cx('hero-img-wrap')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/couch.png"
                                        className={cx('img-fluid')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero Section */}
            </>
        </header>
    );
}
export default Header;
