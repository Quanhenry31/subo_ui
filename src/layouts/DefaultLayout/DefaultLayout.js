import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '../components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="author" content="Untree.co" />
            <link rel="shortcut icon" href="favicon.png" />
            <meta name="description" content="" />
            <meta name="keywords" content="bootstrap, bootstrap4" />
            <link href="../../components/GlobalStyles/bootstrap.min.css" rel="stylesheet" />
            <link href="../../components/GlobalStyles/tinySlider.css" rel="stylesheet" />
            <link href="../../components/GlobalStyles/style.css" rel="stylesheet" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                rel="stylesheet"
            />
            <div className={cx('Wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                    <div className={cx('footer')}>
                        <Footer />
                    </div>
                </div>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/tiny-slider.js"></script>
                <script src="js/custom.js"></script>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
