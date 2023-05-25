import { Container, Text, Grid } from "@nextui-org/react";

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
        <Grid.Container justify="center" style={{marginTop: "10px"}}>
          <Grid>
            <img
              className="chipahua-image-service"
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FManCleanGifCompress.gif?alt=media&token=2555bfbe-dc55-4993-9e42-2c42e1a8d7a9"
              alt="Chipahua"
            />
          </Grid>
          {/* <Grid>
            <img src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FChipahua.png?alt=media&token=30ec30d0-f4e4-414f-b446-f0de45baa4fb" alt="Logo Chipahua" />
          </Grid> */}
        </Grid.Container>
      </Container>
    </>
  );
};

export default Main;
