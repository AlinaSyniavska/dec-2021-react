import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer} from "./slices";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    authState: authReducer,
    carState: carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
   store
}