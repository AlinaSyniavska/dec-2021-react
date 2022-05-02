import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import cssNumbersPages from './NumbersPages.module.css';
import {useEffect} from "react";

const NumbersPages = () => {
    const {pages} = useSelector(state => state.episodesState);
    // const navigate = useNavigate();
    const [query, setQuery] = useSearchParams({page: '1'});

    let pagesCount = [];
    for (let i = 1; i <= pages; i++) {
        pagesCount.push(i);
    }

    useEffect(() => {
        const page = query.get('page');
        let buttons = document.getElementsByTagName('button');
        for (const button of buttons) {
            if (button.value === page) {
                button.classList.add(cssNumbersPages.selectedPage);
            } else {
                button.classList.remove(cssNumbersPages.selectedPage);
            }
        }
    }, [query]);

    const goToPage = (e) => {
        let btnSelected = document.getElementsByClassName(cssNumbersPages.selectedPage);

        for (let i = 0; i < btnSelected.length; i++) {
            btnSelected[i].classList.remove(cssNumbersPages.selectedPage);
        }

        e.target.classList.add(cssNumbersPages.selectedPage);

        // navigate(`?page=${e.target.value}`);
        setQuery({page: `${e.target.value}`});
    }

    return (
        <div>
            {
                pagesCount.map(page => <button
                    key={page}
                    value={page}
                    onClick={goToPage}
                >{page}</button>)
            }
        </div>
    );
};

export {NumbersPages};