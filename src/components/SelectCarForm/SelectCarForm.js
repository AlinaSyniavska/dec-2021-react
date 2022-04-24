import {useRef, useState} from "react";
import {carService} from "../../secvices";

const SelectCarForm = ({setCarForUpdate}) => {

    const [cars, setCars] = useState([]);
    const selectRef = useRef();

    carService.getAll().then(({data}) => setCars(data));

    const selectCarForUpdate = (e) => {
        const carForUpdate = cars.find(car => car.model === selectRef.current.value);
        setCarForUpdate(carForUpdate);
    }

    return (
        <div>List of Cars:
            <br/>
            <select ref={selectRef} onChange={selectCarForUpdate} onClick={()=>selectCarForUpdate()}>
                {/*<select ref={selectRef} onClick={selectCarForUpdate}>*/}
                {
                    cars.map(car => <option key={car.id} value={car.model}>{car.model}</option>)
                }
            </select>
        </div>
    );
};

export {SelectCarForm};