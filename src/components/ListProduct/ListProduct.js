import Button from '~/components/Button';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import Product from './Product';

const cx = classNames.bind(styles);

function ListProduct({ data }) {
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
                        {data.slice(0, 3).map((product) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;
