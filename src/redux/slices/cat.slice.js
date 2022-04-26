import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null,
};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: ((state, action) => {
            // const newCat = {id: new Date().getTime(), name: action.payload.name};
            const {name} = action.payload;
            const newCat = {id: new Date().getTime(), name};
            state.cats.push(newCat);
        }),
        deleteCat: (state, action) => {
            const {id} = action.payload;
            const index = state.cats.findIndex(item => item.id === id);
            state.cats.splice(index, 1);
        },
        updateCat: (state, action) => {
            const {id, name} = action.payload;
            const index = state.cats.findIndex(item => item.id === id);
            /*const newCat = {...state.cats[index], id, name};
            state.cats.splice(index, 1, newCat);*/
            state.cats[index].name = name;
            state.catForUpdate = false;
        },
        setCatForUpdate: (state, action) => {
            // state.catForUpdate = action.payload.cat;
            state.catForUpdate = action.payload.catForUpdate;
        }
    }
});

const {reducer:catReducer, actions: {addCat, deleteCat, updateCat, setCatForUpdate}} = catSlice;

export default catReducer;

export const catActions = {
    addCat,
    deleteCat,
    updateCat,
    setCatForUpdate
}