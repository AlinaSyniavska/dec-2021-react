import {useEffect, useState} from "react";
import {postService} from "../../services";
import {useParams} from "react-router-dom";
import {Comment} from "../../components/Comment/Comment";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        postService.getCommentsByPostId(id).then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {
                comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {CommentsPage};