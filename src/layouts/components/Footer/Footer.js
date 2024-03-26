import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-main')}>
            <div className={cx('footer-contact')}>
                <div className={cx('footer-contact-bot')}>
                    <div className={cx('bot-right')}>
                        <div className={cx('bot-right-flex')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon-mail')} />
                            <h5>Subscribe to Newsletter</h5>
                        </div>

                        <input name="name" type="text" placeholder="Enter your name" />
                        <input name="email" type="email" placeholder="Enter your email" />
                        <Button sent>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </div>
                    <div className={cx('bot-left')}>
                        <div className={cx('bot-left-img')}>
                            <img src="https://themewagon.github.io/furni/images/sofa.png" alt="err img" />
                        </div>
                    </div>
                </div>
                <div className={cx('footer-contact-cent')}>
                    <div className={cx('footer-contact-cent-right')}>
                        <div className={cx('footer-logo')}>
                            <Link className={cx('logo')}>
                                Subo<span>.</span>
                            </Link>
                        </div>
                        <div className={cx('footer-title')}>
                            <h3>
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                                tristique. Pellentesque habitant
                            </h3>
                        </div>

                        <div className={cx('footer-social')}>
                            <div className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faFacebook} className={cx('icon-social')} />
                            </div>
                            <div className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faTwitter} className={cx('icon-social')} />
                            </div>
                            <div className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faInstagram} className={cx('icon-social')} />
                            </div>
                            <div className={cx('footer-social-icon')}>
                                <FontAwesomeIcon icon={faYoutube} className={cx('icon-social')} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-contact-cent-left')}>
                        <ul>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                            <li>
                                <h3>support</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('footer-contact-dow')}>
                    <div className={cx('grid')}>
                        <div className={cx('row')}>
                            <div className={cx('copyright', 'col', 'l-6')}>
                                <h3>
                                    Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed
                                    By ThemeWagon
                                </h3>
                            </div>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('policy')}>
                                    <ul>
                                        <li>
                                            <Link>
                                                <h3>Terms & Conditions</h3>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link>
                                                <h3>Privacy Policy</h3>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
