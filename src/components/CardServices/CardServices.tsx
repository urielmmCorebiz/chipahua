import { FC } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

interface Props {
  title: string;
  description: string;
  img: string;
}
const CardServices: FC<Props> = ({ title, description, img }) => {
  return (
    <Card css={{ w: "100%", h: "300px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Chipahua
          </Text>
          <Text h3 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={img}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row css={{ display: "flex", alignItems: "center" }}>
          <Col css={{ width: "200% !important" }}>
            <Text color="#000" size={13} weight={"bold"}>
              {description}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="warning">
                <a
                  style={{ color: "#f59a4b" }}
                  href="https://api.whatsapp.com/send?phone=5231139560&text=Hola, Me gustaría recibir información"
                  target="_blank"
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={11}
                    weight="bold"
                    transform="uppercase"
                  >
                    Contáctanos
                  </Text>
                </a>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardServices;
