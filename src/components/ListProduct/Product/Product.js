import Button from '~/components/Button';
import styles from '../ListProduct.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function Product({ data }) {
    return (
        <div>
            <div className={cx('list-product')}>
                <Image className={cx('list-product-img')} src={data.image} alt="loi anh" />
                <h3>{data.name}</h3>
                <h5>{`$ ${data.price}`}</h5>
            </div>
        </div>
    );
}

export default Product;
