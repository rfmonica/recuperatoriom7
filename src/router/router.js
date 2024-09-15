import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";


import App from "../App";
import Traductor from "../screens/traductor/traductor.jsx"


const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/traductor',
                element: <Traductor />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;