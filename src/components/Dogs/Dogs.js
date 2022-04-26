import {useSelector} from "react-redux";
import {Dog} from "../Dog/Dog";

const Dogs = () => {

    const {dogs} = useSelector(state=> state.dogState);

    return (
        <div>
            {
                dogs.map(dog => <Dog key={dog.id} dog={dog}/>)
            }
        </div>
    );
};

export {Dogs};
