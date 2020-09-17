import React from 'react';
import AdvantagesHomepage from '../Products/AdvantagesHomepage';
import Advantages from "../Products/Advantages";
import blogHomePage from '../Products/blogHomePage';
import GetInspired from '../Products/GetInspired';
import HotProducts from '../Products/HotProducts';
import Copyright from './Copyright';
import Footer from './Footer';
import NavBar from './NavBar';
import Top from './Top';

const Homepage = () => {
    return (
        <div>
            <Top />
            <NavBar />
            <Advantages />
            <HotProducts />
            <GetInspired />
            <blogHomePage />
            <Footer />
            <Copyright />




        </div>
    );
}

export default Homepage;
