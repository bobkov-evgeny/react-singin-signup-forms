import {useState} from "react";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import './app.css';

function App() {
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleSubmit = (e) => {
        console.log('Form values: ', e);
    };
    const toggleForm = () => {
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
