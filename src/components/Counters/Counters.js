import {useReducer} from "react";

import cssCounters from './Counters.module.css';

const Counters = () => {

    const init = (initCount) => {
        return {
            count1: initCount,
            count2: initCount,
            count3: initCount
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc1':
                return {...state, count1: state.count1 + 1}
            case 'inc2':
                return {...state, count2: state.count2 + 1}
            case 'inc3':
                return {...state, count3: state.count3 + 1}
            case 'dec1':
                return {...state, count1: state.count1 - 1}
            case 'dec2':
                return {...state, count2: state.count2 - 1}
            case 'dec3':
                return {...state, count3: state.count3 - 1}
            case 'reset1':
                return {...state, count1: action.payload}
            case 'reset2':
                return {...state, count2: action.payload}
            case 'reset3':
                return {...state, count3: action.payload}

            default:
                throw new Error('Undefined Action!')
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div className={cssCounters.counter}>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 0})}>RESET</button>
            </div>
            <div className={cssCounters.counter}>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 0})}>RESET</button>
            </div>
            <div className={cssCounters.counter}>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 0})}>RESET</button>
            </div>
        </div>
    );
};

export {Counters};