import React from "react";
import { Container, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container fluid css={{ padding: "0px " }}>
      <footer className="footer-section">
        <Text weight="bold">Nuestros medios de contacto</Text>
        <div className="container-social">
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2Ftelefono-chapagua.png?alt=media&token=848d71d5-f259-4183-9028-d9f29d3f26db"
              alt="Teléfono de contacto Chapahua"
            />
          </a>
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2Ffacebook-chapahua.png?alt=media&token=fd3c155d-77bd-48ba-bfec-105b3b839c3bb"
              alt="Facebook Chapahua"
            />
          </a>
          <a href="">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2Fcorreo-chapahuas.png?alt=media&token=349c3d25-a7d5-4484-a9a9-5a3811c2b7fb"
              alt="Email Chapahua"
            />
          </a>
        </div>
        <div className="container-logo-footer">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FChipahua.png?alt=media&token=30ec30d0-f4e4-414f-b446-f0de45baa4fb"
            alt="Logo Chipahua"
          />
        </div>
        <div>
          <Text blockquote css={{ fontSize: "12px" }}>
            Designed and Developed by UrielDev ❤️
          </Text>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
