import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import signupReducer from "./reducers/signupform";
import calenderReducer from "./reducers/calender.js";

export const initialState = {
  signup: {
    showForm: true,
  },
  calender: {
    events: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  signup: signupReducer,
  calender: calenderReducer,
});

const configStore = createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configStore;
