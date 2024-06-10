import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './oneProduct.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
const cx = classNames.bind(styles);

function OneProduct() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/products/products/${id}`)
            .then((response) => {
                setProduct(response.data.data);
                console.log(response);
                console.log(setProduct);
                setLoading(false);
            })
            .catch((error) => {
                console.error('There was an error fetching the product data!', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            {/* single product */}
            <div className={cx('single-product', 'mt-150', 'mb-150')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-5')}>
                            <div className={cx('single-product-img')}>
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>
                        <div className={cx('col-md-7')}>
                            <div className={cx('single-product-content')}>
                                <h3>{product.name}</h3>
                                <p className={cx('single-product-pricing')}>
                                    <span>{product.modelCode}</span> ${product.price}
                                </p>
                                <p>{product.description}</p>
                                <div className={cx('single-product-form')}>
                                    {/* <form action="#">
                                        <input type="number" placeholder={0} />
                                    </form> */}
                                    <button className={cx('cart-btn')} onClick={() => dispatch(addToCart(product))}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </button>
                                    <p>
                                        <strong>Categories: </strong>
                                        {/* {product.categories.join(', ')} */}
                                    </p>
                                </div>
                                <h4>Share:</h4>
                                <ul className={cx('product-share')}>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end single product */}
        </>
    );
}

export default OneProduct;
