import {CarForm} from "../../components/CarForm/CarForm";
import {Cars} from "../../components";
import {useState} from "react";

const CreateCarPage = () => {

    const [newCar, setNewCar] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
};

export {CreateCarPage};