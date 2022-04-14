import cssButton from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({to, state, children, ...arg}) => {
    return (
        <Link to={to} state={state}>
            <button className={cssButton.button} {...arg}>{children}</button>
        </Link>
    );
};

export {Button};