import Button from '~/components/Button';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Home() {
    return (
        // product
        <div>
            <div className={cx('main-home')}>
                <div className={cx('product-home')}>
                    <div className={cx('home-left')}>
                        <div className={cx('title-home')}>
                            <h1>Crafted with excellent material.</h1>
                            <h6>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                velit imperdiet dolor tempor tristique.
                            </h6>
                            <Button primary>Explore</Button>
                        </div>
                    </div>
                    <div className={cx('home-right')}>
                        <div className={cx('list-product')}>
                            <img
                                className={cx('list-product-img')}
                                src="https://themewagon.github.io/furni/images/product-1.png"
                                alt=""
                            />
                            <h3>Ghe xinh</h3>
                            <h5>$50.00</h5>
                        </div>
                        <div className={cx('list-product')}>
                            <img
                                className={cx('list-product-img')}
                                src="https://themewagon.github.io/furni/images/product-2.png"
                                alt=""
                            />
                            <h3>Ghe xinh</h3>
                            <h5>$50.00</h5>
                        </div>
                        <div className={cx('list-product')}>
                            <img
                                className={cx('list-product-img')}
                                src="https://themewagon.github.io/furni/images/product-3.png"
                                alt=""
                            />
                            <h3>Ghe xinh</h3>
                            <h5>$50.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
