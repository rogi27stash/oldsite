import React from 'react'
import SkillsBlock from '../components/SkillsBlock'
import PageTitle from '../components/PageTitle';

import { useTranslation } from 'react-i18next';

function Skills() {

    const { t } = useTranslation();
    
    return (
    <div>

    <PageTitle titleName={t("page_titles.skills")}/>

        <div className="card-block">
            <div className="card-block__inner">
                <h1 className="heading">{t("skills_strings.heading")}</h1>
                <p className="subheading">{t("skills_strings.heading_desc")}.</p>
                <div className="grid">
                    <div className="grid__item">
                        <SkillsBlock
                            language="React"
                            desc={t("skills_strings.cards_react_desc") + "."}
                            progress="13"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="JavaScript"
                            desc={t("skills_strings.cards_js_desc") + "."}
                            progress="34"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="HTML"
                            desc={t("skills_strings.cards_html_desc") + "."}
                            progress="84"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="CSS"
                            desc={t("skills_strings.cards_css_desc") + "."}
                            progress="90"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="LESS"
                            desc={t("skills_strings.cards_less_desc") + "."}
                            progress="60"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="SCSS"
                            desc={t("skills_strings.cards_scss_desc") + "."}
                            progress="48"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="C#"
                            desc={t("skills_strings.cards_c#_desc") + "."}
                            progress="20"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="Java"
                            desc={t("skills_strings.cards_java_desc") + "."}
                            progress="32"/>
                    </div>
                    <div className="grid__item">
                        <SkillsBlock
                            language="Python"
                            desc={t("skills_strings.cards_python_desc") + "."}
                            progress="9"/>
                    </div>
                    <div className="grid__item grid__item_2">
                        <SkillsBlock
                            language="PHP"
                            desc={t("skills_strings.cards_php_desc") + "."}
                            progress="40"/>
                    </div>
                    <div className="grid__item grid__item_2">
                        <SkillsBlock
                            language={t("skills_strings.cards_graphic_design_title")}
                            desc={t("skills_strings.cards_graphic_design_desc") + "."}
                            progress="46"/>
                    </div>
                    <div className="grid__item grid__item_2">
                        <SkillsBlock
                            language={t("skills_strings.cards_english_skills_title")}
                            desc={t("skills_strings.cards_english_skills_desc") + "."}
                            progress="52"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Skills
