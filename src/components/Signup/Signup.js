import {useRef} from "react";
import Input from "../Input/Input";
import RadioGroup from "../Input/RadioGroup";
import {ReactComponent as EmailIcon} from '../../assets/emailIcon.svg'
import './signup.css';

const Signup = ({onSubmit, onToggleForm}) => {
    const formValues = useRef({});

    const handleChange = ({target}) => {
        formValues.current = {
            ...formValues.current,
            [target.name]: target.value
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formValues.current);
    };

    return (
        <div className={'signup-form-container'}>
            <span className={'form-title'}>
                Sign up
            </span>

            <form
                className={'signup-form'}
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <Input
                    name={'name'}
                    label={'Name'}
                    description={'Please provide your name'}
                    placeholder={'Your name'}
                    required
                />

                <Input
                    name={'nickname'}
                    label={'Nickname'}
                    description={'Please provide your nickname'}
                    placeholder={'Your nickname'}
                    icon={EmailIcon}
                    required
                />

                <Input
                    name={'email'}
                    label={'Email'}
                    description={'Please provide your email'}
                    placeholder={'Your email'}
                    error={"Example error  message"}
                    required
                />

                <RadioGroup
                    formValues={formValues}
                />

                <Input
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    placeholder={'Your password'}
                    required
                />

                <Input
                    name={'repeatPassword'}
                    type={'password'}
                    label={'Repeat password'}
                    placeholder={'Your password'}
                    description={'Passwords must match'}
                    required
                />

                <button className={'submit-btn'}>
                    Submit
                </button>
            </form>

            <span className={'create-an-account'}>
                Already have an account? <span onClick={onToggleForm}>Sign in</span>
            </span>
        </div>
    );
};

export default Signup;