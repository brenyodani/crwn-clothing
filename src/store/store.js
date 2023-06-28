import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from './root-reducer';

// root-reducer to combine all the reducers in our app

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, undefined, composedEnhancers);