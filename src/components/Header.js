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
const Item = styled.a `
font-size: 20px;
font-family: fantasy;
color: #000;
padding: 50px;
box-sizing: border-box;
`
/*Header - cabeçalho */
export default function header() {
    return(
        <Nav>
            <Item>Home</Item>
            <Item>Contato</Item>
            <Item>Sobre</Item>
        </Nav>
    );
}