import {useEffect, useState} from "react";
import {carsService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar]);
            setCars(prevState => [...prevState, newCar]);
        }
    }, [newCar])

    useEffect(() => {
        setCars(cars.filter(car => car.id !== deletedCarId))
    }, [deletedCarId])

    useEffect(() => {
        if (updatedCar) {
            const editCar = cars.find(car => car.id === updatedCar.id);
            Object.assign(editCar, updatedCar)
            setCars([...cars])
        }
    }, [updatedCar])

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                     setDeletedCarId={setDeletedCarId}/>)
            }
        </div>
    );
};

export {Cars};