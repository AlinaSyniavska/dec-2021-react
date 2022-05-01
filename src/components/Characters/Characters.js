import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {characterService} from "../../services";
import {Character} from "../Character/Character";
import cssCharacters from './Characters.module.css'
import {useSelector} from "react-redux";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();

    const navigate = useNavigate();
    const {currentPage} = useSelector(state=> state.episodesState);

    useEffect(() => {
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }, [])

    const goToEpisodes = () => {
        navigate(`${currentPage}`);
    }

    return (
        <div>
            <div className={cssCharacters.btnContainer}>
                <button className={cssCharacters.btnBack} onClick={goToEpisodes}>&larr; BACK</button>
            </div>
            <div className={cssCharacters.charactersContainer}>
                {characters.map(item => <Character key={item.id} character={item}/>)}
            </div>
        </div>
    );
};

export {Characters};