import React from "react";
import {Route, Switch, NavLink} from "react-router-dom";

// Pages
import Homepage from "./routes/Homepage";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import NotFound from "./routes/NotFound";

// Components
import WebsiteFooter from "./components/Footer";

// Translations
import { Trans, useTranslation } from 'react-i18next';
import "./i18n";

function App() {
    
    const { t } = useTranslation();

    return (

    <div>

        <nav className="primary-nav">
            <div className="primary-nav__wrapper">
                <div className="primary-nav-inner">
                    <NavLink exact to="/" className="primary-nav__item">
                        {t("navbar.homepage")}
                    </NavLink>
                    <NavLink to="/skills" className="primary-nav__item">
                    {t("navbar.skills")}
                    </NavLink>
                    <NavLink to="/contact" className="primary-nav__item">
                    {t("navbar.contacts")}
                    </NavLink>
                </div>
            </div>
        </nav>

        <Switch className="switch-wrapper">

            <Route exact path="/" component={Homepage}/>
            <Route path="/skills/" component={Skills}/>
            <Route path="/contact/" component={Contact}/>
            <Route component={NotFound}/>

        </Switch>

        <WebsiteFooter/>

    </div>

)};

export default App;
