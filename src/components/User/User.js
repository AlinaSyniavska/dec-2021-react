import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            {/*{id} - {name} <Link to={id.toString()} state={user}>Get Details</Link>*/}
            {id} - {name} <Button to={id.toString()} state={user}>Get Details</Button>
        </div>
    );
};

export {User};