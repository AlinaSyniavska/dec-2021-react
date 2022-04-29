import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const {formErrors, carForUpdate} = useSelector(state => state.carsState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate])

    const submitForm = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: newCar}));
        } else {
            await dispatch(carActions.create({car: newCar}))
        }
        navigate('/cars');
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {formErrors.model && <div>{formErrors.model[0]}</div>}
            <div><label>Price: <input type="number" {...register('price')}/></label></div>
            {formErrors.price && <div>{formErrors.price[0]}</div>}
            <div><label>Year: <input type="number" {...register('year')}/></label></div>
            {formErrors.year && <div>{formErrors.year[0]}</div>}
            <button>{carForUpdate ? 'Save Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};