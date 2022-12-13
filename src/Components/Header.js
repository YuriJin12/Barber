import React from 'react'
import "@fontsource/roboto";
import styled from "styled-components"

function Header() {
    return (
        <Container>
            <Contain>
                <Inside>
                    <div>
                        <img src="./images/gringoicon2png.png" />
                    </div>
                    <Nav>
                        <a>Inicio</a>
                        <a>Quem Somos</a>
                        <a>Galeria</a>
                        <a>Contato</a>
                    </Nav>
                    <GetInTouch>
                        <button type="button">Get in Touch</button>
                    </GetInTouch>
                </Inside>
            </Contain>
                <div>
                    <p>UM LIFESTYLE SAUDÁVEL</p> 
                    <br/> 
                    <p className="text">
                    Estilo, <br/> Régua <br/> e Talento!
                    </p>
                </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        position: relative;
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 150px;
        color: white;
        font-family: Roboto;
        box-shadow: 2px 2px 4px 2px black;
        padding: 5px;
    }
    .text {
        margin-top: 0;
        font-size: 52px;
    }
    
`
const Contain = styled.div`
    position: absolute;
    width: 100%;
    height: 30rem;
    box-sizing: border-box;
    background-image: url("./images/barbeariagoogle.jpg");
    opacity: 0.97;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-position-y: 64% ;
    border-bottom: 4px solid rgba(13, 11, 12, 0.79);
`
const Inside = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(27, 27, 27, 0.8);
    box-shadow: 1px 1px 5px 2px; #000 teal;
    box-sizing: border-box;
    padding: 0px 15px;
    position: relative;
    top: -30%;
    img {
        object-fit: contain;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        margin-right: 8rem;
        left: -2;
        display: flex;
        background-color: rgba(255, 248, 250);
    }
    a {
        padding: 5px;
        margin-right: 2rem;
        justify-content: space-between;
        border-radius: 2px 7px 8px 14px;
        color: white;
        cursor: pointer;
        border: 1px solid transparent;
    }
    a:hover {
        background-color: rgba(190, 117, 1, 0.8);
        transition: all 0.2s;
        // border: solid 1px white;
    }
`
const Nav = styled.div`
    border-bottom: 2px solid white;
    height: 25px;
    font-family: "Roboto";
`
const GetInTouch = styled.button`
    button {
        background-color: rgba(177, 85, 18, 0.91);
        padding: 11px;
        border-radius: 10px;
        border: white solid 1px;
        cursor: pointer;
        color: white;
        font-family: "Roboto";
    }
    button:hover {
        background-color: rgba(177, 115, 15, 1);
    }
    background-color: transparent;
    border: none;
`
