import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post, flag}) => {

    const {id, title} = post;

    return (
        <div>
            {/*{id} -- {title} <Link to={id.toString()} state={post}>Get Details</Link>*/}
            {id} -- {title}
            {
                flag && <Button to={id.toString()} state={post}>Get Details</Button>
            }
        </div>
    );
};

export {Post};