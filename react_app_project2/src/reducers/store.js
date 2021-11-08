import { createStore, combineReducers } from "redux";
import UserReducer from "./user/reducer"
import ItemsReducer from "./items/reducer"
// {todosReducer} === {todosReducer: todosReducer}
const reducers = combineReducers({ UserReducer , ItemsReducer});
const store = createStore(reducers);

export default store;