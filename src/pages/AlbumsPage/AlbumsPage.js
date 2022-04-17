import {useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {Album} from "../../components";
import cssAlbumsPage from './AlbumsPage.module.css';

const AlbumsPage = () => {

    const {idUser} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsByUserId(idUser).then(({data}) => setAlbums(data))
    }, [idUser])

    return (
        <div className={cssAlbumsPage.main}>
            <div >
                <div className={cssAlbumsPage.albumsContainer}>
                    {albums.map(album => <Album key={album.id} album={album}/>)}
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPage};