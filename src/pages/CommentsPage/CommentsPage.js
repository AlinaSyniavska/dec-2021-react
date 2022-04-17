import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Comment} from "../../components";

const CommentsPage = () => {
    const {idPost} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentsByPostId(idPost).then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};