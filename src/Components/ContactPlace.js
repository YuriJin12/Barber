import React from 'react'
import styled from "styled-components"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactPlace() {
  return (
    <Container>
        <Contain>
            <Content>
                <Text>    
                <h2>Contato:</h2> <br/>
                    <ContactText>
                        <WhatsAppIcon/>
                        <a href="">(47) 99104-2134</a> 
                    </ContactText>
                    <ContactText>
                        <InstagramIcon/>
                        <a href="instagram.com/gringo_meiapraia">@gringo_meiapraia</a>
                    </ContactText>
                    <p>Em anexo ao posto <a href="https://www.google.com/search?q=posto%204%20ilhas&sxsrf=ALiCzsZnuHPS7lfDG068P5cEoj7UTMYpYA:1671564666575&ei=dQ2iY-mGCPG25OUP8-WO2A4&ved=2ahUKEwjP-63R94j8AhVCLbkGHTtAA_8QvS56BAgTEAE&uact=5&oq=posto+4+ilhas&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECC4QQzIKCC4QrwEQxwEQQzILCC4QrwEQxwEQgAQyCgguEMcBEK8BEEMyDgguEK8BEMcBENQCEIAEMgUIABCABDILCC4QrwEQxwEQgAQyBQgAEIAEMggILhDUAhCABEoECEEYAEoECEYYAFAAWABgAGgAcAB4AIAB_wGIAfoDkgEDMi0ymAEA&sclient=gws-wiz-serp&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:3&tbm=lcl&rflfq=1&num=10&rldimm=11429627227799555253&lqi=Cg1wb3N0byA0IGlsaGFzSJ7b9p_QtICACFobEAAQARACGAAYARgCIg1wb3N0byA0IGlsaGFzkgELZ2FzX3N0YXRpb24&sa=X&rlst=f#rlfi=hd:;si:11429627227799555253,l,Cg1wb3N0byA0IGlsaGFzSJ7b9p_QtICACFobEAAQARACGAAYARgCIg1wb3N0byA0IGlsaGFzkgELZ2FzX3N0YXRpb24;mv:[[-27.1208418,-48.5032931],[-27.175526299999998,-48.618551599999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:3">
                    4 Ilhas
                    </a>, na 2 Avenida, Número 995, Meia-Praia SC.</p>
                </Text>
            </Content>
        </Contain>
    </Container>

  )

}

export default ContactPlace


const Container = styled.div`
    height: 43rem;
    background-color: gray;
    padding: 3rem;
    padding-bottom: 0;
    display: flex;
`
const Contain = styled.div`
    width: 94.8%;
    background-image: url("./images/4ilhas.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 40rem;
    margin-top: 2.5rem;
    display: flex;
    border: 2px solid  rgba(177,85,18,0.91);
    margin-bottom: 2.5rem;
    justify-content: initial;
    `
    const Content = styled.div`
    margin-left: 4rem;
    background-color: rgba(50, 50, 50, 0.58);
    width: 40%;
    display: flex;
    `
const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: initial;
    width: 50%;
    h2 {
        color: white;
        font-size: 25px;
        font-family: Roboto;
        margin-top: 5rem;
    }
    p {
        color: white;
        text-align: center;
        margin-top: 5rem;
        line-height: 2rem;
        font-family: Roboto;
        font-size: 18px;
    }
`

const ContactText = styled.div`
    display: flex;
    align-items: center;
    width: 15rem;
    justify-content: initial;
    margin-bottom: 1rem;
    color: white;
    a {
        text-decoration: none;
        color: white;
        margin-left: 2rem;
    }
`