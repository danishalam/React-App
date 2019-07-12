import React, { Component } from 'react';
import axios from "axios";
import './Product.css';
import { withRouter } from 'react-router';
import Product from '../ProductList/Product';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductHelper, { getAllProducts, getExpiringProducts, getExpiredProducts } from './ProductHelper';
import Pagination from '../Pagination/Pagination';

class ProductList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            value: "",
            isItimeClcik: true,
            allProducts: [],
            productItimeClick: false,
            currentPage: 1,
            productPerPage: 6
        };
        this.handleChange = this.handleChange.bind(this);
        this.viewItemDetails = this.viewItemDetails.bind(this);
        this.paginate = this.paginate.bind(this);

    }

    render() {
        const { allProducts, currentPage, productPerPage } = this.state;
        // Logic for displaying todos
        const indexOfLastPage = currentPage * productPerPage;
        const indexOfFirstPage = indexOfLastPage - productPerPage;
        const currentTodos = allProducts.slice(indexOfFirstPage, indexOfLastPage);
        return (<div>
            <Filter data={this.state.value} handleChange={this.handleChange}></Filter>
            <h1>    .</h1>
            <Pagination postPerPage={productPerPage} toalPage={allProducts.length} paginate={this.paginate}/>
            <Product data={currentTodos} viewItemDetails={this.viewItemDetails}></Product>
            
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
        } else if (event.target.value == "Expiring products") {
            this.setState({
                allProducts: getExpiringProducts(getAllProducts(this.state.value))
            });
        } else if (event.target.value == "Exipred products") {
            const expired = getExpiredProducts(getAllProducts(this.state.value));
            this.setState({ allProducts: expired });
        }
    }

    viewItemDetails = productElement => {
        console.log(productElement);
        this.props.history.push({
            pathname: "/ProductDetails",
            state: {
                element: productElement
            }
        })
    }

    paginate(event) {
        this.setState({
          currentPage: Number(event)
        });
      }
}



// class Product extends Component {
//     render() {
//         const products = this.props.data.map(function (product, index) {
//             return (
//                 <div className="layout">

//                     <card className="card" >
//                         <div className="">
//                             <button onClick={this.props.viewItemDetails.bind(this, product)}><Link to="/ProductDetails" ></Link>Details</button>
//                             <button ><Link to="/MyCart" ></Link>+Cart</button>
//                         </div>
//                         <div className="">
//                             <img src={product.imageSrc} alt="Avatar" />
//                         </div>
//                         <div className="product_name">
//                             <h5>{product.name}</h5>
//                         </div>
//                     </card>
//                 </div>
//             );
//         }.bind(this)
//         );
//         console.log(">>>>>>>>>>>>>>>>>>>>", products);
//         return <div className="row">{products}</div>;
//     }
// }

class Filter extends Component {

    render() {
        return (<div className="dropdown">

            <select class="spinner-view" onChange={this.props.handleChange}>
                <option value="" disabled selected hidden>All Products </option>
                <option value="All Product">All Products</option>
                <option value="Expiring products">Expiring Products</option>
                <option value="Exipred products">Expired Products</option>
            </select>

        </div>
        );
    }
}

export default withRouter(ProductList);