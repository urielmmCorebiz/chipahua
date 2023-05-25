import Footer from '@/components/Footer/Footer'
import NavbarMenu from '@/components/Layout/NavbarMenu'
import WhatsApp from '@/components/WhatsApp/WhatsApp'
import { Container, Grid, Text } from '@nextui-org/react'

const AboutUs = () => {
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
      </Container>
      <Footer />
    </>
  )
}

export default AboutUs