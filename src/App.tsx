import React, {useState} from "react";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import {FormValues} from "./types/Form.types";
import './app.css';

function App() {
    const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);

    const handleSubmit = (formValues: FormValues): void => {
        console.log('Form values: ', formValues);
    };

    const toggleForm = (): void => {
        setShowSignUpForm(prev => !prev);
    };

    return (
        <div className="app">
            {showSignUpForm
                ? <Signup onSubmit={handleSubmit} onToggleForm={toggleForm} />
                : <Signin onSubmit={handleSubmit} onToggleForm={toggleForm} />
            }
        </div>
    );
}

export default App;
