import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

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

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            // return {car: data};
            return data;
        } catch (e) {
            return rejectWithValue({errorStatus: e.message, errorsFromForm: e.response.data})
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            return rejectWithValue({errorStatus: e.message})
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCar({id, car}));
        } catch (e) {
            return rejectWithValue({errorStatus: e.message})
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1);
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.cars = action.payload;
                // console.log(action.type);
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'getAll rejected';
                // console.log(action.type);
            })
            .addCase(create.fulfilled, (state, action) => {
                // state.cars.push(action.payload.car);
                state.cars.push(action.payload);
            })
            .addCase(create.rejected, (state, action) => {
                const {errorStatus, errorsFromForm} = action.payload;
                state.status = errorStatus;
                state.formErrors = errorsFromForm;
            })
            /*            .addCase(deleteById.fulfilled, (state, action) => {
                            const index = state.cars.findIndex(car => car.id === action.payload);
                            state.cars.splice(index, 1);
                        })*/
            .addCase(deleteById.rejected, (state, action) => {
                const {errorStatus} = action.payload;
                state.status = errorStatus;
            })
            .addCase(updateById.rejected, (state, action) => {
                const {errorStatus} = action.payload;
                state.status = errorStatus;
            })
    }
});

const {reducer: carReducer, actions: {deleteCar, updateCar, setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setCarForUpdate,
}

export {
    carReducer,
    carActions
}