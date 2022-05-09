import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>{id}: Model - {model}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
            <hr/>
        </div>
    );
};

export {Car};