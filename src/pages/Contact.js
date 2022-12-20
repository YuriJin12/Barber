import React from 'react'
import styled from "styled-components"
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import ContactPlace from '../Components/ContactPlace';

function Contact() {
    return (
        <Container>
            <Header />
            <ContactPlace/>
            <Footer />
        </Container>
    )
}

export default Contact

const Container = styled.div`

`