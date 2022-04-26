import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../../redux";

const DogForm = () => {

    const btnSave = useRef();
    const btnUpdate = useRef();

    const [name, setName] = useState();

    const {dogForUpdate} = useSelector(state => state.dogState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.name);
            btnUpdate.current.disabled = false;
            btnSave.current.disabled = true;
        } else {
            btnUpdate.current.disabled = true;
            btnSave.current.disabled = false;
        }
    }, [dogForUpdate])

    const createDogName = () => {
        dispatch(dogActions.addDog({name}));
        setName('');
    }

    const updateDogName = () => {
        dispatch(dogActions.updateDog({id: dogForUpdate.id, name}));
        setName('');
        btnUpdate.current.disabled = true;
        btnSave.current.disabled = false;
    };
    return (
        <div>
            <label>Add Dog:
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </label>
            <button ref={btnSave} onClick={createDogName}>Save</button>
            <button ref={btnUpdate} onClick={updateDogName}>Save Update</button>
        </div>
    );
};

export {DogForm};