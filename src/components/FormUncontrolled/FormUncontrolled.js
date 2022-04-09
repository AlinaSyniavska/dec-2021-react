import {useRef} from "react";

// import formCss from '../Form.module.css'
import '../Form.module.css'

const FormUncontrolled = () => {

    const name = useRef();
    const password = useRef();

    function submitForm(e) {
        e.preventDefault();
        // console.log(name.current.value);
        // console.log(password.current.value);

        const userName = name.current.value;
        const userPassword = password.current.value;
        
        const user = {userName, userPassword};
        console.log(user);

        name.current.value = '';
        password.current.value = '';
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Name:
                        <input type={'text'} ref={name}/>
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type={'password'} ref={password}/>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export {FormUncontrolled};