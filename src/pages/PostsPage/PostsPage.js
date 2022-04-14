import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import cssPage from '../page.module.css';

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div className={cssPage.pageComponent}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};