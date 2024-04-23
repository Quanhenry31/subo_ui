import Services_con from '~/components/Services_con';
import styles from './Service.module.scss';
import classNames from 'classnames/bind';
import ListProduct from '~/components/ListProduct';
import productFake from '../../data/products.json';
import Testimonial from '~/components/Testimonial';

const cx = classNames.bind(styles);

function Service() {
    return (
        <>
            <div className={cx('why-choose-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'my-5')}>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        <div className={cx('col-6', 'col-md-6', 'col-lg-3', 'mb-4')}>
                            <Services_con />
                        </div>
                        {/* Repeat the above columns */}
                    </div>
                </div>
            </div>
            {/* Start Product Section */}
            <div className={cx('product-section')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        {/* Start Column 1 */}
                        <div className={cx('col-md-12', 'col-lg-3', 'mb-5', 'mb-lg-0')}>
                            <h2 className={cx('mb-4', 'section-title')}>Crafted with excellent material.</h2>
                            <p className={cx('mb-4')}>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                velit imperdiet dolor tempor tristique.
                            </p>
                            <p>
                                <a href="shop.html" className={cx('btn')}>
                                    Explore
                                </a>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <ListProduct data={productFake} />
                        {/* End Column 2 */}
                    </div>
                </div>
            </div>
            {/* End Product Section */}
            {/* Start Testimonial Slider */}
            <Testimonial />

            {/* End Testimonial Slider */}
        </>
    );
}

export default Service;
