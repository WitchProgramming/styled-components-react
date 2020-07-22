import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color:#BD9EF1;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
`
const Item = styled.div `
font-size: 14px;
font-family: 'Read';
font-weight: bold;
color: #fff;
`

export default function header() {
    return(
        <Nav>
            <Item>Home</Item>
            <Item>Contato</Item>
            <Item>Sobre</Item>
        </Nav>
    );
}