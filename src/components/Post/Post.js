import {Button} from "../Button/Button";
import cssPost from './Post.module.css'

const Post = ({post, flag}) => {

    const {id, title} = post;

    return (
        <div className={cssPost.postItem}>
            <div>{id}. {title}</div>
            {flag && <Button to={id.toString()} state={post}>Post's details</Button>}
        </div>
    );
};

export {Post};