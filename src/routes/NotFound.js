import React from 'react'

import PageTitle from '../components/PageTitle';

import {useTranslation} from 'react-i18next';

function NotFound() {

    const {t} = useTranslation();

    return (

        <div>
            <PageTitle titleName={t("page_titles.projects")}/>

            <div className="card-block">
                <div className="card-block__inner">
                    <h1 className="heading">{t("404_strings.error_title")}</h1>
                    <p className="subheading">{t("404_strings.error_desc")}.</p>
                </div>
            </div>
        </div>

    )
}

export default NotFound
