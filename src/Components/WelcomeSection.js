import React from 'react'
import styled from "styled-components"


function WelcomeSection() {
    return (
        <Container>
            <Contain>
            <Welcome>
                <p>BEM VINDO À NOSSO SITE!</p>
                <h2 className="weAre">NÓS SOMOS A GRINGO BARBEARIA!</h2>
                <div></div>
                <p className="description"> A barbearia costuma ser simples. Lugar onde você se consegue <br />
                    um bom corte de cabelo, uma barba bem feita, socializar, fazer Network  <br />
                    e conhecer novas pessoas. Com objetivo em trazer a sua essência, seu estilo!  </p>

            </Welcome>
            <WelcomeImages>
                <div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&w=1000&q=80">
                        </img>
                    </div>
                    <div>
                        <img
                            src="https://i.pinimg.com/736x/ec/da/8d/ecda8db56cc3277ecd06ca44cf443898--barber-shop-barbers.jpg">
                        </img>
                    </div>
                </div>
            </WelcomeImages>
            <WorkingHours>
                <p> Horários de Funcionamento</p>
                <div className="line"></div>
                <Hours className="hours">
                    <table>
                        <tr><th>Dom</th><td>Fechado</td></tr>
                        <tr><th>Seg</th><td>8:00-19:00</td></tr>
                        <tr><th>Ter</th><td>8:00-19:00</td></tr>
                        <tr><th>Qua</th><td>8:00-19:00</td></tr>
                        <tr><th>Qui</th><td>8:00-19:00</td></tr>
                        <tr><th>Sex</th><td>8:00-19:00</td></tr>
                        <tr><th>Sáb</th><td>8:00-16:00</td></tr>
                    </table>
                </Hours>
            </WorkingHours>
            </Contain>
        </Container>
    )
}

export default WelcomeSection


const Container = styled.div`
    height: 28rem;  
    background-color: gray;
    display: flex;
    margin-top: 2rem;
    padding: 3rem;
    padding-bottom: 0;
`

const Contain = styled.div`
display: flex;
height: 28rem;
width: 95%;
div {
    width: 39.6rem;
    height: auto;
    background-color: rgba(13, 11, 12, 0.72);
    display: flex;
    flex-direction: column; 
}
`
const Welcome = styled.div`
    padding-left: 50px;
    align-items: flex-start;
    p {
        color: rgba(177, 85, 18, 0.91);
        font-size: 13px;
        font-family: Roboto;
    }
    .weAre {
        line-height: 3rem;
        color: white;
        font-size: 22px;
        margin-top: 0.4rem;
        font-family: Roboto;
    }
    .description {
        color: rgba(144, 144, 144, 1);
        line-height: 1.5rem;
        font-family: "Roboto";
        margin-top: 3rem;
    }
    div {
        width: 10rem;
        background-color: transparent;
        border-top: 1px solid rgba(177, 85, 18, 0.91);
        display: flex;
        left: -5%;
        position: relative;
    }
`

const WelcomeImages = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    img {
        width: 15rem;
        height: 20rem;
        border-radius: 25px;
    }
    div {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        border-radius: 25px;
        div {
            box-shadow: 3px 1px 0px 1px rgba(0, 0, 2, 0.5);
            width: 15rem;
            height: 20rem;
            border-right: 3px solid rgba(177, 85, 18, 0.91);
            border-bottom 3px solid rgba(177, 85, 18, 0.91);
            border-top 1px solid rgba(177, 85, 18, 0.91);
            border-left 1px solid rgba(177, 85, 18, 0.91);
        }
    }
`
const WorkingHours = styled.div`
color: white;
padding-top: 3rem;
display: flex;
flex-direction: column;
    p {
        font-size: 18px;
        font-family: Roboto;
        line-height: 3rem;
    }
    div {
        width: 5rem;
        background-color: transparent;
    }
    .line {
        width: 6rem;
        background-color: transparent;
        display: flex;
        left: -3%;
        position: relative;
        border-bottom: 1px solid rgba(177, 85, 18, 0.91);
    }
    .hours {
        padding: 15px;
    }
    padding-left: 5rem;
 `
const Hours = styled.div`
    font-family: Roboto;
    table {
        width: 20rem;
        line-height: 1.8rem;
        text-align: center;
        border: 2px solid gray;
        padding: 1rem;
        color: gray;
        tr:nth-child(1) {
            td {
                text-align: end;
                padding-right: 0.5rem;
            }
        }
    }
    th {
        text-align: left; 
        border-bottom: 1px dashed gray;
    }
    td {
        text-align: right; 
        border-bottom: 1px dashed gray; 
    }   
`