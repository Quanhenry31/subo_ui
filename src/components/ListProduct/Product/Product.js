import Button from '~/components/Button';
import styles from '../ListProduct.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Product({ data }) {
    return (
        <div className={cx('col-12', 'col-md-4', 'col-lg-3', 'mb-5')}>
            <a className={cx('product-item')} href="#">
                <img src={data.image} className={cx('img-fluid', 'product-thumbnail')} />
                <h3 className={cx('product-title')}>{data.name}</h3>
                <strong className={cx('product-price')}>{`$ ${data.price}`}</strong>
                <span className={cx('icon-cross')}>
                    <img src="https://themewagon.github.io/furni/images/cross.svg" className={cx('img-fluid')} />
                </span>
            </a>
        </div>
    );
}

export default Product;
