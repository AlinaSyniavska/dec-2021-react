import {useForm} from "react-hook-form";

import cssCarForm from './CarForm.module.css';
import {carService} from "../../secvices";

const CarForm = ({setNewCar}) => {

    const {register, reset, handleSubmit} = useForm();

    const submitForm = (car) => {
        try {
            carService.create(car).then(({data}) => setNewCar(data))
            reset();
        } catch (e) {
        }
    }


    return (
        <form className={cssCarForm.form} onSubmit={handleSubmit(submitForm)}>
            <div><label>Model:
                <input type="text" {...register('model')}/>
            </label></div>
            <div><label>Price:
                <input type="number" {...register('price', {valueAsNumber: true})}/>
            </label></div>
            <div><label>Year:
                <input type="number" {...register('year', {valueAsNumber: true})}/>
            </label></div>
            <button>Create</button>
        </form>
    );
};

export {CarForm};