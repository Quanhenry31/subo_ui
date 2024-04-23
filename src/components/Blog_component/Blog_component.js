import styles from './Blog_component.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <>
            <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'mb-8', 'mb-md-0')}>
                <div className={cx('post-entry')}>
                    <a href="#" className={cx('post-thumbnail')}>
                        <img
                            src="https://themewagon.github.io/furni/images/post-1.jpg"
                            alt="Image"
                            className={cx('img-fluid')}
                        />
                    </a>
                    <div className={cx('post-content-entry')}>
                        <h3>
                            <a href="#">First Time Home Owner Ideas</a>
                        </h3>
                        <div className={cx('meta')}>
                            <span>
                                by <a href="#">Kristin Watson</a>
                            </span>
                            <span>
                                on <a href="#">Dec 19, 2021</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
