import {FC} from "react";
import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div>ID: {id}</div>
            <div>MODEL: {model}</div>
            <div>PRICE: {price}</div>
            <div>YEAR: {year}</div>
            <Link to={`${id}`}>
                <button>Details</button>
            </Link>
            <br/>
            <br/>
        </div>
    );
};

export {Car};