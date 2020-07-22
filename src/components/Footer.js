import React from 'react';
import styled from 'styled-components';

/*footer - rodapé */
const Footer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
height: 40px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color:#990073;
height: 90px;
`
const FooterItem = styled.div`
text-decoration: none;
font-size: 16px;
color:#fff;
font-weight: bold;
`
/*exportar função padrao de rodapé que retorne(algo) */
export default function footer () {
    return (
    <React.Fragment>
        <Footer>
            <FooterItem>Aula sobre styled components</FooterItem>
        </Footer>  
    </React.Fragment>  
    );
}