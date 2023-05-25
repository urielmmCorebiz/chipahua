import { useState } from "react";
import { Container, Text, Grid } from "@nextui-org/react";
import emailjs from "emailjs-com";
import GoogleMapComponent from "./../components/Map/Map";
import NavbarMenu from "@/components/Layout/NavbarMenu";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import Footer from "@/components/Footer/Footer";


const Cotiza = () => {
    // useState
    const [adviceName, setAdviceName] = useState("");
    const [adviceEmail, setAdviceEmail] = useState("");
    const [adviceTel, setAdviceTel] = useState("");
    const [adviceMessage, setAdviceMessage] = useState("");

    const sendAdvice = (e: any) => {
        e.preventDefault();
        if (!adviceTel.trim() || !adviceMessage.trim()) {
        } else {
            emailjs
                .sendForm(
                    "chipahua",
                    `template_rr2qk6m`,
                    e.target,
                    "user_VGe2axNgQKXlEzuYyPuBl"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            console.log("enviado");
            setAdviceTel("");
            setAdviceMessage("");
            setAdviceEmail("");
            setAdviceName("");
        }
    };
    return (
        <>
            <NavbarMenu />
            <WhatsApp />
            <Container
                justify="center"
                alignItems="center"
                xl={true}
                lg={true}
                css={{ marginBottom: "40px" }}
            >
                <Grid.Container id="contacto" justify="center" className="contacto">
                    <Text h2 size={"$4xl"} css={{ textAlign: "center" }}>
                        Compártenos tus datos y nosotros te contactamos
                    </Text>
                </Grid.Container>
                <Grid.Container alignItems="center" justify="center">
                    <Grid md={6} xs={12}>
                        <GoogleMapComponent />
                    </Grid>
                    <Grid md={6} xs={12}>
                        <form onSubmit={sendAdvice} className="form-group">
                            <div className="container-inputs">
                                <div className="input-group">
                                    <label>Email</label>
                                    <input onChange={(event) => setAdviceEmail(event.target.value)} type="email" placeholder="Email" name="email" id="email" />
                                </div>
                                <div className="input-group">
                                    <label>Nombre</label>
                                    <input onChange={(event) => setAdviceName(event.target.value)} type="text" placeholder="Nombre" name="name" id="name" />
                                </div>
                                <div className="input-group">
                                    <label>Teléfono de contacto</label>
                                    <input onChange={(event) => setAdviceTel(event.target.value)} type="text" placeholder="Teléfono de contacto" name="phone" id="phone" />
                                </div>
                            </div>
                            <div className="input-group">
                                <label>Mensaje</label>
                                <textarea  onChange={(event) => setAdviceMessage(event.target.value)} placeholder="Déjanos un mensaje" name="mensaje" id="mensaje" rows={5} />
                            </div>
                            <div className="container-button-submit">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </Grid>
                </Grid.Container>
            </Container>
            <Footer />
        </>
    );
};

export default Cotiza;
