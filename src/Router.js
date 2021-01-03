import React from 'react';
import {Route,Switch} from "react-router-dom";
import Product from "./components/Product/Product";
import HomePage from "./components/Home/HomePage";
import About from "./components/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
function Router() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    )
}

export default Router;