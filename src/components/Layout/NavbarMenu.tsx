import { Navbar, Image, Link } from "@nextui-org/react";
import NextLink from "next/link";

const NavbarMenu = () => {
  const collapseItems = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Sobre nosotros",
      href: "/sobre-nosotros",
    },
    {
      title: "Servicios",
      href: "/servicios",
    },
    {
      title: "¿Por qué contratarnos?",
      href: "/por-que-contratarnos",
    },
    {
      title: "Cotiza",
      href: "/cotiza",
    },
    {
      title: "Trabaja con nosotros",
      href: "/trabaja-con-nosotros",
    },
  ];
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <a href="#">
          <Image
            width={120}
            height={80}
            src="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FChipahua.png?alt=media&token=30ec30d0-f4e4-414f-b446-f0de45baa4fb"
            alt="Logo Chipahua"
            objectFit="contain"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="warning"
        hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link href="/">Inicio</Navbar.Link>
        <Navbar.Link href="/sobre-nosotros">Sobre nosotros</Navbar.Link>
        <Navbar.Link href="/servicios">Servicios</Navbar.Link>
        <Navbar.Link href="/por-que-contratarnos">¿Por qué contratarnos?</Navbar.Link>
        <Navbar.Link href="/cotiza">Cotiza</Navbar.Link>
        <Navbar.Link href="/trabaja-con-nosotros">Trabaja con nosotros</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      ></Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={index}
            activeColor="warning"
            css={{
              fontSize: "1.3rem",
            }}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
