import {useEffect, useState} from "react";
import {carService} from "../../secvices";
import {Car} from "../Car/Car";

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if(newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div>
            <ol>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </ol>
        </div>
    );
};

export {Cars};