import { FC } from "react";
import { Card, Col, Text } from "@nextui-org/react";

interface Props {
  title: string;
  description: string;
  img: string;
}
const CardGalery: FC<Props> = ({ title, description, img }) => (
  <Card css={{ w: "100%", h: "320px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {title}
        </Text>
        <Text h4 color="white">
          {description}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={img}
      objectFit="cover"
      width="100%"
      height={320}
      alt="Card image background"
    />
  </Card>
);

export default CardGalery;
