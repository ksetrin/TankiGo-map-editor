import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers'

import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
