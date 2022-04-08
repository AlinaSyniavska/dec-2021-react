import css from '../../App.module.css'
import userCss from "./User.module.css"

const User = ({user, setUser, setUserIdForPosts}) => {

    const {id, name} = user;

    const showDetails = () => {
        console.log(id);
        setUser(user);
        setUserIdForPosts(false);
    }

    return (
        <div className={userCss.userItem}>
            <div>{id}--{name}</div>
            <button className={css.button} onClick={showDetails}>Details</button>
        </div>
    );
};

export {User};