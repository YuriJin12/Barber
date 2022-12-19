import React from 'react'
import styled from "styled-components"
import Header from "../Components/Header";
import WelcomeSection from "../Components/WelcomeSection"
import BarberServices from "../Components/BarberServices"
import OurBarbers from "../Components/OurBarbers"
import Footer from "../Components/Footer"

function Home() {
  return (
    <Container>
        <Header />
        <WelcomeSection />
        <BarberServices />
        <OurBarbers />
        <Footer />
    </Container>
  )
}

export default Home
const Container = styled.div``