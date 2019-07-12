import React, { Component } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import ProductList from '../ProductList/ProductList';

class Home extends Component {

    render() {
        return (
            <div >
                <Banner />
                <ProductList />
            </div>
        );
    }
}

export default Home;