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
import grey from '@material-ui/core/colors/grey';


dotenv.config()
axios.defaults.baseURL=process.env.REACT_APP_API || "http://localhost:3001"

export const themeLight = createMuiTheme({
  typography: {
    fontFamily: 'Woodland'
   },
  palette: {
    // type: "light",
    text:{
      primary:'#f27121',
      // secondary:'#f27121'
      // inherit:'#ffffff'
    },
    primary:{
      main: '#f27121',
      light:'#ffffff',
      dark:'#ff6f00',
    },
    secondary: {
      main: '#000000',
      light:'#ffffff',
    },
    background: {
      default: "#cfd8dc",
      level1: "#cfd8dc",
      level2: "#cfd8dc",
      paper: "#fafafa"
    },
  },
});

export const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Woodland'
   },
  palette: {
    // type: "dark",
    text:{
      primary:'#ffffff',
      // inherit:'#ffffff'
    },
    primary:{
      main: '#ffffff',
      light:'#76ff03',
      dark:'#ff6f00',
    },
    secondary: {
      main: '#ffffff',
      dark:'#ff6f00',
    },
    background: {
      default: "#222222",
      level1: "#cfd8dc",
      level2: "#cfd8dc",
      paper: grey[600],
    },
  
  },
});

function App() {

 

 

      const darkMode = useSelector(state => state.darckModeReducer.darckModeState)

  return (
    <React.Fragment>
      <AuthProvider>

        <ThemeProvider theme={darkMode ? themeDark : themeLight}>
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

