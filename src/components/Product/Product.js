import React,{useState,useEffect} from 'react'
import API from "../../API";
import Services from "../../Services";
import Category from "../../models/Category";
import CategoryItems from "./components/CategoryItems";
import ProductItems from "./components/ProductItems";
import {Link} from "react-router-dom";

const Product = () =>{
    return (
        <div>
            <div className="breadcrumb">
                <div className="container">
                    <Link to="/">Home / </Link>
                    <span className="breadcrumb-item active">Products</span>
                </div>
            </div>
            <section className="static about-sec">
                <div className="container">
                    <h2 style={{textAlign : 'center'}}>Category List</h2>
                    <div className="recomended-sec">
                            <CategoryItems/>
                    </div>
                    <h2 style={{textAlign : 'center'}}>Product(Render By Click On Category)</h2>
                    <div className="recent-book-sec">
                            <ProductItems/>
                        {/*<div className="btn-sec">*/}
                        {/*    <a href="products.html" className="btn gray-btn">load More books</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <section className="static about-sec">
                <div className="container">
                    <h2 style={{textAlign : 'center'}}>Relative Product</h2>
                    <div className="recent-book-sec">
                        <ProductItems/>
                        {/*<div className="btn-sec">*/}
                        {/*    <a href="products.html" className="btn gray-btn">load More books</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </div>


    );
}

export default Product;