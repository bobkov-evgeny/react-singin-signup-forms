import {useRef} from "react";
import Input from "../Input/Input";
import './signin.css';

const Signin = ({onSubmit, onToggleForm}) => {
    const formValues = useRef({});

    const handleChange = ({target}) => {
        formValues.current = {
            ...formValues.current,
            [target.name]: target.value
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues.current)
    };

    return (
        <div className={'sign-in-form-container'}>
            <span className={'form-title'}>
                Sign in
            </span>

            <form
                className={'sign-in-form'}
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <Input
                    name={'email'}
                    label={'Email'}
                    placeholder={'Your email'}
                    required
                />

                <Input
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    placeholder={'Your password'}
                    required
                />

                <button className={'submit-btn'}>
                    Submit
                </button>
            </form>

            <span className={'create-an-account'}>
                Don't have an account? <span onClick={onToggleForm}>Sign up</span>
            </span>
        </div>
    );
};

export default Signin;