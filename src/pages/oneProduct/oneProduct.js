import styles from './oneProduct.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function oneProduct() {
    return (
        <>
            {/* single product */}
            <div className={cx('single-product', 'mt-150', 'mb-150')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-5')}>
                            <div className={cx('single-product-img')}>
                                <img
                                    src="https://themewagon.github.io/fruitkha/assets/img/products/product-img-5.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={cx('col-md-7')}>
                            <div className={cx('single-product-content')}>
                                <h3>Green apples have polyphenols</h3>
                                <p className={cx('single-product-pricing')}>
                                    <span>Per Kg</span> $50
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos,
                                    rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa,
                                    quisquam animi perferendis eos eum modi! Tempora, earum.
                                </p>
                                <div className={cx('single-product-form')}>
                                    <form action="index.html">
                                        <input type="number" placeholder={0} />
                                    </form>
                                    <a href="cart.html" className={cx('cart-btn')}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </a>
                                    <p>
                                        <strong>Categories: </strong>Fruits, Organic
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

export default oneProduct;
