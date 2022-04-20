import cssAnimal from './Animal.module.css'

const Animal = (props) => {

    const {type, dispatch, animal} = props;

    return (
        <div className={cssAnimal.animalItem}>
            <span>{animal.name}</span>
            <button onClick={() => dispatch({type, payload: animal.id})}>Delete</button>
        </div>
    );
};

export {Animal};