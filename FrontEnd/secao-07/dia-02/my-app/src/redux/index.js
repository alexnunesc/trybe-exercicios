// ./src/redux/index.js
import {legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from '../redux/reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
