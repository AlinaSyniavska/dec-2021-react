import {CarForUpdateForm, SelectCarForm} from "../../components";
import {useState} from "react";
import cssUpdatePage from './UpdateCarPage.module.css';

const UpdateCarPage = () => {

    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div className={cssUpdatePage.formContainer}>
            <SelectCarForm setCarForUpdate={setCarForUpdate}/>
            <CarForUpdateForm carForUpdate={carForUpdate}/>
        </div>
    );
};

export {UpdateCarPage};