import Blog_component from '~/components/Blog_component';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import Testimonial from '~/components/Testimonial';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <>
            {/* Start Blog Section */}
            <div className={cx('blog-section')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <Blog_component />
                        <Blog_component />
                        <Blog_component />
                        <Blog_component />
                        <Blog_component />
                        <Blog_component />
                    </div>
                </div>
            </div>
            {/* End Blog Section */}
            <Testimonial />
        </>
    );
}

export default Blog;
