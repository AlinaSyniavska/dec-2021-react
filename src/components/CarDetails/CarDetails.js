import cssCar from "../Car/Car.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";
import {useRef} from "react";

const CarDetails = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnDel= useRef();
    const btnUpdate = useRef();

    return (
        <div className={cssCar.carItem}>
            <div>{id}: {model} - {price} - {year}</div>
            <button ref={btnDel} onClick={() => {
                dispatch(carActions.deleteById({id}));
                navigate('/cars');
            }}>Delete
            </button>
            <button ref={btnUpdate} onClick={(e) => {
                dispatch(carActions.setCarForUpdate({car}));
                btnUpdate.current.disabled = true;
                btnDel.current.disabled = true;
            }}>Update
            </button>
        </div>
    );
};

export {CarDetails};