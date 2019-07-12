import React, { Component } from 'react';
import './ProductDetails.css';

class ProductDetails extends Component {
    render() {
        const productDetails = this.props.location.state.element;
        console.log("Details: " + productDetails);
        return (
            <div class="container">
                <h3 width = "100%">Product Details</h3>
                <div align="center" class="card-productdetail">

                    <div class="wrapper">
                        <div>
                            <div className="">
                                <img class ="img" src={productDetails.imageSrc} alt="Avatar" />
                            </div>
                        </div>
                        <div class="layout-details" align="left" >

                            <h2 class="product-title">{productDetails.name}</h2>
                            <p class="product-description">{productDetails.features}</p>
                            <h2 class="price">Rs. <span><strong>{productDetails.price}</strong></span></h2>
                            <br></br>

                            {/* <div class="action">
                                <button class="add-to-cart btn btn-default" type="button">add to cart</button>

                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default ProductDetails;