import React from 'react';
import {Link} from "react-router-dom";
const Header =  (props) =>{
    return(
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><a href="#" className="web-url">www.bookstore.com</a></div>
                        <div className="col-md-6">
                            <h5>Free Shipping Over $99 + 3 Free Samples With Every Order</h5></div>
                        <div className="col-md-3">
                            <span className="ph-number">Call : 800 1234 5678</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="navbar-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/product" className="nav-link">Product</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/blog" className="nav-link">Blog</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="cart my-2 my-lg-0">
                  <span>
                    <i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                                <span className="quntity">3</span>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search here..." aria-label="Search" />
                                <span className="fa fa-search" />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;