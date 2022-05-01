
import cssApp from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {

    const {currentEpisode} = useSelector(state => state.episodesState);

    return (
        <div className={cssApp.header}>
            <h1>Rick and Morty</h1>
            {currentEpisode && <h1>{currentEpisode}</h1>}
        </div>
    );
};

export {Header};