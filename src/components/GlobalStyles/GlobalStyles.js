import PropTypes from 'prop-types';
import './Grid.scss';
// import './template_css/bootstrap.min.css';
import './template_css/style.css';
// import './template_css/tinySlider.css';
import './template_css/style.scss';
import './GlobalStyles.scss';

///cart template
// <!-- fontawesome -->
import './cart_css/assets/css/all.min.css';

/* <!-- bootstrap --> */

// import './cart_css/assets/bootstrap/css/bootstrap.min.css';
/* <!-- owl carousel --> */
import './cart_css/assets/css/owl.carousel.css';
/* <!-- magnific popup --> */
import './cart_css/assets/css/magnific-popup.css';
/* <!-- animate css --> */
import './cart_css/assets/css/animate.css';
/* <!-- mean menu css --> */
import './cart_css/assets/css/meanmenu.min.css';
/* <!-- main style --> */
import './cart_css/assets/css/main.css';
/* <!-- responsive --> */
import './cart_css/assets/css/responsive.css';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
