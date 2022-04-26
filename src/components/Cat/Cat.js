import cssAnimal from '../Animal.module.css';
import {useDispatch} from "react-redux";
import {catActions} from "../../redux/slices/cat.slice";

const Cat = ({cat}) => {
    const {id, name} = cat;
    const dispatch = useDispatch();
    return (
        <div className={cssAnimal.animalItem}>
            <span>{name}</span>
            <div>
                <button onClick={() => dispatch(catActions.deleteCat({id}))}>Delete</button>
                <button onClick={() => dispatch(catActions.setCatForUpdate({catForUpdate: {id, name}}))}>Update</button>
            </div>
        </div>
    );
};

export {Cat};