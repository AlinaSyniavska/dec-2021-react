import {useSelector} from "react-redux";
import {Cat} from "../Cat/Cat";

const Cats = () => {
    const {cats} = useSelector(state => state.catState);
    return (
        <div>
            {
                cats.map(cat => <Cat key={cat.id} cat={cat}/>)
            }
        </div>
    );
};

export {Cats};