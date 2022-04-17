import {Button} from "../Button/Button";

const UserDetails = ({user}) => {

    const {id, name, username, email, phone} = user;

    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <br/>
            <Button to={'posts'}>Posts</Button>
        </div>
    );
};

export {UserDetails};