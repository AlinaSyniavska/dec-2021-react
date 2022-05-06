import {FC} from "react";

import {ICar} from "../../interfaces";
import css from './CarDetails.module.css';

interface IProps {
    car: ICar
}

const CarDetails:FC<IProps> = ({car: {model}}) => {
    return (
        <div>
            <div className={css.detail}>{model}</div>
        </div>
    );
};

export {CarDetails};