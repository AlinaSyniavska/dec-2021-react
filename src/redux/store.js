import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices";

const rootReducer = combineReducers({
    episodesState: episodeReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {store}
