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
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
    );
}

export default Services_con;
