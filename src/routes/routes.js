import config from '~/config';

// Layout
import layouts, { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import About from '~/pages/About';
import Services from '~/pages/Service';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Login from '~/pages/Login';
import Signup from '~/pages/SignUp';
import Cart from '~/pages/Cart';
import OneProduct from '~/pages/oneProduct';
import CheckOut from '~/pages/CheckOut';
import Order from '~/pages/Order';
import Invoice from '~/pages/Invoice';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.about, component: About },
    { path: config.routes.services, component: Services },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.signup, component: Signup, layout: null },
    { path: config.routes.oneProduct, component: OneProduct },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.order, component: Order },
    { path: config.routes.invoice, component: Invoice, layout: null },
];

const privateRoutes = [{ path: config.routes.checkOut, component: CheckOut }];

export { publicRoutes, privateRoutes };
