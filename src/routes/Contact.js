import React from 'react'

const Contact = ({ match }) => (
    <div>
        <div className="card-block">
            <div className="card-block__inner">
            <h1 className="heading">Связаться со мной</h1>
            <p className="subheading">Здесь расположены мои контакты и ссылки на сайты, где я зарегистрирован.</p>

<div id="contacts">
    <p><b>ВКонтакте:</b> <a href="https://vk.com/igorryzhenkov">igorryzhenkov</a></p>
    <p><b>Telegram:</b> <a href="https://tele.gg/voknehzyr">@voknehzyr</a></p>
    <p><b>Twitter:</b> <a href="https://twitter.com/igorryzhenkov">igorryzhenkov</a></p>
    <p><b>Почта:</b> <a href="mailto:ryzhenkov.igor@gmail.com">ryzhenkov.igor@gmail.com</a></p>
</div>

            </div>
        </div>
    </div>
)

export default Contact
