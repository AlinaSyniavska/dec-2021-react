import {Button} from "../Button/Button";

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, address: {city, street}, website} = user;

    return (
        <div>
            <p>id: {id}</p>
            <h4>{name} -- {username}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <p>address:</p>
            <p>city: {city}</p>
            <p>street: {street}</p>
            <Button to={'posts'}>User`s Posts</Button>
        </div>
    );
};

export {UserDetails};