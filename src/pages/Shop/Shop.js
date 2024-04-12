import Product from '~/components/ListProduct/Product';
import styles from '~/components/ListProduct/ListProduct.module.scss';
import classNames from 'classnames/bind';

import productFake from '../../data/products.json';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('shop_product')}>
            <div className={cx('shop_product_list')}>
                {productFake.slice(0, 6).map((product) => (
                    <Product key={product.id} data={product} />
                ))}
                {/* <Product data={productFake} /> */}
            </div>
        </div>
    );
}

export default Shop;
