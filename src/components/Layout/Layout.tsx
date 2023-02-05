import React, { FC } from "react";
import WhatsApp from "../WhatsApp/WhatsApp";
import NavbarMenu from "./NavbarMenu";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <NavbarMenu />
      {children}
      <WhatsApp />
    </main>
  );
};

export default Layout;
