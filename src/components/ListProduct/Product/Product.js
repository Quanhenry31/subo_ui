import Button from '~/components/Button';
import styles from '../ListProduct.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Product({ data }) {
    return (
        <div>
            <div className={cx('list-product')}>
                <img
                    className={cx('list-product-img')}
                    src="https://themewagon.github.io/furni/images/product-1.png"
                    alt=""
                />
                <h3>Ghe xinh</h3>
                <h5>$50.00</h5>
            </div>
        </div>
    );
}

export default Product;
