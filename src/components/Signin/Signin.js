import {useState} from "react";
import Input from "../Input/Input";
import {ReactComponent as EmailIcon} from '../../assets/emailIcon.svg'
import './signin.css';


const Signin = ({onSubmit, onToggleForm}) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = ({target}) => {
        setFormValues(prev => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues)
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
                    icon={EmailIcon}
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