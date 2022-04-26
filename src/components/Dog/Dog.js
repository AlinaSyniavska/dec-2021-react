import {useDispatch} from "react-redux";
import cssAnimal from "../Animal.module.css";
import {dogActions} from "../../redux";

const Dog = ({dog}) => {

    const {id, name} = dog;
    const dispatch = useDispatch();

    return (
        <div className={cssAnimal.animalItem}>
            <span>{name}</span>
            <div>
                <button onClick={() => dispatch(dogActions.deleteDog({id}))}>Delete</button>
                <button onClick={() => dispatch(dogActions.setDogForUpdate({dogForUpdate: {id, name}}))}>Update</button>
            </div>
        </div>
    );
};

export {Dog};