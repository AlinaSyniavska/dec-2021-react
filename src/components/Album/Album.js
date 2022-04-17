import cssAlbum from './Album.module.css'
import {Button} from "../Button/Button";

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div>
            <div className={cssAlbum.albumItem}>
                <p>userId: {userId}</p>
                <p>id: {id}</p>
                <p>title: {title}</p>
                <Button to={id.toString() + '/photos'}>Photos</Button>
            </div>
        </div>
    );
};

export {Album};