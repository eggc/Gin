import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import './index.css';
import App from './containers/App';

const store = configureStore({ currentPage: "Title" })
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
