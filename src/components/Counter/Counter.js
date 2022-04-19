import cssCounters from "../Counters/Counters.module.css";

const Counter = (props, dispatchInc) => {

    const {count} = props;
    console.log(dispatchInc);

    return (
        <div className={cssCounters.counter}>
            <div>{count}</div>
            <button onClick={() => dispatchInc()}>INC</button>
            {/*<button onClick={() => dispatch({type: 'dec3'})}>DEC</button>*/}
            {/*<button onClick={() => dispatch({type: 'reset3', payload: 0})}>RESET</button>*/}
        </div>
    );
};

export {Counter};