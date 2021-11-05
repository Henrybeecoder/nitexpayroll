import React, { useState, useReducer, useEffect } from 'react'
import './login_screen.css'
import BannerSidebar from '../sidebar/bannersidebar'
import styled from 'styled-components'
import LoginErrorModal from './login_error_modal'
import { reducer } from './reducer'
import validator from 'validator'

export default function LoginScreen() {
    return (
        <Flex>
            <LoginForm />
            <BannerSidebar />
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
 if (validator.isEmail(email)) {
      dispatch({type: 'VALID_EMAIL'})
 }
  else {
            dispatch({ type: 'INVALID_EMAIL' });
            setEmail(e.target.value)
        }
}

    const onEmailType = (e) => {

        setEmail(e.target.value)

        if (validator.isEmail(email)) {

            setEmailCheck(true)
        }
        else {
            setEmailCheck(true)
        }
       
    };
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    return (
        <div className="login-screen">
            <LoginContent>
                <p className="top-dots">..... <br /> .....</p >
                <h3>Login</h3>
                <p className="onboard">Get onboard with our new login screen...</p>
                <button className="google-sign-in">
                    <img src='/svg/icons8-google-48.png' alt="Google icon" />
                    Sign in with Google
                </button>
                <Flex>
                    <hr size="2" width="16%" color="#CCCCCC" />
                    <FadeText>or sign in with email</FadeText>
                    <hr size="2" width="16%" color="#CCCCCC" />
                </Flex>
                <form onSubmit={formSubmit}>
                    <label className="email-label">
                        Email
                    </label>
                    <input
                        type="text"
                        placeholder="johnkachi@example.com"
                        value={email}
                        onChange={onEmailType}
                    />
                    {emailcheck && (<img src="/svg/icons8-checked-50.png" class="email-check" />)}
                    {state.isModalOpen && (
                        <LoginErrorModal closeModal={closeModal} modalContent={state.modalContent} />
                    )}
                    <label className="password-label">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
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
padding: 0 20px;
font-size: 13px;
`
const LoginContent = styled.div`
width: 90%;
margin-left: 130px;
@media screen and (max-width: 800px) {
    width: 100%;
    
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
font-size: 15px;
`




