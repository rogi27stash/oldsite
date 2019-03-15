import React from 'react'
import {Link} from "react-router-dom";

const Homepage = ({match}) => (
    <div>

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

                <p className="heading">Игорь "Voknehzyr" Рыженков</p>
                <p>Семнадцатилетний начинающий программист-самоучка из Москвы, изучаю языки программирования <b>C#</b>,&nbsp;
                    <b>Java</b>,&nbsp;
                    <b>JavaScript</b>
                    &nbsp;и&nbsp;
                    <b>Python</b>. В дальнейшем хочу изучить&nbsp;
                    <b>C++</b>,&nbsp;
                    <b>Kotlin</b>,&nbsp;
                    <b>TypeScript</b>. Также занимаюсь переводом приложений с английского на русский язык.</p>
                <p>На данный момент у меня нет работы и я не могу никуда устроиться ибо у меня
                    нет законченного образования, но я буду стараться его получить
                    <span role="img">👌</span>
                </p>
                <Link className="button mr-r-20" to="/about/">Мои навыки

                </Link>
                <Link className="button" to="/contact/">
                    Контакты
                </Link>
            </div>
        </div>
    </div>
)

export default Homepage
