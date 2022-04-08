import css from '../../App.module.css'

const UserDetails = ({user, setUserIdForPosts}) => {

   const {id, name, username, email, address: {street, suite, city}, phone, website} = user;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address: {city}--{street}--{suite}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <br/>
            <button className={css.button} onClick={() => setUserIdForPosts(id)}>Posts</button>
        </div>
    );
};

export {UserDetails};


