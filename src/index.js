import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';


import WebFontLoader from 'webfontloader';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore"

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});




const store=configureStore();
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
