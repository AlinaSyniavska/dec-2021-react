import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";

const CarForm: FC = () => {

    const {register, handleSubmit, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submitForm: SubmitHandler<ICar> = async (car) => {
       await dispatch(carActions.create({car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            <input type='number' placeholder={'price'} {...register('price')}/>
            <input type='number' placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};