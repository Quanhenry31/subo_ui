import Button from '~/components/Button';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ListProduct from '~/components/ListProduct';
import productFake from '../../data/products.json';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import config from '~/config';
import { useSelector } from 'react-redux';
import { AuthContext } from '~/AuthContext';

import Testimonial from '~/components/Testimonial';
import Services_con from '~/components/Services_con';
import Blog_component from '~/components/Blog_component';

const cx = classNames.bind(styles);

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((response) => {
            setListOfPosts(response.data.data);
        });
    }, []);
    const { user } = useContext(AuthContext);

    return (
        <>
            {/* Start Product Section */}
            <div className={cx('product-section')}>
                {' '}
                {user && user.userName}
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        {/* Start Column 1 */}
                        <div className={cx('col-md-12', 'col-lg-3', 'mb-5', 'mb-lg-0')}>
                            <h2 className={cx('mb-4', 'section-title')}>Crafted with excellent material.</h2>
                            <p className={cx('mb-4')}>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                velit imperdiet dolor tempor tristique.
                            </p>
                            <p>
                                {/* <a href="shop.html" className={cx('btn')}>
                            Explore
                        </a> */}
                                <Button outline className={cx('btn')}>
                                    {' '}
                                    Explore
                                </Button>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <ListProduct data={listOfPosts} />
                        {/* End Column 2 */}
                    </div>
                </div>
            </div>
            {/* End Product Section */}
            {/* Start Why Choose Us Section */}
            <div className={cx('why-choose-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'justify-content-between')}>
                        <div className={cx('col-lg-6')}>
                            <h2 className={cx('section-title')}>Why Choose Us</h2>
                            <p>
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                                velit imperdiet dolor tempor tristique.
                            </p>
                            <div className={cx('row', 'my-5')}>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <Services_con />
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <Services_con />
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <Services_con />
                                </div>
                                <div className={cx('col-6', 'col-md-6')}>
                                    <Services_con />
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5')}>
                            <div className={cx('img-wrap')}>
                                <img
                                    src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
                                    alt="Image"
                                    className={cx('img-fluid')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
            {/* Start We Help Section */}
            <div className={cx('we-help-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'justify-content-between')}>
                        <div className={cx('col-lg-7', 'mb-5', 'mb-lg-0')}>
                            <div className={cx('imgs-grid')}>
                                <div className={cx('grid', 'grid-1')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
                                        alt="Untree.co"
                                    />
                                </div>
                                <div className={cx('grid', 'grid-2')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
                                        alt="Untree.co"
                                    />
                                </div>
                                <div className={cx('grid', 'grid-3')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
                                        alt="Untree.co"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5', 'ps-lg-5')}>
                            <h2 className={cx('section-title', 'mb-4')}>We Help You Make Modern Interior Design</h2>
                            <p>
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus
                                malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                                tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada
                            </p>
                            <ul className={cx('list-unstyled', 'custom-list', 'my-4')}>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                            </ul>
                            <p>
                                {/* <a href="#" className={cx('btn')}>
                            Explore
                        </a> */}
                                <Button outline className={cx('btn')}>
                                    {' '}
                                    Explore
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}
            {/* Start Popular Product */}
            <div className={cx('popular-product')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12', 'col-md-6', 'col-lg-4', 'mb-4', 'mb-lg-0')}>
                            <div className={cx('product-item-sm', 'd-flex')}>
                                <div className={cx('thumbnail')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-1.png"
                                        alt="Image"
                                        className={cx('img-fluid')}
                                    />
                                </div>
                                <div className={cx('pt-3')}>
                                    <h3>Nordic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-md-6', 'col-lg-4', 'mb-4', 'mb-lg-0')}>
                            <div className={cx('product-item-sm', 'd-flex')}>
                                <div className={cx('thumbnail')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-2.png"
                                        alt="Image"
                                        className={cx('img-fluid')}
                                    />
                                </div>
                                <div className={cx('pt-3')}>
                                    <h3>Kruzo Aero Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-md-6', 'col-lg-4', 'mb-4', 'mb-lg-0')}>
                            <div className={cx('product-item-sm', 'd-flex')}>
                                <div className={cx('thumbnail')}>
                                    <img
                                        src="https://themewagon.github.io/furni/images/product-3.png"
                                        alt="Image"
                                        className={cx('img-fluid')}
                                    />
                                </div>
                                <div className={cx('pt-3')}>
                                    <h3>Ergonomic Chair</h3>
                                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                                    <p>
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Popular Product */}
            {/* Start Testimonial Slider */}
            <Testimonial />

            {/* End Testimonial Slider */}
            {/* Start Blog Section */}
            <div className={cx('blog-section')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'mb-5')}>
                        <div className={cx('col-md-6')}>
                            <h2 className={cx('section-title')}>Recent Blog</h2>
                        </div>
                        <div className={cx('col-md-6', 'text-start', 'text-md-end')}>
                            <a href="#" className={cx('more')}>
                                View All Posts
                            </a>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <Blog_component />
                        <Blog_component />
                        <Blog_component />
                    </div>
                </div>
            </div>
            {/* End Blog Section */}
        </>
    );
}

export default Home;
