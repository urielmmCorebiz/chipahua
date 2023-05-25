import Footer from "@/components/Footer/Footer";
import NavbarMenu from "@/components/Layout/NavbarMenu";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import { Container, Text, Grid, Image, Navbar } from "@nextui-org/react";

const HireUs = () => {
    return (
        <>
             <NavbarMenu />
      <WhatsApp />
      <Container>
        <Grid.Container
          className="sobre-nosotros"
          id="sobre-nosotros"
          justify="center"
        >
          <Text h2 size={"$4xl"}>
            ¿Por qué contratarnos?
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
              En CHIPAHUA nos caracterizamos por la calidad del servicio, el compromiso de superar las expectativas de nuestros clientes. Contamos con profesionales en limpieza industrial y corporativa con el equipo adecuado para realizar actividades de menor o mayor complejidad, garantizando a nuestros clientes el mantenimiento de sus instalaciones y servicios de limpieza integral profesional de acuerdo con las necesidades del servicio. Somos atendidos diariamente por personal capacitado que trabaja en un horario fijo de turnos de mañana, tarde o noche que incluye artículos de limpieza..
            </Text>
          </Grid>
          <Grid md={6} xs={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FCleaner%20Illustrator.svg?alt=media&token=df1a3579-ac07-4275-ade0-a531a74fe840"
              alt="Sobre Nosotros"
            />
          </Grid>
        </Grid.Container>
      </Container>
      <Footer />
        </>
    )
}

export default HireUs