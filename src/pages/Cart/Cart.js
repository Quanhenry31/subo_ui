import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '~/redux/cartSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '~/AuthContext';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Cart() {
    const { name } = useContext(AuthContext);

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;

        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };
    const getItemTotal = (item) => {
        return item.price * item.quantity;
    };

    // const handleCreate = () => {
    //     if (cart.length > 0) {
    //         const orderDetailData = cart.map((item) => ({
    //             productID: item.id,
    //             quantity: item.quantity || 1,
    //             allMoney: item.price * (item.quantity || 1),
    //         }));

    //         const allPrice = orderDetailData.reduce((total, item) => total + item.allMoney, 0);

    //         const requestData = {
    //             orderData: {
    //                 userID: 1,
    //                 orderDate: '2003/01/01',
    //                 address: '123 Main Street',
    //                 dateOk: '2003/01/01',
    //                 time: '2003/01/01',
    //                 allPrice: allPrice,
    //                 status: 'Pending',
    //             },
    //             orderDetailData: orderDetailData, // Always send as an array
    //             paymentData: {
    //                 name: 'John Doe',
    //                 paymentDate: '2003/01/01',
    //                 amount: 100,
    //                 paymentMethod: 'Credit Card',
    //             },
    //         };

    //         console.log(requestData);

    //         axios
    //             .post('http://localhost:5000/orders/ok', requestData)
    //             .then((response) => {
    //                 console.log('API Response:', response.data);
    //             })
    //             .catch((error) => {
    //                 console.error('API Error:', error);
    //             });
    //     } else {
    //         console.error('Cart is empty');
    //     }
    // };

    return (
        <>
            <div className={cx('untree_co-section', 'before-footer-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'mb-5')}>
                        <form className={cx('col-md-12')} method="post">
                            <div className={cx('site-blocks-table')}>
                                <table className={cx('table')}>
                                    <thead>
                                        <tr>
                                            <th className={cx('product-thumbnail')}>Image</th>
                                            <th className={cx('product-name')}>Product</th>
                                            <th className={cx('product-price')}>Price</th>
                                            <th className={cx('product-quantity')}>Quantity</th>
                                            <th className={cx('product-total')}>Total</th>
                                            <th className={cx('product-remove')}>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => {
                                            return (
                                                <tr>
                                                    <td className={cx('product-thumbnail')}>
                                                        <img src={item.image} alt="Image" className={cx('img-fluid')} />
                                                    </td>
                                                    <td className={cx('product-name')}>
                                                        <h2 className={cx('h5', 'text-black')}>{item.name}</h2>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td>
                                                        <div
                                                            className={cx(
                                                                'input-group',
                                                                'mb-3',
                                                                'd-flex',
                                                                'align-items-center',
                                                                'quantity-container',
                                                            )}
                                                            style={{ maxWidth: 120 }}
                                                        >
                                                            <div className={cx('input-group-prepend')}>
                                                                <button
                                                                    className={cx(
                                                                        'btn',
                                                                        'btn-outline-black',
                                                                        'decrease',
                                                                    )}
                                                                    onClick={() => dispatch(decrementQuantity(item.id))}
                                                                    type="button"
                                                                >
                                                                    −
                                                                </button>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className={cx(
                                                                    'form-control',
                                                                    'text-center',
                                                                    'quantity-amount',
                                                                )}
                                                                value={item.quantity}
                                                                placeholder=""
                                                                aria-label="Example text with button addon"
                                                                aria-describedby="button-addon1"
                                                            />
                                                            <div className={cx('input-group-append')}>
                                                                <button
                                                                    className={cx(
                                                                        'btn',
                                                                        'btn-outline-black',
                                                                        'increase',
                                                                    )}
                                                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                                                    type="button"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td key={item.id}> ${getItemTotal(item)}</td>
                                                    <td>
                                                        <button
                                                            href="#"
                                                            className={cx('btn', 'btn-black', 'btn-sm')}
                                                            onClick={() => dispatch(removeItem(item.id))}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {/* <tr>
                                            <td className={cx('product-thumbnail')}>
                                                <img
                                                    src="https://themewagon.github.io/furni/images/product-2.png"
                                                    alt="Image"
                                                    className={cx('img-fluid')}
                                                />
                                            </td>
                                            <td className={cx('product-name')}>
                                                <h2 className={cx('h5', 'text-black')}>Product 2</h2>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                <div
                                                    className={cx(
                                                        'input-group',
                                                        'mb-3',
                                                        'd-flex',
                                                        'align-items-center',
                                                        'quantity-container',
                                                    )}
                                                    style={{ maxWidth: 120 }}
                                                >
                                                    <div className={cx('input-group-prepend')}>
                                                        <button
                                                            className={cx('btn', 'btn-outline-black', 'decrease')}
                                                            type="button"
                                                        >
                                                            −
                                                        </button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className={cx('form-control', 'text-center', 'quantity-amount')}
                                                        defaultValue={1}
                                                        placeholder=""
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1"
                                                    />
                                                    <div className={cx('input-group-append')}>
                                                        <button
                                                            className={cx('btn', 'btn-outline-black', 'increase')}
                                                            type="button"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$49.00</td>
                                            <td>
                                                <a href="#" className={cx('btn', 'btn-black', 'btn-sm')}>
                                                    X
                                                </a>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-md-6')}>
                            <div className={cx('row', 'mb-5')}>
                                <div className={cx('col-md-6', 'mb-3', 'mb-md-0')}>
                                    <button className={cx('btn', 'btn-black', 'btn-sm', 'btn-block')}>
                                        Update Cart
                                    </button>
                                </div>
                                <div className={cx('col-md-6')}>
                                    <button className={cx('btn', 'btn-outline-black', 'btn-sm', 'btn-block')}>
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <div className={cx('col-md-12')}>
                                    <label className={cx('text-black', 'h4')} htmlFor="coupon">
                                        Coupon
                                    </label>
                                    <p>Enter your coupon code if you have one.</p>
                                </div>
                                <div className={cx('col-md-8', 'mb-3', 'mb-md-0')}>
                                    <input
                                        type="text"
                                        className={cx('form-control', 'py-3')}
                                        id="coupon"
                                        placeholder="Coupon Code"
                                    />
                                </div>
                                <div className={cx('col-md-4')}>
                                    <button className={cx('btn', 'btn-black')}>Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-6', 'pl-5')}>
                            <div className={cx('row', 'justify-content-end')}>
                                <div className={cx('col-md-7')}>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-12', 'text-right', 'border-bottom', 'mb-5')}>
                                            <h3 className={cx('text-black', 'h4', 'text-uppercase')}>Cart Totals</h3>
                                        </div>
                                    </div>
                                    <div className={cx('row', 'mb-3')}>
                                        <div className={cx('col-md-6')}>
                                            <span className={cx('text-black')}>Subtotal</span>
                                        </div>
                                        <div className={cx('col-md-6', 'text-right')}>
                                            <strong className={cx('text-black')}>${getTotal().totalQuantity}</strong>
                                        </div>
                                    </div>
                                    <div className={cx('row', 'mb-5')}>
                                        <div className={cx('col-md-6')}>
                                            <span className={cx('text-black')}>Total</span>
                                        </div>
                                        <div className={cx('col-md-6', 'text-right')}>
                                            <strong className={cx('text-black')}>${getTotal().totalPrice}</strong>
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-12')}>
                                            <Link to={config.routes.checkOut}>
                                                <button className={'btn btn-black btn-lg py-3 btn-block'}>
                                                    Proceed To Checkout
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
