import {Button} from "../Button/Button";

const PostDetails = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <h3>{title}</h3>
            <p>{body}</p>
            <br/>
            <Button to={'comments'}>Post`s Comments</Button>
        </div>
    );
};

export {PostDetails};