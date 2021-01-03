import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

render(
        <Router class="wrapper" id="wrapper">
            <Header/>
            <App />
            <Footer/>
        </Router>,
    document.querySelector('#root')
)

