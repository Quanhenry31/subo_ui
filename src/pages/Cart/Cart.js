import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Cart() {
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
                                        <tr>
                                            <td className={cx('product-thumbnail')}>
                                                <img
                                                    src="https://themewagon.github.io/furni/images/product-1.png"
                                                    alt="Image"
                                                    className={cx('img-fluid')}
                                                />
                                            </td>
                                            <td className={cx('product-name')}>
                                                <h2 className={cx('h5', 'text-black')}>Product 1</h2>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
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
                                            <strong className={cx('text-black')}>$230.00</strong>
                                        </div>
                                    </div>
                                    <div className={cx('row', 'mb-5')}>
                                        <div className={cx('col-md-6')}>
                                            <span className={cx('text-black')}>Total</span>
                                        </div>
                                        <div className={cx('col-md-6', 'text-right')}>
                                            <strong className={cx('text-black')}>$230.00</strong>
                                        </div>
                                    </div>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-12')}>
                                            <button
                                                className={cx('btn', 'btn-black', 'btn-lg', 'py-3', 'btn-block')}
                                                onClick={() => (window.location.href = 'checkout.html')}
                                            >
                                                Proceed To Checkout
                                            </button>
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
