import Button from '~/components/Button';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ListProduct from '~/components/ListProduct';
import productFake from '../../data/products.json';

const cx = classNames.bind(styles);

function Home() {
    return (
        // product
        <ListProduct data={productFake} />
        //seevices
    );
}

export default Home;
