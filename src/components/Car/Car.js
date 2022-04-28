import cssCar from './Car.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={cssCar.carItem}>
            <div>{id}: {model} - {price} - {year}</div>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};