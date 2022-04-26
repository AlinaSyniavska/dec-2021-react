import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slices/cat.slice";

const rootReducer = combineReducers({
    catState: catReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store


