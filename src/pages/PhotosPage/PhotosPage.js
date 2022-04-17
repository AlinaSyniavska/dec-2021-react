import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumService} from "../../services";
import {Photo} from "../../components";

const PhotosPage = () => {

    const {idAlbum} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumService.getPhotosById(idAlbum).then(({data}) => setPhotos(data))
    }, [idAlbum])

    return (
        <div>
            {photos.map((photo) => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};