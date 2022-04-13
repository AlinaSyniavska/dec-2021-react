import {carsService} from "../../services";

const Car = ({car, setCarForUpdate, setDeletedCarId}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        setDeletedCarId(id);
    }
    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={deleteCar}>Delete Car</button>
            <button onClick={() => setCarForUpdate(car)}>Update Car</button>
            <br/>
        </div>
    );
};

export {Car};