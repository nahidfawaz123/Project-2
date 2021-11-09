import { createStore, combineReducers } from "redux";
import userReducer from "./user/reducer"
import ItemsReducer from "./items/reducer"
const reducers = combineReducers({ userReducer , ItemsReducer});
const store = createStore(reducers);

export default store;