import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import userReducer from "./userReducer";

export default combineReducers({productReducer,productDetailsReducer,userReducer});