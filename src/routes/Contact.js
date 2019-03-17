import React from 'react'
import PageTitle from '../components/PageTitle';

import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation();
    
    return (

    <div>

    <PageTitle titleName={t("page_titles.contacts")}/>

        <div className="card-block">
            <div className="card-block__inner">
                <h1 className="heading">{t("contact_strings.heading")}</h1>
                <p className="subheading">{t("contact_strings.heading_desc")}.</p>

                <div id="contacts">
                    <p>
                        <b>{t("contact_strings.vk_url")}:</b> <a href="https://vk.com/igorryzhenkov">igorryzhenkov</a>
                    </p>
                    <p>
                        <b>Telegram:</b> <a href="https://tele.gg/voknehzyr">@voknehzyr</a>
                    </p>
                    <p>
                        <b>Twitter:</b> <a href="https://twitter.com/igorryzhenkov">igorryzhenkov</a>
                    </p>
                    <p>
                        <b>{t("contact_strings.mail_url")}:</b> <a href="mailto:ryzhenkov.igor@gmail.com">ryzhenkov.igor@gmail.com</a>
                    </p>
                </div>

            </div>
        </div>
    </div>
)};

export default Contact
