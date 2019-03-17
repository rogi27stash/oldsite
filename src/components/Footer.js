import React from 'react'

import {useTranslation} from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher";

function WebsiteFooter() {

      const { i18n } = useTranslation();

      return (

      <footer>
      <p><LanguageSwitcher i18n={i18n}/></p>
      <p>&copy; 2018–{(new Date().getFullYear())} by <a target="_blank" rel="noopener noreferrer" href="https://vk.com/igorryzhenkov">Igor Ryzhenkov</a></p>
      </footer>
      
      );
}

export default WebsiteFooter
