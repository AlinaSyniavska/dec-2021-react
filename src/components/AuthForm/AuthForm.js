import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname, state} = useLocation();

    const {loginError} = useSelector(state => state.authState);
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();
    const {authStatus, authErrors} = useSelector(state => state.authState);
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submitForm = async (user) => {
        try {
            if(!isLogin) {
                await userService.create(user);
                navigate('/login');
            } else {
               await dispatch(authActions.login({user}));
               navigate(state?.pathname || '/', {replace: true});
            }
        } catch (e) {
            console.error(e.response);
            setErrors(e.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <label>Username
                <input type={'text'} placeholder={'username'} {...register('username')}/>
            </label>
            <label>Password
                <input type={'password'} placeholder={'password'} {...register('password')}/>
            </label>
            <button>{isLogin ? 'Login' : 'Register'}</button>

            <div>
                <div>{authStatus && <b>{authStatus}</b>}</div>
                <div>{authErrors.username && <div>Error username: {authErrors.username[0]}</div>}</div>
                <div>{authErrors.password && <div>Error password: {authErrors.password[0]}</div>}</div>
            </div>

            <div>
                <div>{errors?.username && <span>{errors.username[0]}</span>}</div>
                <div>{errors?.password && <span>{errors.password[0]}</span>}</div>
                {loginError && <span>Wrong username or password</span>}
            </div>
        </form>
    );
};

export {AuthForm};