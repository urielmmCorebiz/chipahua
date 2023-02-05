import { Container, Text, Grid, Image } from "@nextui-org/react";
import CardGalery from "../Card/Card";
import { infoCards, infoCardServices } from "../../../db/db.js";
import CardServices from "../CardServices/CardServices";

const Main = () => {
  return (
    <>
      <Container xl={true} lg={true}>
        <Grid.Container
          id="inicio"
          css={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            css={{
              width: "100%",
              "@md": {
                width: "80% !important",
              },
            }}
          >
            <Text
              h1
              size="$4xl"
              css={{
                textGradient: "45deg,  #db7439  20%, #f59a4b 50%",
                textAlign: "center",
                position: "sticky",
                zINdex: 1,
                "@xs": {
                  fontSize: "45px",
                },
                "@sm": {
                  fontSize: "55px",
                },
                "@md": {
                  fontSize: "80px",
                },
              }}
              weight="bold"
            >
              Capacitados y comprometidos con una limpieza de calidad.
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center">
          <Grid>
            <img
              className="chipahua-image-service"
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FCleaner%20Illustrator.svg?alt=media&token=df1a3579-ac07-4275-ade0-a531a74fe840"
              alt="Chipahua"
            />
          </Grid>
        </Grid.Container>
        <Grid.Container
          className="sobre-nosotros"
          id="sobre-nosotros"
          justify="center"
        >
          <Text h2 size={"$4xl"}>
            ¿Quiénes somos?
          </Text>
        </Grid.Container>
        <Grid.Container alignItems="center" justify="center">
          <Grid md={6} xs={12}>
            <Text
              size={18}
              weight="normal"
              css={{
                textAlign: "justify",
                "@xs": {
                  fontSize: "18px",
                },
                "@sm": {
                  fontSize: "22px",
                },
                "@md": {
                  fontSize: "22px",
                },
              }}
            >
              Chipahua es una empresa mexicana con amplia experiencia en el ramo
              del saneamiento ambienta, proporcionando servicios de limpieza en
              diversos sectores tales:
              <br />
              <br />
              Comercial, industiral, corporativo y residencial, funcionando bajo
              las normas más estrictas de calidad, contando con un equipo de
              trabajo profesional, enfocados a la vocación de servicio.
              <br />
              <br />
              Continuamente capacitándonos para superar día a día las
              expectativas de nuestros clientes. Sin olvidar lo más importante:
              la conservación del medio ambiente.
            </Text>
          </Grid>
          <Grid md={6} xs={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2F1.png?alt=media&token=a34ec3e3-fbd0-426a-b62f-e999289a077d"
              alt="Sobre Nosotros"
            />
          </Grid>
        </Grid.Container>
        <Grid.Container id="servicios" className="servicios" justify="center">
          <Text h2>Nuestros servicios</Text>
        </Grid.Container>
        <Grid.Container gap={2}>
          {infoCardServices.map((card, index) => {
            return (
              <Grid sm={4} xs={12} md={4} key={index}>
                <CardServices
                  img={card.img}
                  title={card.title}
                  description={card.description}
                />
              </Grid>
            );
          })}
        </Grid.Container>
        <Grid.Container justify="center">
          <Text
            blockquote
            className="value-text"
            size={"$2xl"}
            css={{ textAlign: "center" }}
          >
            Somos tu mejor opción, tu marca y tu estrategia.
          </Text>
        </Grid.Container>
        <Grid.Container gap={2}>
          {infoCards.map((card, index) => {
            return (
              <Grid md={4} xs={12} key={index}>
                <CardGalery
                  title={card.title}
                  img={card.img}
                  description={card.description}
                />
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>
    </>
  );
};

export default Main;
