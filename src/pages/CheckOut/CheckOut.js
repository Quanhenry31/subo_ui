import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CheckOut.module.scss';
import classNames from 'classnames/bind';
import { Visa } from '~/layouts/components/Icons';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '~/AuthContext';

const cx = classNames.bind(styles);

function CheckOut() {
    const cart = useSelector((state) => state.cart);
    const [inputValue, setInputValue] = useState({
        firstname: '',
        pay_method: '',
        information: '',
    });

    const { user } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };
    console.log(inputValue);

    const handleCreate = () => {
        const now = new Date();
        const twoDaysLater = new Date(now);
        twoDaysLater.setDate(now.getDate() + 2);

        if (cart.length > 0) {
            const orderDetailData = cart.map((item) => ({
                productID: item.id,
                quantity: item.quantity || 1,
                allMoney: item.price * (item.quantity || 1),
            }));

            const allPrice = orderDetailData.reduce((total, item) => total + item.allMoney, 0);

            const requestData = {
                orderData: {
                    userID: user.id,
                    orderDate: now.toISOString(),
                    address: user.address,
                    dateOk: twoDaysLater.toISOString(),
                    time: twoDaysLater.toISOString(),
                    allPrice: allPrice,
                    status: 'Pending',
                },
                orderDetailData: orderDetailData, // Always send as an array
                paymentData: {
                    name: inputValue.firstname,
                    paymentDate: new Date(),
                    amount: inputValue.information,
                    paymentMethod: inputValue.pay_method,
                },
            };

            axios
                .post('http://localhost:5000/orders/ok', requestData)
                .then((response) => {
                    console.log('API Response:', response.data);
                })
                .catch((error) => {
                    console.error('API Error:', error);
                });
        } else {
            console.error('Cart is empty');
        }
    };

    return (
        <div className={cx('main_checkout')}>
            <div className={cx('row')}>
                <div className={cx('col-75')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-50')}>
                                <h3>Billing Address</h3>
                                <div className={cx('icon-container')}>
                                    <i class="fa-brands fa-cc-visa" style={{ color: 'navy', margin: '5px' }}></i>
                                    <i class="fa-brands fa-cc-amex" style={{ color: 'blue', margin: '5px' }}></i>
                                    <i class="fa-brands fa-cc-mastercard" style={{ color: 'red', margin: '5px' }}></i>
                                    <i class="fa-brands fa-cc-discover" style={{ color: 'orange', margin: '5px' }}></i>
                                </div>
                                <label htmlFor="fname">
                                    <i className="fa fa-user" /> Full Name
                                </label>
                                <input
                                    value={inputValue.firstname}
                                    onChange={handleChange}
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="John M. Doe"
                                />

                                <label htmlFor="email">
                                    <i className="fa fa-envelope" /> Payment_Method
                                </label>
                                <input
                                    value={inputValue.pay_method}
                                    onChange={handleChange}
                                    type="text"
                                    id="pmethod"
                                    name="pay_method"
                                    placeholder="MB"
                                />

                                <label htmlFor="adr">
                                    <i className="fa fa-address-card-o" /> Sent
                                </label>
                                <input
                                    value={inputValue.information}
                                    onChange={handleChange}
                                    type="text"
                                    id="adr"
                                    name="information"
                                    placeholder="information"
                                />
                            </div>
                        </div>

                        <button className={cx('btn_checkout')} onClick={handleCreate}>
                            <input type="submit" className={cx('btn')} />
                        </button>
                    </div>
                </div>
                <div className={cx('col-25')}>
                    <div className={cx('container')}>
                        <h4>
                            Cart{' '}
                            <span className="price" style={{ color: 'black' }}>
                                <i className="fa fa-shopping-cart" /> <b>4</b>
                            </span>
                        </h4>
                        <p>
                            <a href="#">Product 1</a> <span className="price">$15</span>
                        </p>
                        <p>
                            <a href="#">Product 2</a> <span className="price">$5</span>
                        </p>
                        <p>
                            <a href="#">Product 3</a> <span className="price">$8</span>
                        </p>
                        <p>
                            <a href="#">Product 4</a> <span className="price">$2</span>
                        </p>
                        <hr />
                        <p>
                            Total{' '}
                            <span className="price" style={{ color: 'black' }}>
                                <b>$30</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
