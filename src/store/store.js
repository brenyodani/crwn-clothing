import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import logger from 'redux-logger';
import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from './root-reducer';

// root-reducer to combine all the reducers in our app

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));


export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);