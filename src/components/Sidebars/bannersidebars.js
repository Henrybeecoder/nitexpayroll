
import React from 'react'
import styled from 'styled-components'
import '../CSS/bannersidebar.css'

function Bannersidebars() {
    return (
        <Sidebar>
            <HugeText>Get onboard with NITAX Pay-roll.</HugeText>
            <smallerText>.........skjsbhsopsxxjsj</smallerText>
            <img src='/image/grilimage.png' className="girlimage" />
        </Sidebar>
    )
}

export default Bannersidebars;

const Sidebar = styled.div`
width: 30%;
height: 100vh;
background: #5ebbdb;
@media screen and (max-width: 800px) {
    display:none
}
`
const HugeText = styled.h1`
font-size: 50px;
line-height: 65.45px;
font-weight: 400;
color: #FFFFFF;
padding: 50px 40px 0 
`
