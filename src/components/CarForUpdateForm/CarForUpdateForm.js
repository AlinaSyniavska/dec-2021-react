import {useForm} from "react-hook-form";
import cssCarForm from "../CarForm/CarForm.module.css";
import {carService} from "../../secvices";
import {useEffect} from "react";

const CarForUpdateForm = ({carForUpdate}) => {

    const {register, reset, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate])


    const submitUpdateForm = async (car) => {
        try {
            const {id} = carForUpdate;
            await carService.updateById(id, car);
            reset();

        } catch (e) {
        }
    }

    return (
        <form className={cssCarForm.form} onSubmit={handleSubmit(submitUpdateForm)}>
            <div><label>Model:
                <input type="text" {...register('model')}/>
            </label></div>
            <div><label>Price:
                <input type="number" {...register('price', {valueAsNumber: true})}/>
            </label></div>
            <div><label>Year:
                <input type="number" {...register('year', {valueAsNumber: true})}/>
            </label></div>
            <button>Update</button>
        </form>
    );
};

export {CarForUpdateForm};