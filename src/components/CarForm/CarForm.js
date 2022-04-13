import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carsService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setNewCar, carForUpdate, setUpdatedCar, setCarForUpdate={setCarForUpdate}}) => {

    const {register, reset, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate])

    const submitForm = async (car) => {
        try {
            if(carForUpdate){
                const {data} = await carsService.updateById(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                const {data} = await carsService.create(car);
                setNewCar(data);
            }
            reset();
        } catch (e) {

        }
    }

    const clearForm = () => {
        setCarForUpdate(false);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <br/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            {
                !!carForUpdate &&  <button onClick={clearForm}>clear form</button>
            }
        </form>
    );
};

export {CarForm};