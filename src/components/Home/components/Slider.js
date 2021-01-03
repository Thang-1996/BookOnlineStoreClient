import React from 'react';
import {Link} from "react-router-dom";

const Slider = () =>{
    return (
        <section className="slider" style={{marginLeft : '450px'}}>
            <section className="container">
                    <div className="item">
                        <div className="slide">
                            <img src="images/slide1.jpg" alt="slide1" />
                            <div className="content">
                                <div className="title">
                                    <h3>welcome to bookstore</h3>
                                    <h5>Discover the best books online with us</h5>
                                    <Link to="/product" className={"btn"}>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </section>
    );
}
export default Slider;