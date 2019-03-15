import React from 'react'
import SkillsBlock from '../components/SkillsBlock'

const About = ({match}) => (
    <div>
        <div className="card-block">
            <div className="card-block__inner">
            <h1 className="heading">Мои навыки</h1>
            <p className="subheading">Здесь собрана небольшая статистика о моих навыках. Учтите, что все проценты, указанные здесь, подсчитаны приблизительно и могут отличаться при прохождении тестов.</p>
                <div className="grid">
                    <div className="grid__item">
                        <SkillsBlock language="JavaScript" desc="Я использую JavaScript для разных задач, некоторые из них: автоматизация действий, добавление функционала, оптимизация и упрощение работы." progress="34" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="HTML" desc="Используется мною повсеместно во фронтенд проектах, хотя иногда он даже используется в различных приложениях." progress="84" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="CSS" desc="Основа основ в любом дизайне, использую его во всех проектах. Обычно использую надстройки LESS или SCSS." progress="90" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="LESS" desc="Язык стилей с которым я работал ранее, сейчас предпочитаю SCSS по причине его большей популярности." progress="60" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="SCSS" desc="Самый часто используемый язык стилей с последующей компиляцией в CSS. Имеет множество полезных функций." progress="48" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="C#" desc="Иногда я разрабатываю различный софт для Windows, C# очень легок и удобен поэтому я выбрал его." progress="20" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="Java" desc="Язык, который помог мне понять синтаксис C# и других языков, многофункционален и очень полезен, но оптимизация хромает." progress="32" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="Python" desc="Редко используемый мною язык в силу моего малого количества знаний о нем." progress="9" />
                    </div>
                    <div className="grid__item">
                        <SkillsBlock language="PHP" desc="Ранее использующийся мною язык для создания различных вебсайтов, сейчас предпочитаю брать за основу Node.js за счет его удобности и модульности." progress="40" />
                    </div>
                    <div className="grid__item grid__item_2">
                        <SkillsBlock language="Графический дизайн" desc="Я стараюсь следовать трендам минималистичного и простого для восприятия дизайна, имею опыт работы в Photoshop и Illustrator и постоянно стараюсь улучшить свои навыки работы с векторной графикой." progress="46" />
                    </div>
                    <div className="grid__item grid__item_2">
                        <SkillsBlock language="Английский язык" desc="Я не учавствую в каких либо конкурсах лингвистов и не проходил тестирование на уровень знания языка, но при этом я с радостью помогаю с переводом различных приложений и игр на русский язык. Моих знаний хватает для общения и чтения документаций на английском." progress="52" />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About
