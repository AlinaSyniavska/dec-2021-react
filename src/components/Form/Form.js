import {useState} from "react";

const Form = (props) => {

    const {title, type, dispatch} = props;

    const [animalName, setAnimalName] = useState('');

    const getAnimalName = (e) => {
        setAnimalName(e.target.value);
        e.target.value = '';
    }

    const createAnimalName = () => {
        if(animalName.trim() !== ''){
            dispatch({type, payload: animalName});
            setAnimalName('');
        } else {
            alert('Enter name!');
        }
    }

    return (
        <div>
            <div>
                <label>Add {title}:
                    <input type="text" name={'name'} value={animalName} onChange={getAnimalName} required/>
                </label>
                <button onClick={createAnimalName}>Save</button>
            </div>
        </div>
    );
};

export {Form};