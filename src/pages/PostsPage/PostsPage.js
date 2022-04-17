import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import cssPostsPage from './PostsPage.module.css'

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {idUser} = useParams();

    useEffect(() => {
        if (idUser) {
            postService.getByUserId(idUser).then(({data}) => setPosts(data))
        } else {
            postService.getAll().then(({data}) => setPosts(data))
        }
    }, [idUser])

    return (

        <div>
            {
                !idUser ? (
                        <div className={cssPostsPage.postContainer}>
                            <div>{posts.map(post => <Post key={post.id} post={post} flag={!idUser}/>)}</div>
                            <div><Outlet/></div>
                        </div>
                    )
                    : (
                        <div>{posts.map(post => <Post key={post.id} post={post} flag={!idUser}/>)}</div>
                    )
            }
        </div>
    )

};

export {PostsPage};