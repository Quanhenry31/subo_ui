import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.modules.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import config from '~/config';
import axios from 'axios';
import { faEarthAsia, faGear, faRightToBracket, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

import Button from '~/components/Button';
import { useLocation, useParams } from 'react-router-dom';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';

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
    const ChangeHeader = () => {
        if (location.pathname === '/') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')}>
                                    <h1>
                                        Modern Interior <span className={cx('d-block')}>Design Studio</span>
                                    </h1>
                                    <p className={cx('mb-4')}>
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                        vulputate velit imperdiet dolor tempor tristique.
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
                            </div>
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
            );
        }
        if (location.pathname === '/shop') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Shop</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/about') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>About</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/services') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Services</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/blog') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Blog</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/contact') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Contact</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/cart') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Cart</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/oneProduct') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Product Detail</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        }
        if (location.pathname === '/checkOut') {
            return (
                <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')} style={{ margin: '117px 32px' }}>
                                    <h1>
                                        <span className={cx('d-block')}>Payment</span>
                                    </h1>
                                    <p className={cx('mb-4')}></p>
                                </div>
                            </div>
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
            );
        } else {
            return <div></div>;
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
    const navigate = useNavigate();
    const handleDelete = () => {
        axios
            .get('http://localhost:5000/users/logout')
            .then((res) => {
                // location.reload(true);
                // window.location.reload();
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                            SUPO<span>.</span>
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
                                                src="https://themewagon.github.io/furni/favicon.png"
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
                                <button
                                    type="button"
                                    className={cx('btn btn-danger btn_out_header')}
                                    onClick={handleDelete}
                                >
                                    Logout
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Header/Navigation */}
                {/* Start Hero Section */}
                {ChangeHeader()}
                {/* End Hero Section */}
            </>
        </header>
    );
}
export default Header;
