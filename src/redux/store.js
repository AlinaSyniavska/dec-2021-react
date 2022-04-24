import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerUser} from "./user.reducer";
import {reducerPost} from "./post.reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({usersState: reducerUser, postsState: reducerPost});

export let store = createStore(reducers, applyMiddleware(thunk));