import React from 'react';

const ServicesContent = () =>{
    return (
        <section className="features-sec">
            <div className="container">
                <ul>
                    <li>
                        <span className="icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                        <h3>SAFE SHOPPING</h3>
                        <h5>Safe Shopping Guarantee</h5>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's...</h6>
                    </li>
                    <li>
                        <span className="icon return"><i className="fa fa-reply-all" aria-hidden="true"></i></span>
                        <h3>30- DAY RETURN</h3>
                        <h5>Moneyback guarantee</h5>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's...</h6>
                    </li>
                    <li>
                        <span className="icon chat"><i className="fa fa-comments" aria-hidden="true"></i></span>
                        <h3>24/7 SUPPORT</h3>
                        <h5>online Consultations</h5>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's...</h6>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default ServicesContent;