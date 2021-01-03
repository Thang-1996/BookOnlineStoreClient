import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Slider from "./components/Slider";
import RecommendProduct from "./components/RecommendProduct";
import AboutDesc from "./components/AboutDesc";
import HotProduct from "./components/HotProduct";
import ServicesContent from "./components/ServicesContent";

const HomePage = (props) => {
    return (

            <div>
            <Slider/>,

        <RecommendProduct/>
            <AboutDesc/>
            <HotProduct/>
            <ServicesContent/>

        </div>
    )
}
export default HomePage;
