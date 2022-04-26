import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slices/cat.slice";
import dogReducer from "./slices/dog.slice";

const rootReducer = combineReducers({
    catState: catReducer,
    dogState: dogReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store


