import React, { Component } from 'react';
import Product from '../ProductList/Product';
class AllProducts extends Component {

    render() {
        return (
            <div>
                 <h2>Choose your product</h2>
                 <Product/>
            </div>
        );
    }
}

export default AllProducts;