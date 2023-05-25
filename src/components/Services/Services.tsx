import { Container, Text, Grid } from "@nextui-org/react";
import CardServices from "../CardServices/CardServices";
import { infoCards, infoCardServices } from "db/db";
import CardGalery from "../Card/Card";


const Services = () => {
  return (
    <Container>
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
  )
}

export default Services