import React from 'react'
import styled from "styled-components"

function BarberServices() {
  return (
    <Container>
      <Contain>
      <p className="title">Serviços Presentes</p>
        <Left>
          <ImageDescription>
            <div className="imagediv">
            </div>
            <div className="text">
              <h2>Barba</h2>
            <p>Existem variedades para se escolher na hora de decidir seu estilo de barba. O que pode dizer muito sobre a aparência que você quer passar. De alguém mais sério, disciplinado à alguém destemido, frio.</p>
            </div>
          </ImageDescription>
          <ImageDescription>
          <div className="text">
            <h2>Cabelo</h2>
            <p>Defina o corte que combina mais com você, que é sua identidade! O restante, deixe que façamos nosso trabalho!</p>
            </div>
            <div className="imagediv2">

            </div>
          </ImageDescription>
          <ImageDescription>
            <div className="imagediv3">

            </div>
            <div className="text">
              <h2>Máscara Facial</h2>
            <p>É importante hidratar a pele antes de fazer a barba, ou até mesmo para mante-lá hidratada. Afinal, se cuidar é saudável!</p>
            </div>
          </ImageDescription>
        </Left>
        <Right>
          <div className="backImg">

          </div>
        </Right>
      </Contain>
    </Container>
  )
}

export default BarberServices

const Container = styled.div`
  height: 45rem;
  background-color: gray;
  display: flex;
  align-items: start;
  justify-content: center;
  font-family: Roboto;
  padding: 0 3rem;
`
const Contain = styled.div`
  display: flex;
  background-color: rgba(13, 11, 12, 0.78);
  height: 40rem;
  width: 95%;
  text-align: center;
  justify-content: center;
  .title {
    position: absolute;
    color: white;
    font-size: 25px;
    font-family: Roboto;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: 10px;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 100%;
  .backImg {
    margin-top: 5rem;
    width: 90%;
    height: 75%;
    background-image: url(https://i.insider.com/562be2579dd7cc19008c47d3?width=1000&format=jpeg&auto=webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.55);
    border-bottom: 3px solid rgba(177, 85, 18, 0.51);
    border-right: 3px solid rgba(177, 85, 18, 0.51);
    border-top: 1px solid rgba(177, 85, 18, 0.51);
    border-left: 1px solid rgba(177, 85, 18, 0.51);
    border-radius: 10px;
  }

`
const ImageDescription = styled.div`
display: flex;
width: 100%;
color: gray;
align-items: center;
  .imagediv { 
    display: flex;
    width: 10rem;
    height: 10rem;
    background-image: url(https://images.squarespace-cdn.com/content/v1/5537fc59e4b0ca81a8906207/1444068502750-9OAZ1GXCPFGZ7016DGFS/image-asset.jpeg?format=1000w);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center;
    background-position-x: -60px;
    margin: 2rem 0 0 1rem;
    border: 3px solid gray;
  }
  .text {
    width: 60%;
    margin-left: 5rem;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      color: white;
    }
  }
  padding-bottom: 1rem;

  .imagediv2 { 
    display: flex;
    width: 10rem;
    height: 10rem;
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWfNz4LVsNtaeLPmVdUy9d7ciyOxrtA1AbA&usqp=CAU);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center;
    margin: 2rem 0 0 1rem;
    border: 3px solid gray;
  }
  .imagediv3 {
    display: flex;
    width: 10rem;
    height: 10rem;
    background-image: url(https://wordpress.styleseat.com/wp-content/uploads/2021/11/person-getting-hot-towel-shave.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center;
    margin: 2rem 0 0 1rem;
    border: 3px solid gray;

  }
`