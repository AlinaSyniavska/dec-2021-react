import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dogForUpdate: null
};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newDog = {id: new Date().getTime(), name};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            const index = state.dogs.findIndex(item => item.id === id);
            state.dogs.splice(index, 1);
        },
        updateDog: (state, action) => {
            const {id, name} = action.payload;
            const index = state.dogs.findIndex(item => item.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = false;
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dogForUpdate;
        }
    }
});

const {reducer: dogReducer, actions: {addDog, deleteDog, setDogForUpdate, updateDog}} = dogSlice;

export default dogReducer;
export const dogActions = {
    addDog,
    deleteDog,
    setDogForUpdate,
    updateDog
}





