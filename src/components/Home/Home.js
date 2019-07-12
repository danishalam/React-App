import React, { Component } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Products from '../ProductList/Product';

class Home extends Component {

    render() {
        return (
            <div >
                <Banner />
                <Products />
            </div>
        );
    }
}

export default Home;