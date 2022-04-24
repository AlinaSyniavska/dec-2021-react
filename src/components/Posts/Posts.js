import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../../redux/action.creators";

const Posts = () => {

    // let defaultPostState = useSelector(state => state.postsState);
    let postsDefaultState = useSelector(({postsState}) => postsState);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts);
    }, [])

    return (
        <div>
            {
                postsDefaultState.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export {Posts};