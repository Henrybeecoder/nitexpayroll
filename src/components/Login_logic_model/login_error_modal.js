import React, { useEffect } from 'react';
import styled from 'styled-components';
import './CSS/login-error.css'

const LoginErrorModal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 3000);
    });
    return (
        <Modal>
            <div className='first-section'>
                <img src="/svg/icons8-error-50.png" />
                <div className="error-content">
                    <h5>Error</h5>
                    <p>{modalContent}</p>
                </div>
            </div>
            <button onClick={() => closeModal} class="error-close-button">Close</button>
        </Modal>


    );
};

export default LoginErrorModal;

const Modal = styled.div`
display: flex;
width: 100%
background: #FFFFFF;
border-left: 3px solid 
#E95D61;
box-shadow: 0px 4px 40px rgba(204, 204, 204, 0.3);
align-items:center;
justify-content: space-between;
margin-top: 10px;
animation: fadeIn 1s;
-webkit-animation: fadeIn 1s;
-moz-animation: fadeIn 1s;
-o-animation: fadeIn 1s;
-ms-animation: fadeIn 1s;
`