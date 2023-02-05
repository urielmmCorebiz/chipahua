import { useState } from "react";
import { Container, Text, Grid, Textarea } from "@nextui-org/react";
import emailjs from "emailjs-com";

const Contact = () => {
  // useState
  const [adviceName, setAdviceName] = useState("");
  const [adviceEmail, setAdviceEmail] = useState("");
  const [adviceSubject, setAdviceSubject] = useState("");
  const [adviceMessage, setAdviceMessage] = useState("");

  const sendAdvice = (e: any) => {
    e.preventDefault();
    if (!adviceSubject.trim() || !adviceMessage.trim()) {
    } else {
      emailjs
        .sendForm(
          "administraciónCEHF",
          `urieel.mmgmail.com`,
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
      setAdviceSubject("");
      setAdviceMessage("");
    }
  };
  return (
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
      <Grid.Container justify="center" alignItems="center">
        <Grid xs={12} sm={12} justify="center">
          <form onSubmit={sendAdvice} className="form-group">
            <div className="container-inputs">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="input-group">
                <label>Teléfono de contacto</label>
                <input type="text" placeholder="Teléfono de contacto" />
              </div>
            </div>
            <div className="input-group">
              <label>Mensaje</label>
              <textarea placeholder="Déjanos un mensaje" rows={5} />
            </div>
            <div className="container-button-submit">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Contact;
