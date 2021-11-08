
import React from 'react'
import styled from 'styled-components'
import '../CSS/bannersidebar.css'

function Bannersidebars() {
    return (
        <Sidebar>
            <HugeText>Get onboard with NITAX Pay-roll.</HugeText>
            <SmallerText>.........skjsbhsopsxxjsj</SmallerText>
            <img src='/image/grilimage.png' className="girlimage" />
        </Sidebar>
    )
}

export default Bannersidebars;

const Sidebar = styled.div`
width: 30%;
height: 100vh;
background: #54a8c4;
position: absolute;
right: 0px;
padding: 10px;
@media screen and (max-width: 800px) {
    display:none
}
`
const HugeText = styled.p`
font-size: 50px;
line-height: 65.45px;
font-weight: 400;
color: #FFFFFF;
padding: 40px 40px 0 
`
const SmallerText = styled.p`
color: #FFFFFF;
padding: 3px 40px;
line-height: 35.16px;
font-size: 25px;
`