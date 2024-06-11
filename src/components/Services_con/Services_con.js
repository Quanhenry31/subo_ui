import styles from './Services_con.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Services_con() {
    return (
        <div className={cx('feature')}>
            <div className={cx('icon')}>
                <img src="https://themewagon.github.io/furni/images/bag.svg" alt="Image" className={cx('img-fluid')} />
            </div>
            <h3>Easy to Shop</h3>
            <p>
                Bộ sưu tập của chúng tôi có các thiết kế độc quyền mà bạn sẽ không tìm thấy ở bất kỳ nơi nào khác. Chúng
                tôi cũng cung cấp các tùy chọn đồ nội thất tùy chỉnh để phù hợp hoàn hảo với phong cách và nhu cầu của
                bạn.
            </p>
        </div>
    );
}

export default Services_con;
