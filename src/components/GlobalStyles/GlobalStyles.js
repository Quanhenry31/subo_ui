import PropTypes from 'prop-types';
import './Grid.scss';
// import './bootstrap.min.css';
import './style.css';
// import './tinySlider.css';
import './style.scss';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
