import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ICar} from "../../interfaces";
import {carService} from "../../services";
import {CarDetails} from "../../components";

const CarDetailsPage: FC = () => {

    const {id} = useParams<{id: string}>();
    const [car, setCar] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getById(id as string).then(({data}) => setCar(data))
    }, [id]);

    return (
        <div>
            {
                car && <CarDetails car={car}/>
            }
        </div>
    );
};

export {CarDetailsPage};