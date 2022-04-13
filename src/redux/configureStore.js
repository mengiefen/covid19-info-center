import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import countryInfoReducer from './country/countryInfoReducer';
import covidDataReducer from './country/covidDataReducer';

const rootReducer = combineReducers({
  countryInfo: countryInfoReducer,
  covidData: covidDataReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { persistor, store };
