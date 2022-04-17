import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {idPost} = useParams();
    const [post, setPost] = useState(state);

    useEffect(() => {
        if (!state) {
            postService.getById(idPost).then(({data}) => setPost(data))
        } else {
            setPost(state);
        }
    }, [idPost, state])

    return (
        <div>
            <div>
                <PostDetails post={post}/>
            </div>
            <Outlet/>   {/*for post's comments*/}
        </div>
    );
};

export {SinglePostPage};