import Slider from 'react-slick';

import styles from './Testimonial.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };
    return (
        <div className={cx('testimonial-section')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-7', 'mx-auto', 'text-center')}>
                        <h2 className={cx('section-title')}>Testimonials</h2>
                    </div>
                </div>
                <div className={cx('row', 'justify-content-center')}>
                    <div className={cx('col-lg-12')}>
                        <div className={cx('testimonial-slider-wrap', 'text-center')}>
                            <div className={cx('testimonial-slider')}>
                                <div className={cx('item')}>
                                    <div className={cx('row', 'justify-content-center')}>
                                        <div className={cx('col-lg-8', 'mx-auto')}>
                                            <div className={cx('testimonial-block', 'text-center')}>
                                                <Slider {...settings}>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {' '}
                                                            <blockquote className={cx('mb-5')}>
                                                                <p>
                                                                    “Donec facilisis quam ut purus rutrum lobortis.
                                                                    Donec vitae odio quis nisl dapibus malesuada. Nullam
                                                                    ac aliquet velit. Aliquam vulputate velit imperdiet
                                                                    dolor tempor tristique. Pellentesque habitant morbi
                                                                    tristique senectus et netus et malesuada fames ac
                                                                    turpis egestas. Integer convallis volutpat dui quis
                                                                    scelerisque.”
                                                                </p>
                                                            </blockquote>
                                                            <div className={cx('author-info')}>
                                                                <div
                                                                    className={cx(
                                                                        'author-pic',
                                                                        'd-flex',
                                                                        'justify-content-center',
                                                                        'align-items-center',
                                                                    )}
                                                                >
                                                                    <img
                                                                        src="https://themewagon.github.io/furni/images/person-1.png"
                                                                        alt="Maria Jones"
                                                                        className={cx('img-fluid')}
                                                                    />
                                                                </div>
                                                                <h3 className={cx('font-weight-bold')}>Maria Jones</h3>
                                                                <span className={cx('position', 'd-block', 'mb-3')}>
                                                                    CEO, Co-Founder, XYZ Inc.
                                                                </span>
                                                            </div>
                                                        </h3>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
