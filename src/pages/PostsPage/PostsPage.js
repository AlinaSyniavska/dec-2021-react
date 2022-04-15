import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import cssPage from '../page.module.css';

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            postService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll().then(({data}) => setPosts(data))
        }
    }, [userId])

    return (

        <div>
            {
                !userId ? (
                        <div className={cssPage.pageComponent}>
                            <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
                            <div><Outlet/></div>
                        </div>
                    )
                    : (
                        <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
                    )
            }
        </div>

        /*<div className={cssPage.pageComponent}>
            <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
            <div><Outlet/></div>
        </div>*/
    );
};


export {PostsPage};