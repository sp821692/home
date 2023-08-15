import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { jobs } from "./redux/reducers";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  jobs,
});

const persistConfig = {
  key: "root",
  storage,
};

const enhancers = [applyMiddleware(thunk)];
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, compose(...enhancers));

export default store;
