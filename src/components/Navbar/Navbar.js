import React, { Component } from 'react';
import './Navbar.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
            <nav class="layout">
                <div >
                    <Link to="/Home"><button id="two" class="button-view">Home</button></Link>
                    <Link to="/Allproducts"><button id="two" class="button-view">Products</button></Link>
                    <Link to="/AboutUs"><button id="two" class="button-view">About us</button></Link>
                    <Link to="/Contact"><button id="two" class="button-view">Contact us</button></Link>
                    <Link to="/Login"><button id="two" class="button-view">Login/SignUp</button></Link>
                    <Link to="/MyCart"><button id="two" class="button-view">My Cart</button></Link>

                    {/* <button id="two" class="button-view">New Arrivals</button>
                    <button id="two" class="button-view">About us</button>
                    <button id="two"class="button-view">Contact us</button>
                    <button id="two"class="button-view">Login/SignUp</button>
                    <button id="two"class="button-view">My Cart</button> */}

                    {/* <select class="spinner-view">
                        <option value="" disabled selected hidden>All Products </option>
                        <option value="1">All Products</option>
                        <option value="2">Expired Products</option>
                        <option value="3">Other</option>
                    </select> */}


                </div>
            </nav>
        );
    }
}
export default NavBar;  