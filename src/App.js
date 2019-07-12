import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList'
import Home from './/components/Home/Home';
import Banner from './components/Banner/Banner';
import NavBar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllProducts from './components/All Products/AllProducts';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import MyCart from './components/MyCart/MyCart';

import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div>
        <NavBar />
        {/* Checking for the path with <Route> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/ProductDetails" component={ProductDetails} />
          <Route path="/AllProducts" component={AllProducts} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login} />
          <Route path="/MyCart" component={MyCart} />
        </Switch>
      </div>
    );
  }
}
export default App;