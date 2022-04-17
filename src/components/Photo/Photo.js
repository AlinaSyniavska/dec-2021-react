import cssPhoto from './Photo.module.css'

const Photo = ({photo}) => {

    const {albumId, id, title, thumbnailUrl} = photo;

    return (
        <div>
            <div className={cssPhoto.photoItem}>
                <div>
                    <p>albumId: {albumId}</p>
                    <p>id: {id}</p>
                    <p>title: {title}</p>
                </div>
                <div>
                    <img src={thumbnailUrl} alt={title}/>
                </div>
            </div>
        </div>
    );
};

export {Photo};


