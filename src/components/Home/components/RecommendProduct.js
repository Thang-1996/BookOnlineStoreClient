import React from 'react';

const RecommendProduct = () =>{
    return (
        <section className="recomended-sec">
            <div className="container">
                <div className="title">
                    <h2>highly recommendes books</h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <img src="images/img1.jpg" alt="img" />
                            <h3>how to be a bwase</h3>
                            <h6><span className="price">$49</span> / <a href="#">Buy Now</a></h6>
                            <div className="hover">
                                <a href="product-single.html">
                                    <span><i className="fa fa-long-arrow-right" aria-hidden="true" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <img src="images/img2.jpg" alt="img" />
                            <h3>How to write a book...</h3>
                            <h6><span className="price">$19</span> / <a href="#">Buy Now</a></h6>
                            <span className="sale">Sale !</span>
                            <div className="hover">
                                <a href="product-single.html">
                                    <span><i className="fa fa-long-arrow-right" aria-hidden="true" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <img src="images/img3.jpg" alt="img" />
                            <h3>7-day self publish...</h3>
                            <h6><span className="price">$49</span> / <a href="#">Buy Now</a></h6>
                            <div className="hover">
                                <a href="product-single.html">
                                    <span><i className="fa fa-long-arrow-right" aria-hidden="true" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <img src="images/img4.jpg" alt="img" />
                            <h3>wendy doniger</h3>
                            <h6><span className="price">$49</span> / <a href="#">Buy Now</a></h6>
                            <div className="hover">
                                <a href="product-single.html">
                                    <span><i className="fa fa-long-arrow-right" aria-hidden="true" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default RecommendProduct;