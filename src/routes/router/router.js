import { createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../pages/Login/Login';
import CheckOut from '../../pages/Pages/Checkout/CheckOut';
import Home from '../../pages/Pages/Home';
import Orders from '../../pages/Pages/Orders/Orders';
import Signup from '../../pages/Signup/Signup';
import PrivateRoutes from '../../PrivateRoutes/PrivateRoutes'

const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <Signup></Signup>
        },
        {
          path : '/checkout/:id',
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element : <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        },
        {
          path : '/orders',
          element : <PrivateRoutes><Orders></Orders></PrivateRoutes>
        }
      ]
    }
  ])

  export default router