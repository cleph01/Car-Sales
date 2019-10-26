import React from 'react';
import ReactDOM from 'react-dom';

//import redux store 
import { createStore } from 'redux';

//import redux provider from react-redux
import { Provider } from 'react-redux';

import App from './App';

import { reducer } from './reducers/reducer';

import 'bulma/css/bulma.css';
import './styles.scss';




//create const variable for store
const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        rootElement
);
