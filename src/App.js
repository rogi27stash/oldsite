import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";

import Homepage from "./routes/Homepage";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import WebsiteFooter from "./components/Footer";

import { Trans } from 'react-i18next';

import "./i18n";

const App = () => (

        <div>

        <nav className="primary-nav">
            <div className="primary-nav__wrapper">
                <div className="primary-nav-inner">
                    <NavLink exact to="/" className="primary-nav__item"><Trans i18nKey="navbar_homepage">Обо мне</Trans></NavLink>
                    <NavLink to="/about/" className="primary-nav__item"><Trans i18nKey="navbar_skills">Навыки</Trans></NavLink>
                    <NavLink to="/contact/" className="primary-nav__item"><Trans i18nKey="navbar_contacts">Контакты</Trans></NavLink>
                </div>
            </div>
        </nav>

            <Switch className="switch-wrapper">
            
                <Route exact path="/" component={Homepage}/>
                <Route path="/about/" component={Skills}/>
                <Route path="/contact/" component={Contact}/>
                <Route component={NotFound}/>
                
            </Switch>

        <WebsiteFooter/>
        
        </div>
            
        
);

const NotFound = () => (
    <div>
        <h1>Not found.</h1>
    </div>
);

export default App;
