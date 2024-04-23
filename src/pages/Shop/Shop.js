import Product from '~/components/ListProduct/Product';
import styles from '~/components/ListProduct/ListProduct.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import productFake from '../../data/products.json';

import { Link } from 'react-router-dom';
import ListProduct from '~/components/ListProduct';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <>
            <>
                {/* Start Hero Section */}
                {/* <div className={cx('hero')}>
                    <div className={cx('container')}>
                        <div className={cx('row', 'justify-content-between')}>
                            <div className={cx('col-lg-5')}>
                                <div className={cx('intro-excerpt')}>
                                    <h1>Shop</h1>
                                </div>
                            </div>
                            <div className={cx('col-lg-7')} />
                        </div>
                    </div>
                </div> */}
                {/* End Hero Section */}
                <div className={cx('untree_co-section', 'product-section', 'before-footer-section')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            {/* Start Column 1 */}
                            {productFake.slice(0, 6).map((product, index) => (
                                <div className={cx('col-12', 'col-md-4', 'col-lg-3', 'mb-5')}>
                                    <a className={cx('product-item')} href="#">
                                        <img src={product.image} className={cx('img-fluid', 'product-thumbnail')} />
                                        <h3 className={cx('product-title')}>{product.name}</h3>
                                        <strong className={cx('product-price')}>{`$ ${product.price}`}</strong>
                                        <span className={cx('icon-cross')}>
                                            <img
                                                src="https://themewagon.github.io/furni/images/cross.svg"
                                                className={cx('img-fluid')}
                                            />
                                        </span>
                                    </a>
                                </div>
                            ))}
                            {/* End Column 1 */}
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Shop;
