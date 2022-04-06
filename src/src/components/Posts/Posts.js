import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
import {postsService} from "../../services";
import '../../App.css';

export const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAllPosts()
            .then(value => value.slice(0, 10))  //take (slice) only 10 posts
            .then(value => setPosts(value))
    }, [])

    return (
        <div className={'top-item'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

