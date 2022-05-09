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

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(createCar({car: data}));
        } catch (e) {
            return rejectWithValue({errorStatus: e.message, errorsFromForm: e.response.data});
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectedWithValue}) => {
        try{
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            return rejectedWithValue({errorStatus: e.message});
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {dispatch, rejectedWithValue}) => {
        try{
            await carService.updateById(id, car);
            dispatch(updateCar({id, car}));
        } catch (e) {
            return rejectedWithValue({errorStatus: e.message});
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        createCar: (state, action) => {
            // console.log(action.payload);
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars.splice(index, 1);
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'getAll.rejected';
            })
            .addCase(create.rejected, (state, action) => {
                const {errorStatus, errorsFromForm} = action.payload;
                state.status = errorStatus;
                state.formErrors = errorsFromForm;
            })
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

const {reducer: carReducer, actions: {createCar, deleteCar, setCarForUpdate, updateCar}} = carSlice;

const carActions = {
    getAll,
    create,
    createCar,
    deleteById,
    deleteCar,
    setCarForUpdate,
    updateById,
    updateCar,
};

export {
    carReducer,
    carActions
}
