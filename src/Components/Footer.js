import React from 'react'
import styled from "styled-components"

function Footer() {
  return (
    <Container>
        <Contain>
            <p>Desenvolvido por Yuri Aime Furquim</p>
            <div>
                <h2>Gringo Barbearia</h2>
            </div>
            <p>Contato: yurifurquimdev@gmail.com</p>
        </Contain>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: gray;
    height: 5rem;
    padding: 3rem;
    padding-top: 0;
    display: flex;
`
const Contain = styled.div`
    display: flex;
    background-color: rgba(13,11,12,0.78);
    width: 95%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    p {
        margin-left: 2rem;
        color: rgba(144,144,144,1);
        font-family: Roboto;
        font-size: 12px;
        font-weight: bold;
    }
    div {
        border-bottom: 1px solid rgba(177,85,18,0.91);
        padding-left: 1rem;
        h2 {
            color: white;
            font-family: Roboto;
            font-weight: bold;
        }
    }
`
