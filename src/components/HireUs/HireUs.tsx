import { Container, Text, Grid, Image } from "@nextui-org/react";

const HireUs = () => {
  return (
    <Container id="por-que-contratarnos">
        <Grid.Container md={12} xs={12} alignItems="center" justify="center">
            <Text style={{textAlign: "center"}} h2 size={"$4xl"}>¿Por qué contratarnos?</Text>
        </Grid.Container>
        <Grid.Container alignItems="center" justify="center">
            <Grid md={6} xs={12}>
                <Text size={18}
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
              }}>
                En CHIPAHUA nos caracterizamos por la calidad del servicio, el compromiso de superar las expectativas de nuestros clientes. Contamos con profesionales en limpieza industrial y corporativa con el equipo adecuado para realizar actividades de menor o mayor complejidad, garantizando a nuestros clientes el mantenimiento de sus instalaciones y servicios de limpieza integral profesional de acuerdo con las necesidades del servicio. Somos atendidos diariamente por personal capacitado que trabaja en un horario fijo de turnos de mañana, tarde o noche que incluye artículos de limpieza.
                </Text>
            </Grid>
        </Grid.Container>
    </Container>
  )
}

export default HireUs