import React from 'react'
import {Link} from "react-router-dom";
import PageTitle from '../components/PageTitle';

import { useTranslation } from 'react-i18next';

function Homepage() {

    const { t } = useTranslation();
    
    return (

    <div>

    <PageTitle titleName={t("page_titles.homepage")}/>

        <div className="card-block">
            <div className="card-block__inner">

                <div className="avatar-container">
                    <a
                        target="_blank"
                        href="https://gatodelfuturo.tumblr.com/"
                        title="Artwork by Gaturo, click on this link to open his page!">
                        <div className="avatar-wrapper">
                            <img alt="avatar" src="./img/avatar.png"/>
                        </div>
                    </a>
                </div>

                <p className="heading">{t("homepage_strings.name")}</p>
                <p>{t("homepage_strings.about1")} <b>C#</b>,&nbsp;
                    <b>Java</b>,&nbsp;
                    <b>JavaScript</b>
                    &nbsp;{t("homepage_strings.about_and")}&nbsp;
                    <b>Python</b>. {t("homepage_strings.about2")} <b>C++</b>, <b>Kotlin</b>,&nbsp;
                    <b>TypeScript</b>. {t("homepage_strings.about3")}.</p>
                <p>{t("homepage_strings.job_warning")} <span role="img">👌</span>
                </p>
                <Link className="button mr-r-20" to="/about/">{t("homepage_strings.btn_skills")}
                </Link>
                <Link className="button" to="/contact/">
                {t("homepage_strings.btn_contacts")}
                </Link>
            </div>
        </div>
    </div>
)};

export default Homepage
