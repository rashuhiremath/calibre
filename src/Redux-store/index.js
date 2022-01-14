import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { encryptTransform } from 'redux-persist-transform-encrypt'
import signupReducer from "./reducers/signupform";

export const initialState = {
  signup:{
      showForm:true
  }
};

const configPersist = {
  key:"root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
    signup:signupReducer,
  
});

const persistBigReducer = persistReducer(configPersist,mainReducer)


  const configStore = createStore(
  persistBigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistToStore = persistStore(configStore)
 export default configStore
