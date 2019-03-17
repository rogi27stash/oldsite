import React from 'react'

class LanguageSwitcher extends React.Component {

    setLanguage(lng) {
        const i18n = this.props.i18n;
        return i18n.changeLanguage(lng);
    }

    render() {
        const i18n = this.props.i18n;

        switch (i18n.language) {
            case `ru`:
                return (
                    <a onClick={() => this.setLanguage('en')} href="javascript:void(0)">Switch language to English</a>
                );
            case `en`:
                return (
                    <a onClick={() => this.setLanguage('ru')} href="javascript:void(0)">Поменять язык на Русский</a>
                );
            default:
                return null;
        }
    }
}

export default LanguageSwitcher;
