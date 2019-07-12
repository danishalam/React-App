import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
class AllProducts extends Component {

    render() {
        return (
            <div>
                 <h2>Choose your product</h2>
                 <ProductList/>
            </div>
        );
    }
}

export default AllProducts;