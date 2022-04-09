import formCss from '../Form.module.css'
import {useState} from "react";

const FormControlled = () => {

    const [user, setUser] = useState({});

    const getInfoUser = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

/*    const submitForm = (e) => {
        e.preventDefault();

        e.target.userName.value = '';
        e.target.userPassword.value = '';
    }*/

    return (
        <div>
            <form>
                <div>
                    <label>User Name:<input type={'text'} name={'userName'} onChange={getInfoUser}/></label>
                </div>
                <div>
                    <label>User Password:<input type={'password'} name={'userPassword'} onChange={getInfoUser}/></label>
                </div>
                <button>Submit</button>
            </form>

            {JSON.stringify(user)}
        </div>
    );
};

export {FormControlled};