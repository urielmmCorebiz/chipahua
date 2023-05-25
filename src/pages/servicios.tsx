import CardGalery from "@/components/Card/Card";
import CardServices from "@/components/CardServices/CardServices";
import Footer from "@/components/Footer/Footer";
import NavbarMenu from "@/components/Layout/NavbarMenu";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import { Container, Text, Grid } from "@nextui-org/react";
import { infoCards, infoCardServices } from "db/db";

const Services = () => {
    return (
        <>
            <NavbarMenu />
            <WhatsApp />
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
            <Footer />
        </>
    )
}

export default Services