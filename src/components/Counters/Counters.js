import {useReducer} from "react";

import {Counter} from "../Counter/Counter";

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
                return {...state, count1: 0}
            case 'reset2':
                return {...state, count2: 0}
            case 'reset3':
                return {...state, count3: 0}

            default:
                throw new Error('Unknown Action!')
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
{/*            <div className={cssCounters.counter}>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset1'})}>RESET</button>
            </div>
            <div className={cssCounters.counter}>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2'})}>RESET</button>
            </div>
            <div className={cssCounters.counter}>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset3'})}>RESET</button>
            </div>*/}

            <Counter count={state.count1} dispatch={dispatch} type={{inc: 'inc1', dec: 'dec1', reset: 'reset1'}}/>
            <Counter count={state.count2} dispatch={dispatch} type={{inc: 'inc2', dec: 'dec2', reset: 'reset2'}}/>
            <Counter count={state.count3} dispatch={dispatch} type={{inc: 'inc3', dec: 'dec3', reset: 'reset3'}}/>

        </div>
    );
};

export {Counters};