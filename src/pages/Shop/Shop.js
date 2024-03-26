import Product from '~/components/ListProduct/Product';
import styles from '~/components/ListProduct/ListProduct.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('shop_product')}>
            <div className={cx('shop_product_list')}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Shop;
