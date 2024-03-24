import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.modules.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

// import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
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
                    <ul>
                        <li>
                            <Link to={config.routes.home}>Home</Link>
                        </li>
                        <li>
                            <Link to={config.routes.shop}>Shop</Link>
                        </li>
                        <li>
                            <Link to={config.routes.about}>About</Link>
                        </li>
                        <li>
                            <Link to={config.routes.services}>Service</Link>
                        </li>
                        <li>
                            <Link to={config.routes.blog}>Blog</Link>
                        </li>
                        <li>
                            <Link to={config.routes.contact}>Contact us</Link>
                        </li>
                        {/* menu-user,cart */}
                        <div className={cx('menu-li')}>
                            <li>
                                <Link to={config.routes.login}>
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </Link>
                            </li>
                            <li>
                                <Link to={config.routes.cart}>
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
                        <h1>Modern Interior Design Studio</h1>
                        <h6>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                            velit imperdiet dolor tempor tristique.
                        </h6>
                        <Button primary>Shop now</Button>
                        <Button outline>Explore</Button>
                    </div>
                </div>
                <div className={cx('nav-right')}>
                    <img src="https://themewagon.github.io/furni/images/couch.png" alt="error img" />
                </div>
            </div>
        </header>
    );
}
export default Header;
