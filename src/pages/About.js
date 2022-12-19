import React from 'react'
import styled from "styled-components"
import Header from "../Components/Header";
import Aboutus from "../Components/Aboutus"
import Footer from "../Components/Footer"

function About() {
  return (
    <Container>
        <Header />
        <Aboutus />
        <Footer />
    </Container>
  )
}

export default About
const Container = styled.div``