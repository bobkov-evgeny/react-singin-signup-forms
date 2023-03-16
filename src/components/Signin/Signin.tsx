import React, {useRef} from "react";
import Input from "../Input/Input";
import './signin.css';
import {FormValues, IFormComponentProps} from "../../types/Form.types";

const Signin: React.FC<IFormComponentProps> = ({onSubmit, onToggleForm}) => {
    const formValues = useRef<FormValues>({});

    const handleChange = ({target}: React.FormEvent<HTMLFormElement>): void => {
        const inputEl = (target as HTMLInputElement);

        formValues.current = {
            ...formValues.current,
            [inputEl.name]: inputEl.value
        };
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onSubmit(formValues.current);
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