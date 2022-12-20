import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import contentReducer from "../reducer/contentReducer";

const store = createStore(contentReducer, applyMiddleware(thunk));

export default store;