import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {episodeAction} from "../../redux";
import {Episode} from "../Episode/Episode";
import cssEpisodes from './Episodes.module.css'

const Episodes = () => {

    const {episodes, next, prev} = useSelector(state => state.episodesState);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const {pathname, search} = useLocation();

    useEffect(() => {
        dispatch(episodeAction.getAll({page: query.get('page')}));
    }, [query]);

    useEffect(() => {
        dispatch(episodeAction.setCurrentPage({pathCurrentPage: pathname+search}))
    }, [search])

    function showPrevPage() {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }

    const showNextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`});
    }

    return (
        <div>
            <div className={cssEpisodes.episodeContainer}>
                {episodes.map(episode => <Episode key={episode.id} episodeItem={episode}/>)}
            </div>
            <div className={cssEpisodes.btnContainer}>
                <button disabled={!prev} onClick={showPrevPage}>Prev</button>
                <button disabled={!next} onClick={showNextPage}>Next</button>
            </div>
        </div>
    )
};

export {Episodes};