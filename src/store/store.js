import {compose ,createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootSaga } from "./root-saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV ==='development' && logger ,sagaMiddleWare].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && 
window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose ;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
    key : 'root' ,
    storage,
    blacklist : ['user']
}


 const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = createStore(persistedReducer , undefined ,composedEnhancer);

sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);

