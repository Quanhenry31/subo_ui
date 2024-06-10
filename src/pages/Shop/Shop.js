// src/components/Shop.js
import styles from '~/components/ListProduct/ListProduct.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import Search from '~/components/Search';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Shop() {
    const dispatch = useDispatch();
    const [listOfPosts, setListOfPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const debounceValue = useDebounce(searchValue, 1000);

    const fetchProducts = () => {
        axios
            .get('http://localhost:5000/products')
            .then((response) => {
                setListOfPosts(response.data.data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    };

    const handleSearch = () => {
        if (debounceValue) {
            console.log(debounceValue);
            console.log('oke');
            axios
                .get('http://localhost:5000/products/search?q=' + debounceValue)
                .then((response) => {
                    setListOfPosts(response.data.data);
                    console.log(response);
                })
                .catch((error) => console.error('Error fetching search results:', error));
        } else {
            fetchProducts();
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [debounceValue]);

    return (
        <div>
            <div className="search_shop">
                <Search value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className={cx('untree_co-section', 'product-section', 'before-footer-section')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        {/* Start Column 1 */}
                        {listOfPosts.slice(0, 6).map((product, index) => (
                            <div key={index} className={cx('col-12', 'col-md-4', 'col-lg-3', 'mb-5')}>
                                <div className={cx('product-item')}>
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            src={product.image}
                                            className={cx('img-fluid', 'product-thumbnail')}
                                            alt={product.name}
                                        />
                                        <h3 className={cx('product-title')}>{product.name}</h3>
                                        <strong className={cx('product-price')}>{`$ ${product.price}`}</strong>
                                    </Link>
                                    <button className={cx('icon-cross')} onClick={() => dispatch(addToCart(product))}>
                                        <img
                                            src="https://themewagon.github.io/furni/images/cross.svg"
                                            className={cx('img-fluid')}
                                            alt="icon-cross"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* End Column 1 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
