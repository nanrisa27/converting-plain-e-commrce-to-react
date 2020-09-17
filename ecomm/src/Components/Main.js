import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './Authentications/Login';
import Register from './Authentications/Register';
import Contact from "./Layout/Contact";
import Copyright from './Layout/Copyright';
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';
import Top from './Layout/Top';
//import AdvantagesHomepage from './Products/AdvantagesHomepage';
import blogHomePage from './Products/blogHomePage';
import GetInspired from './Products/GetInspired';
import HotProducts from './Products/HotProducts';

const main = () => {
    return (
        <Switch>
            <Route exact path="/" Component={Top}></Route>
            <Route exact path="/Navbar" Component={NavBar}></Route>
            <Route exact path="/Login" Component={Login}></Route>
            <Route exact path="/Register" Component={Register}></Route>
            <Route exact path="/Contact" Component={Contact}></Route>
            <Route exact path="/BlogHomePage" Component={blogHomePage}></Route>
            <Route exact path="/GetInspired" Component={GetInspired}></Route>
            <Route exact path="/HotProducts" Component={HotProducts}></Route>
            <Route exact path="/Footer" Component={Footer}></Route>
            <Route exact path="/Copyright" Component={Copyright}></Route>


        </Switch>
    );

}

export default main;
