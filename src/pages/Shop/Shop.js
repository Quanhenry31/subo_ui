import Product from '~/components/ListProduct/Product';
import styles from '~/components/ListProduct/ListProduct.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import productFake from '../../data/products.json';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <>
            <div>
                <div className="untree_co-section product-section before-footer-section">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Start Column 1 --> */}
                            {productFake.slice(0, 8).map((product, index) => (
                                <div key={index} className="col-12 col-md-4 col-lg-3 mb-5">
                                    <Link className="product-item">
                                        <img src={product.image} className="img-fluid product-thumbnail" alt="loi" />
                                        <h3 className="product-title">{product.name}</h3>
                                        <strong className="product-price">${product.price}</strong>

                                        <span className="icon-cross">
                                            <img
                                                src="https://themewagon.github.io/furni/images/cross.svg"
                                                alt="Cross"
                                                className="img-fluid"
                                            />
                                        </span>
                                    </Link>
                                </div>
                            ))}
                            {/* <!-- end product 1 --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
