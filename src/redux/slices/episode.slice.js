import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    episodes: [],
    currentEpisode: null,
    currentPage: null
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}) => {
        const {data} = await episodeService.getAll(page);
        return data;
    });

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setCurrentEpisode: (state, action) => {
            const {episodeName} = action.payload;
            state.currentEpisode = episodeName;
        },
        setCurrentPage: (state, action) => {
            const {pathCurrentPage} = action.payload;
            state.currentPage = pathCurrentPage;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {pages, next, prev}, results} = action.payload;
                state.pages = pages;
                state.next = next;
                state.prev = prev;
                state.episodes = results;
            })
    }
});

const {reducer: episodeReducer, actions: {setCurrentEpisode, setCurrentPage}} = episodeSlice;

const episodeAction = {
    getAll,
    setCurrentEpisode,
    setCurrentPage,
}

export {
    episodeReducer,
    episodeAction
}


