import {Animal} from "../Animal/Animal";

const Animals = (props) => {

    const {animals, type, dispatch} = props;

    return (
        <div>
            {
                animals.map(animal => <Animal key={animal.id} type={type} dispatch={dispatch} animal={animal}/>)
            }
        </div>
    );
};

export {Animals};