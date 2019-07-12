import React, { Component } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Product extends Component {
    render() {
        const products = this.props.data.map(function (product, index) {
            return (
                <div className="layout">

                    <card className="card" >
                        <div className="">
                            <button onClick={() => this.props.viewItemDetails(product)}><Link to="/ProductDetails" ></Link>Details</button>
                            <button ><Link to="/MyCart" ></Link>+Cart</button>
                        </div>
                        <div className="">
                            <img src={product.imageSrc} alt="Avatar" />
                        </div>
                        <div className="product_name">
                            <h5>{product.name}</h5>
                        </div>
                    </card>
                </div>
            );
        }.bind(this)
        );
        console.log(">>>>>>>>>>>>>>>>>>>>", products);
        return <div className="row">{products}</div>;
    }
}
export default Product;