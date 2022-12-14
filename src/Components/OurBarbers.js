import React from 'react'
import styled from "styled-components"

function OurBarbers() {
  return (
    <Container>
        <Contain>
            <div>
            <h2>Nosso Time</h2>
            </div>
            <Barbers>
                <Barber>
                    <div>
                        <img src=""></img>
                        <p>Descrição do barbeiro</p>                        
                    </div>
                </Barber>
                <Barber>
                    <div>
                        <img src=""></img>
                        <p>Descrição do barbeiro</p>
                    </div>
                </Barber>
                <Barber>
                    <div>
                        <img src=""></img>
                        <p>Descrição do barbeiro</p>
                    </div>
                </Barber>
            </Barbers>
        </Contain>
    </Container>
  )
}

export default OurBarbers

const Container = styled.div`
    display: flex;
    background-color: gray;
    padding: 3rem;
    padding-top: 0;
    padding-bottom: 0;
    `
    const Contain = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgba(13,11,12,0.72);
    height: 33rem;
    width: 95%;
    flex-direction: column;
    h2 {
        display: block;
        position: relative;
        color: white;
        font-family: Roboto;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
 `
const Barbers = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const Barber = styled.div`
    width: 35.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    p {
        color: rgba(144,144,144,1);
        font-family: Roboto;
        font-size: 16px;
        text-align: center;
        margin-top: 15px;
    }
    div {
        height: 90%;
        width: 50%;
        display: flex;
        border: 1px solid lightgray;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: rgba(13,11,12,0.78);;
        border-radius: 15px;
        border-right: 3px solid rgba(177, 85, 18, 0.91);
        border-bottom 3px solid rgba(177, 85, 18, 0.91);
        border-top 1px solid rgba(177, 85, 18, 0.91);
        border-left 1px solid rgba(177, 85, 18, 0.91);
        img {
            width: 100%;
            height: 17.875rem;
        }
    }
`