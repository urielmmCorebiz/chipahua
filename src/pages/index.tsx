import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Main from "@/components/Main/Main";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chipahua</title>
        <meta
          name="description"
          content="Bienvenido a nuestra empresa de limpieza, donde brindamos soluciones profesionales y eficientes para mantener su hogar o negocio limpio y organizado."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Limpieza, Empresa de limpieza, Limpieza de condominios, Limpieza profesional, Servicio de limpieza, Limpieza industral, Limpieza de hospitales,      Limpieza  de sector privado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
