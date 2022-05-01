import cssEpisode from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeAction} from "../../redux";

const Episode = ({episodeItem}) => {

    const {name, air_date, episode, characters} = episodeItem

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToCharacters = () => {
        dispatch(episodeAction.setCurrentEpisode({episodeName: name}))
        navigate('/characters', {state: characters})
    }

    return (
        <div className={cssEpisode.episodeItem} onClick={goToCharacters}>
            <h2>{name}</h2>
            <h3>{air_date}</h3>
            <h3>{episode}</h3>
        </div>
    );
};

export {Episode};