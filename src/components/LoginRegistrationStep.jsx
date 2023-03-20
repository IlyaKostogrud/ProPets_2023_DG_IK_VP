import React, {useState} from 'react';
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const LoginRegistrationStep = ({logOrReg}) => {
    const [registration, setRegistration] = useState(logOrReg)

    return (
        <div>
            <button disabled={registration}>Sign up</button>
            <button disabled={!registration}>Sign in</button>
            {registration ? <RegistrationForm/> : <LoginForm/>}
        </div>
    );
};

export default LoginRegistrationStep;