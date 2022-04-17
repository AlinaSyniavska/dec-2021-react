import {Link} from "react-router-dom";

import './Button.module.css'

const Button = ({to, state, children, ...arg}) => {

    return (
        /*        <div>
                    <button>{children}</button>
                </div>*/
        <Link to={to} state={state}>
            <button {...arg}>{children}</button>
        </Link>
    );
};

export {Button};