import {FC} from "react";
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser,
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email, phone} = user;

    return (
        <div>
            <div>{id}. {name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <hr/>
        </div>
    );
};

export {User};