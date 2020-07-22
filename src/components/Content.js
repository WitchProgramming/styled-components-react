import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
background-color:#e580ff;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;
`
const ContentItem = styled.p`/*styled.p estiliza o paragrafo */
color: #000;
text-align: center;
font-family: Fantasy;
width: 250px;
padding: 10px;/*preenchimento */
box-sizing: border-box;
margin: 150px;
`

//content é o conteudo
export default function content() {
  return (
      <React.Fragment>
          <Content>
              <ContentItem>
                 Para aprender mais sobre o conteúdo<br></br>
                 <a href="https://styled-components.com/docs/basics">Clique aqui!</a>
              </ContentItem>
              <ContentItem>
                  Para reassistir a aula <br></br>
                  <a href="https://web.digitalinnovation.one/course/desafio-pratico-criando-uma-home-com-styled-
                  components/learning/c7724b57-cb34-4f4c-8c21-bf215b084521?back=/track/sp-tech-desenvolvimento-
                  fullstack&bootcamp_id=0f24cfd2-17f7-49e1-85d4-d91eb090e51a">Clique aqui!</a>
              </ContentItem>
          </Content>
      </React.Fragment>
  );
}

