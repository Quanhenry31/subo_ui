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
        <>
            {/* Start Footer Section */}

            <footer className={cx('footer-section')} style={{ backgroundColor: '#eff2f1' }}>
                <div className={cx('container', 'relative')}>
                    <div className={cx('sofa-img')}>
                        <img
                            src="https://themewagon.github.io/furni/images/sofa.png"
                            alt="Image"
                            className={cx('img-fluid')}
                        />
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-8')}>
                            <div className={cx('subscription-form')}>
                                <h3 className={cx('d-flex', 'align-items-center')}>
                                    <span className={cx('me-1')}>
                                        <img
                                            src="https://themewagon.github.io/furni/images/envelope-outline.svg"
                                            alt="Image"
                                            className={cx('img-fluid')}
                                        />
                                    </span>
                                    <span>Subscribe to Newsletter</span>
                                </h3>
                                <form action="#" className={cx('row', 'g-3')}>
                                    <div className={cx('col-auto')}>
                                        <input
                                            type="text"
                                            className={cx('form-control')}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className={cx('col-auto')}>
                                        <input
                                            type="email"
                                            className={cx('form-control')}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className={cx('col-auto')}>
                                        <button className={cx('btn', 'btn-primary')}>
                                            <span className={cx('fa fa-paper-plane')} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row', 'g-5', 'mb-5')}>
                        <div className={cx('col-lg-4')}>
                            <div className={cx('mb-4', 'footer-logo-wrap')}>
                                <a href="#" className={cx('footer-logo')}>
                                    Furni<span>.</span>
                                </a>
                            </div>
                            <p className={cx('mb-4')}>
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                                tristique. Pellentesque habitant
                            </p>
                            <ul className={cx('list-unstyled', 'custom-social')}>
                                <li>
                                    <a href="#">
                                        <span className={cx('fa fa-brands fa-facebook-f')} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className={cx('fa fa-brands fa-twitter')} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className={cx('fa fa-brands fa-instagram')} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className={cx('fa fa-brands fa-linkedin')} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('col-lg-8')}>
                            <div className={cx('row', 'links-wrap')}>
                                <div className={cx('col-6', 'col-sm-6', 'col-md-3')}>
                                    <ul className={cx('list-unstyled')}>
                                        <li>
                                            <a href="#">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('col-6', 'col-sm-6', 'col-md-3')}>
                                    <ul className={cx('list-unstyled')}>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                        <li>
                                            <a href="#">Knowledge base</a>
                                        </li>
                                        <li>
                                            <a href="#">Live chat</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('col-6', 'col-sm-6', 'col-md-3')}>
                                    <ul className={cx('list-unstyled')}>
                                        <li>
                                            <a href="#">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="#">Our team</a>
                                        </li>
                                        <li>
                                            <a href="#">Leadership</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('col-6', 'col-sm-6', 'col-md-3')}>
                                    <ul className={cx('list-unstyled')}>
                                        <li>
                                            <a href="#">Nordic Chair</a>
                                        </li>
                                        <li>
                                            <a href="#">Kruzo Aero</a>
                                        </li>
                                        <li>
                                            <a href="#">Ergonomic Chair</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('border-top', 'copyright')}>
                        <div className={cx('row', 'pt-4')}>
                            <div className={cx('col-lg-6')}>
                                <p className={cx('mb-2', 'text-center', 'text-lg-start')}>
                                    Copyright © . All Rights Reserved. — Designed with love by
                                    <a href="https://untree.co">Untree.co</a> Distributed By
                                    <a hreff="https://themewagon.com">ThemeWagon</a>
                                </p>
                            </div>
                            <div className={cx('col-lg-6', 'text-center', 'text-lg-end')}>
                                <ul className={cx('list-unstyled', 'd-inline-flex', 'ms-auto')}>
                                    <li className={cx('modern')}>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
