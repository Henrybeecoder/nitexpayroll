import React, { useState, useReducer, useEffect } from 'react'
import Bannersidebars from '../Sidebars/bannersidebars'
import styled from 'styled-components'
import LoginErrorModal from './login_error_modal'
import { reducer } from './reducer'
import validator from 'validator'
import '../CSS/login_screen.css'

export default function LoginScreen() {
    return (
        <Flex>
            <LoginForm />
            <Bannersidebars />
        </Flex>
    )
}

function LoginForm() {
    const defaultState = {
        isModalOpen: false,
        modalContent: '',
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [emailcheck, setEmailCheck] = useState(false)
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleChange = (e) => {

    };

    const formSubmit = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email && regex.test(email)) {
            dispatch({ type: 'VALID_EMAIL' })
        }
        else {
            dispatch({ type: 'INVALID_EMAIL' });
            setEmail(e.target.value)
        }
    }

    const onEmailType = (e) => {

        setEmail(e.target.value)
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email && regex.test(email)) {

            setEmailCheck(true)
        }
        else {
            setEmailCheck(false)
        }

    };
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <div className="login-screen">
            <LoginContent>
                <p className="top-dots">..... <br /> .....</p >
                <p className="login-text">Login</p>
                <p className="onboard">Get onboard with our new login screen...</p>
                <button className="google-sign-in">
                    <img src='/image/icons8-google-48.png' alt="Google icon" />
                    Sign in with Google
                </button>

                <Signup>
                    <hr size="2" color="#CCCCCC" />
                    <FadeText>or sign in with email</FadeText>
                    <hr size="2" color="#CCCCCC" />
                </Signup>

                <form onSubmit={formSubmit}>
                    <label className="email-label">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="email-input"
                        value={email}
                        onChange={onEmailType}
                    />
                    {emailcheck && (<img src="/image/icons8-checked-50.png" class="email-check" />)}
                    {state.isModalOpen && (
                        <LoginErrorModal closeModal={closeModal} modalContent={state.modalContent} />
                    )}
                    <label className="password-label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        className="password-input"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <CheckBox>
                        <div className="remember-me">
                            <input type="checkbox" />
                            Remember me
                        </div>
                        <p>Forgot password?</p>
                    </CheckBox>
                    <button type="submit">Next</button>
                </form>

            </LoginContent>
        </div >
    )
}

const Flex = styled.div`
 display:flex

 
    `
const FadeText = styled.p`
color: #666666;
padding: 0 5px;
font-size: 13px;

`
const Signup = styled.p`

display:flex
`
const LoginContent = styled.div`
width: 60%;
margin-left: 130px;
@media screen and (max-width: 800px) {
    width: 85%;
    margin: 0 20px
}
`

const CheckBox = styled.div`
display:flex;
height: 7vh;
width: 100%;
justify-content: space-between;
align-items: center;
color: #CCCCCC;
font-size: 13px;
`




