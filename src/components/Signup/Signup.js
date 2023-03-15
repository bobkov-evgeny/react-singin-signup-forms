import './signup.css';
import Input from "../Input/Input";
import {useState} from "react";

const Signup = ({onSubmit, onToggleForm}) => {
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
                    required
                />

                <Input
                    name={'email'}
                    type={'email'}
                    label={'Email'}
                    description={'Please provide your email'}
                    placeholder={'Your email'}
                    required
                />

                <div>
                    <span>Gender:</span>

                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        defaultChecked={formValues.gender === 'male' || false}
                    />
                    <label htmlFor="male">male</label>

                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        defaultChecked={formValues.gender === 'female' || false}
                    />
                    <label htmlFor="female">female</label>
                </div>

                <Input
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    placeholder={'Your password'}
                    required
                />

                <Input
                    name={'reRassword'}
                    type={'password'}
                    label={'Repeat password'}
                    placeholder={'Your password'}
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