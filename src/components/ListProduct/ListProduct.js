import Button from '~/components/Button';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ListProduct({ data }) {
    const dispatch = useDispatch();
    return (
        // product
        <>
            {data.slice(0, 3).map((data, index) => (
                <div key={index} className={cx('col-12', 'col-md-4', 'col-lg-3', 'mb-5')}>
                    <div className={cx('product-item')}>
                        <Link to={`/products/${data.id}`}>
                            <img src={data.image} className={cx('img-fluid', 'product-thumbnail')} />
                            <h3 className={cx('product-title')}>{data.name}</h3>
                            <strong className={cx('product-price')}>{`$ ${data.price}`}</strong>
                        </Link>
                        <button className={cx('icon-cross')} onClick={() => dispatch(addToCart(data))}>
                            <img
                                src="https://themewagon.github.io/furni/images/cross.svg"
                                className={cx('img-fluid')}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListProduct;
