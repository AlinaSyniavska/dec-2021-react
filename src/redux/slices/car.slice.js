import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                console.log(action.payload);
            })
            .addCase(getAll.rejected, (state) => {
                state.status = 'getAll.rejected';
            })
    }
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    getAll,
};

export {
    carReducer,
    carActions
}
