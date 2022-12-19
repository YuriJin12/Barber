import React from 'react'
import styled from "styled-components"

function Aboutus() {
  return (
    <Container>
        <Contain>
            <Content>
                <Text>
                    <h2>Gringo Barbearia</h2>
                    <div>
                        <p>Constituída a partir do caráter de quem vos atende, distribuida em filiais, levamos nosso empenho e dedicação no trabalho com cada cliente. <br/> 
                            <p className="text">Esforço para trazer para você, o seu estilo! </p>
                            Alocada em conjunto com o posto 4 ilhas, nosso espaço vem crescendo.
                            Aos poucos fomos tomando forma e trazendo conosco a excelência. <br/>
                            Quando traçamos um objetivo, do mais simples ao mais sofisticado, não recuamos perante nada. 
                            Nossas metas são conquistadas dia após dia, por cada cliente que passa em nossa porta.     
                        </p>
                    </div>
                </Text>
            </Content>
        </Contain>
    </Container>
  )
}

export default Aboutus
const Container = styled.div`
    background-color: gray;
`

const Contain = styled.div`
    display: flex;
    background-color: gray;
    height: 40rem;
    padding: 3rem;
    padding-bottom: 0rem;
    padding-top: 3rem;
    margin-top: 2.2rem;
`
const Content = styled.div`
    display: flex;
    height: 40rem;
    background-color: rgba(13,11,12,0.72);
    width: 95%;
    align-items: center;
`
const Text = styled.div`
    width: 50%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.49);
    text-align: center;
    box-sizing: border-box;
    padding: 2rem;
    color: white;
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: center;
    h2 {
        font-size: 30px;
        margin-bottom: 4rem;
    }
    div {
        text-align: center;
        width: 70%;
        p {
            line-height: 1.9rem;
            font-size: 18px;
        }
        .text {
            font-weight: bold;
            font-size: 25px;
            color: rgba(255, 255, 210);
            line-height: 3.3rem;
        }
    }
`