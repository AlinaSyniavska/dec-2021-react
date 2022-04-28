import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {useEffect} from "react";
import {carActions} from "../../redux";
import cssCars from './Cars.module.css'

const Cars = () => {

    const {cars, status} = useSelector(state => state.carsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div>
            {status && <h3>{status}</h3>}
            <div className={cssCars.carsContainer}>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </div>
    );
};

export {Cars};