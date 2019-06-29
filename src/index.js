import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import i18next from "i18next";

require ('./i18n');

i18next.on('loaded', function(loaded) {
  ReactDOM.render((
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
  ), document.getElementById('app'))
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
