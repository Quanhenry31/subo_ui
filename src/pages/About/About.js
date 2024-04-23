import Testimonial from '~/components/Testimonial';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function About() {
    return (
        <>
            {/* Start Why Choose Us Section */}
            <div className={cx('why-choose-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'justify-content-between')}>
                        <div className={cx('col-lg-6')}>
                            <h2 className={cx('section-title')}>Why Choose Us</h2>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                velit imperdiet dolor tempor tristique.
                            </p>
                            <div className={cx('row', 'my-5')}>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <div className={cx('feature')}>
                                        <div className={cx('icon')}>
                                            <img
                                                src="https://themewagon.github.io/furni/images/truck.svg"
                                                alt="Image"
                                                className={cx('img-fluid')}
                                            />
                                        </div>
                                        <h3>Fast &amp; Free Shipping</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                            Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <div className={cx('feature')}>
                                        <div className={cx('icon')}>
                                            <img
                                                src="https://themewagon.github.io/furni/images/bag.svg"
                                                alt="Image"
                                                className={cx('img-fluid')}
                                            />
                                        </div>
                                        <h3>Easy to Shop</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                            Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <div className={cx('feature')}>
                                        <div className={cx('icon')}>
                                            <img
                                                src="https://themewagon.github.io/furni/images/support.svg"
                                                alt="Image"
                                                className={cx('img-fluid')}
                                            />
                                        </div>
                                        <h3>24/7 Support</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                            Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <div className={cx('feature')}>
                                        <div className={cx('icon')}>
                                            <img src="images/return.svg" alt="Image" className={cx('img-fluid')} />
                                        </div>
                                        <h3>Hassle Free Returns</h3>
                                        <p>
                                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                            Aliquam vulputate.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5')}>
                            <div className={cx('img-wrap')}>
                                <img
                                    src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
                                    alt="Image"
                                    className={cx('img-fluid')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
            {/* Start Team Section */}
            <div className={cx('untree_co-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'mb-5')}>
                        <div className={cx('col-lg-5', 'mx-auto', 'text-center')}>
                            <h2 className={cx('section-title')}>Our Team</h2>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        {/* Start Column 1 */}
                        <div className={cx('col-12', 'col-md-6', 'col-lg-3', 'mb-5', 'mb-md-0')}>
                            <img
                                src="https://themewagon.github.io/furni/images/person_1.jpg"
                                className={cx('img-fluid', 'mb-5')}
                            />
                            <h3 className={cx('')}>
                                <a href="#">
                                    <span className={cx('')}>Lawson</span> Arnold
                                </a>
                            </h3>
                            <span className={cx('d-block', 'position', 'mb-4')}>CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <p className={cx('mb-0')}>
                                <a href="#" className={cx('more', 'dark')}>
                                    Learn More <span className={cx('icon-arrow_forward')} />
                                </a>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className={cx('col-12', 'col-md-6', 'col-lg-3', 'mb-5', 'mb-md-0')}>
                            <img
                                src="https://themewagon.github.io/furni/images/person_2.jpg"
                                className={cx('img-fluid', 'mb-5')}
                            />
                            <h3 className={cx('')}>
                                <a href="#">
                                    <span className={cx('')}>Jeremy</span> Walker
                                </a>
                            </h3>
                            <span className={cx('d-block', 'position', 'mb-4')}>CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <p className={cx('mb-0')}>
                                <a href="#" className={cx('more', 'dark')}>
                                    Learn More <span className={cx('icon-arrow_forward')} />
                                </a>
                            </p>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className={cx('col-12', 'col-md-6', 'col-lg-3', 'mb-5', 'mb-md-0')}>
                            <img
                                src="https://themewagon.github.io/furni/images/person_3.jpg"
                                className={cx('img-fluid', 'mb-5')}
                            />
                            <h3 className={cx('')}>
                                <a href="#">
                                    <span className={cx('')}>Patrik</span> White
                                </a>
                            </h3>
                            <span className={cx('d-block', 'position', 'mb-4')}>CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <p className={cx('mb-0')}>
                                <a href="#" className={cx('more', 'dark')}>
                                    Learn More <span className={cx('icon-arrow_forward')} />
                                </a>
                            </p>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className={cx('col-12', 'col-md-6', 'col-lg-3', 'mb-5', 'mb-md-0')}>
                            <img
                                src="https://themewagon.github.io/furni/images/person_4.jpg"
                                className={cx('img-fluid', 'mb-5')}
                            />
                            <h3 className={cx('')}>
                                <a href="#">
                                    <span className={cx('')}>Kathryn</span> Ryan
                                </a>
                            </h3>
                            <span className={cx('d-block', 'position', 'mb-4')}>CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean.
                            </p>
                            <p className={cx('mb-0')}>
                                <a href="#" className={cx('more', 'dark')}>
                                    Learn More <span className={cx('icon-arrow_forward')} />
                                </a>
                            </p>
                        </div>
                        {/* End Column 4 */}
                    </div>
                </div>
            </div>
            {/* End Team Section */}
            {/* Start Testimonial Slider */}
            <Testimonial />

            {/* End Testimonial Slider */}
        </>
    );
}

export default About;
