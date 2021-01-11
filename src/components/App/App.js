import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Checkout from "../Checkout/Checkout"
import Login from "../Login/Login"
import SignUp from '../SignUp/SignUp'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import { AuthProvider } from '../contexts/AuthContext'
import Dashboard from '../Dashboard/Dashboard'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import ProductsPage from '../ProductsPage/ProductsPage'
import SingleProductPage from '../SingleProductPage/SingleProductPage'


const globalState = {
  cardProduct: []
}

const globalStateContext = React.createContext(globalState)



function App() {



  return (

    <Router>
      <AuthProvider>
        <globalStateContext.Provider value={globalState}>
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/products-page" component={ProductsPage} />
            <PrivateRoute path="/singleProduct-page" component={SingleProductPage} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

          </Switch>
        </globalStateContext.Provider>
      </AuthProvider>

    </Router>


  );
}

export default App;
