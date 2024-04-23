import Button from '~/components/Button';
import styles from './ListProduct.module.scss';
import classNames from 'classnames/bind';
import Product from './Product';

const cx = classNames.bind(styles);

function ListProduct({ data }) {
    return (
        // product

        <>
            {data.slice(0, 3).map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </>
    );
}

export default ListProduct;
