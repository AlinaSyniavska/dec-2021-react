import cssCounter from "./Counter.module.css";

const Counter = (props) => {

    const {count, type, dispatch} = props;

    return (
        <div className={cssCounter.counter}>
            <div>{count}</div>
            <button onClick={() => dispatch({type: type.inc})}>INC</button>
            <button onClick={() => dispatch({type: type.dec})}>DEC</button>
            <button onClick={() => dispatch({type: type.reset})}>RESET</button>
        </div>
    );
};

export {Counter};