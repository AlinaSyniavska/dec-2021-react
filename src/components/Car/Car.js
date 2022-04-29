import cssCar from './Car.module.css'
import {Link} from "react-router-dom";

const Car = ({car}) => {
    const {id, model} = car;

    return (
        <div className={cssCar.carItem}>
            <div>{id}: Model - {model}</div>
            <Link to={id.toString()} state={car}>
                <button>Car Details</button>
            </Link>
        </div>
    );
};

export {Car};