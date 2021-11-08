import React, { useState, useEffect, useReducer } from 'react'
import '../CSS/forgot_password.css'
import '../CSS/login_screen.css'
import Bannersidebars from '../Sidebars/bannersidebars'
import styled from 'styled-components'

const validationNames = [
    { id: 'lowercase', name: 'One lowercase letter' },
    { id: 'uppercase', name: 'One uppercase letter' },
    { id: 'number', name: 'One special character or Number' },
    { id: 'minChar', name: 'Eight characters' },
];

const validationObj = {
    lowercase: false,
    uppercase: false,
    number: false,
    minChar: false,
};

const validationReducer = (state, action) => {
    switch (action.type) {
        case 'lowercase':
            return { ...state, lowercase: action.payload };
        case 'uppercase':
            return { ...state, uppercase: action.payload };
        case 'number':
            return { ...state, number: action.payload };
        case 'minChar':
            return { ...state, minChar: action.payload };
        default:
            return state;
    }
};

export default function ForgotPassword() {
    const [isLocked, setIsLocked] = useState(false);
    const [state, dispatch] = useReducer(validationReducer, validationObj);

    const handleChange = (e) => {
        const validatePass = validate(e.target.value.trim());
        setIsLocked(validatePass);
    };

    const validate = (value) => {
        const checkLength = value.length >= 8;
        const checkLowerCase = /[a-z|ç|ş|ö|ü|ı|ğ]/u.test(value);
        const checkUpperCase = /[A-Z|Ç|Ş|Ö|Ü|İ|Ğ]/u.test(value);
        const checkNumber = /[^[a-zA-Z]/.test(value);

        if (checkLength) {
            dispatch({ type: 'minChar', payload: true });
        } else {
            dispatch({ type: 'minChar', payload: false });
        }

        if (checkLowerCase) {
            dispatch({ type: 'lowercase', payload: true });
        } else {
            dispatch({ type: 'lowercase', payload: false });
        }

        if (checkUpperCase) {
            dispatch({ type: 'uppercase', payload: true });
        } else {
            dispatch({ type: 'uppercase', payload: false });
        }

        if (checkNumber) {
            dispatch({ type: 'number', payload: true });
        } else {
            dispatch({ type: 'number', payload: false });
        }

        const isAllGood =
            checkLength && checkUpperCase && checkLowerCase && checkNumber;

        return isAllGood;
    };



    return (
        <Flex>
            <Form state={state} handleChange={handleChange} isLocked={isLocked} />
            <Bannersidebars />
        </Flex>

    );
}

const ValidationIcon = ({ isDone }) => {
    return isDone ? (
        // <svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <polyline
        //         className="check"
        //         points="1,7 5,11 13,1"
        //         fill="none"
        //         stroke="#FFFFFF"
        //         strokeWidth="2px"
        //         strokeLinecap="round"
        //     />
        // </svg>
        <img src="/image/checked.png" className="checked" />
    ) : (
        // <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M12 6A6 6 0 110 6a6 6 0 0112 0z" fill="#5B9A78" />
        // </svg>
        <img src="/image/circle.png" className="circle" />
    );
};

const ValidationItems = ({ state }) => (
    <ul className="validation-box">
        {validationNames.map((item) => (
            <li
                className={
                    state[item.id] === true ? `done validation-item` : 'validation-item'
                }
                key={item.id}>
                <span className="validation-icon">
                    <ValidationIcon isDone={state[item.id]} />
                </span>
                {item.name}
            </li>
        ))}
    </ul>
);

const FormField = ({ handleChange }) => {
    return (
        <form>
            <label className="password-label">
                Password
            </label>
            <input
                type="password"
                className="password-input"
                placeholder="Enter password"
                onChange={handleChange}
            />
            <label className="password-label">
                Confirm Password
            </label>
            <input
                type="password"
                className="password-input"
                placeholder="Enter password"
                onChange={handleChange}
            />
            <button type="submit">Change Password</button>
        </form>
    );
};

const Form = ({ state, handleChange, isLocked }) => {
    return (

        <div className="login-screen">
            <LoginContent>
                <p className="top-dots">..... <br /> .....</p >
                <p className="login-text">Create a New Password</p>
                <p className="onboard">Your password must not be the same as the previous password</p>

                <FormField
                    handleChange={handleChange}
                    isLocked={isLocked}
                />
                <ValidationItems state={state} />
            </LoginContent>
        </div>


    )
}

const LoginContent = styled.div`
width: 60%;
margin-left: 130px;
@media screen and (max-width: 800px) {
    width: 85%;
    margin: 0 20px
}
`
const Flex = styled.div`
 display:flex
    `