import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from './slices';

const rootReducer = combineReducers({
    carsState: carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;



