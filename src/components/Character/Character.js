
import cssCharacter from '../Character/Character.module.css';

const Character = ({character}) => {

    const {name, status, species, image} = character;

    return (
        <div className={cssCharacter.characterItem}>
            <div>
                <h2>{name}</h2>
                <h3>{status}</h3>
                <h3>{species}</h3>
            </div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};