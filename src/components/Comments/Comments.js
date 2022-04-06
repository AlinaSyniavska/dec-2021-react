import React, {useEffect, useState} from 'react';
import {Comment} from "../Comment/Comment";
import {commentsService} from "../../services";

export const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAllComments()
            .then(value => value.slice(0, 10))
            .then(value => setComments(value))
    }, [])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

