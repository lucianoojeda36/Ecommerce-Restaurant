import React from 'react';
import { Route,Switch} from "react-router-dom";
import { Home } from './pages/Home';
import PageAddProduct from './pages/adminProduct/PageAddProduct'
import Product from './components/Product/Product'
import {PageAdminProduct} from './pages/adminProduct/PageAdminProduct';
import PageDiscountProduct from './pages/adminProduct/PageDiscountProduct.js';
import PageEditProduct from './pages/adminProduct/PageEditProduct';
import PageAddCategory from './pages/adminCategory/PageAddCategory';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import PageCheckoutOrders from './pages/ordersCheck/PageCheckoutOrders'
import ViewOrder from './components/admin/adminOrders/ViewOrder'
import CartProducts from './pages/cart/CartProducts'
import {PageAdminCategories} from './pages/adminCategory/PageAdminCategories'
import PageEditCategory from './pages/adminCategory/PageEditCategory'
import dotenv from "dotenv";
import axios from 'axios';
import   PrivateRoute  from "./components/login/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";
import PageLogIn from './pages/landingPage/LandingPage';
import {Checkout} from './pages/checkOut/Checkout'
import FormAdmin from './components/login/FormAdmin';
import PageSignUp from './pages/landingPage/SignUp';
import { Advertencia } from './components/localizacion/Advertencia';
import { LandingPage } from './pages/LandingPage';
import Profile from './pages/profile/Profile'
import { useSelector } from "react-redux";


dotenv.config()
axios.defaults.baseURL=process.env.REACT_APP_API || "http://localhost:3001"

function App() {

  const darkMode = useSelector(state => state.darckModeReducer.darckModeState)

    console.log("=JJHHHH===============>",darkMode)

    

    const pepe = createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light"
        }
      })

  return (
    <React.Fragment>
      <AuthProvider>

        <ThemeProvider theme={pepe}>
        <Switch>
          <Route exact path='/cart' component={CartProducts} />
          <Route exact path='/logIn' component={PageLogIn} />
          <Route exact path='/signUp' component={PageSignUp } />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route path='/discountProduct/:id' component={PageDiscountProduct} />
          <PrivateRoute path='/editProduct/:id' component={PageEditProduct} />
          <PrivateRoute path='/adminProduct' component={PageAdminProduct} />
          <PrivateRoute path='/createProduct' component={PageAddProduct} />
          <PrivateRoute path='/creaCategories' component={PageAddCategory} />
          <PrivateRoute path='/adminCategories' component={PageAdminCategories} />
          <PrivateRoute path='/creaCategories' component={PageAddCategory} />
          <PrivateRoute path='/editCategory/:id' component={PageEditCategory} />
          <PrivateRoute path='/PageCheckoutOrders' component={PageCheckoutOrders} />
          <Route path='/Advertencia' component={Advertencia} />
          <Route path='/PageCheckout' component={Checkout} />
          <PrivateRoute path='/ViewOrder/:id' component={ViewOrder} />
          <Route path='/FormAdmin' component={FormAdmin} />
          <Route path='/product/:id' component={Product} />
          <Route path="/me/:id" component={Profile} />
          <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </React.Fragment >
  );
}

export default App;

