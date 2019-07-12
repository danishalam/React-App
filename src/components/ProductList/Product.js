import React, { Component } from 'react';
import axios from "axios";
import './Product.css';
import { withRouter } from 'react-router';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductHelper, { getAllProducts, getExpireProducts } from './ProductHelper';


class Products extends Component {

    constructor(props) {

        super(props);
        this.state = {
            value: "",
            isItimeClcik: true,
            allProducts: [],
            productItimeClick: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
       

    }

    render() {
        return (<div>
            <Filter data={this.state.value} handleChange={this.handleChange}></Filter>
            <h1>    .</h1>

            <Product data={this.state.allProducts} clickBtn={this.clickBtn}></Product>
        </div>);

    }

    componentDidMount() {
        this.getJsonData()
    }

    getJsonData() {
        axios.get("./product_list.json").then(res => {
            this.setState({
                allProducts: getAllProducts(res.data)
            })
            this.setState({
                value: res.data
            });
        });
    }

  

    handleChange(event) {
        if (event.target.value == "All Product") {
            this.setState({ allProducts: getAllProducts(this.state.value) });
        } else if (event.target.value == "Expired Products") {
            this.setState({
                allProducts: getExpireProducts(getAllProducts(this.state.value))
            });
        }
    }

    clickBtn = productElement => {
        console.log(productElement);
        this.props.history.push({
            pathname: "/ProductDetails",
            state: {
                element: productElement
            }
        })
    }
}



class Product extends Component {
    render() {
        const products = this.props.data.map(function (product, index) {
            return (
                <div className="layout">

                    <card className="card" >
                        <div className="">
                            <button onClick={this.props.clickBtn.bind(this, product)}><Link to="/ProductDetails" ></Link>Details</button>
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

class Filter extends Component {

    render() {
        return (<div className="dropdown">

            <select class="spinner-view" onChange={this.props.handleChange}>
                <option value="" disabled selected hidden>All Products </option>
                <option value="All Product">All Products</option>
                <option value="Expired Products">Expired Products</option>
            </select>

        </div>
        );
    }
}

export default withRouter(Products);