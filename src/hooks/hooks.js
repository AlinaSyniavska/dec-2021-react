import {useReducer} from "react";
import {reducer} from "../reducers";


// const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

const useAnimalReducer = () => useReducer(reducer, {cats: [], dogs: []});

export {
    useAnimalReducer
}

