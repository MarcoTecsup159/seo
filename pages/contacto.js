import Head from 'next/head';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Tienda de Don Marco</title>
        <meta name="description" content="Ponte en contacto con Tienda de Don Marco para resolver tus dudas o recibir soporte." />

        {/* Open Graph */}
        <meta property="og:title" content="Contacto | Tienda de Don Marco" />
        <meta property="og:description" content="Ponte en contacto con Tienda de Don Marco para resolver tus dudas o recibir soporte." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tiendadedonmarco.com/contacto" />
        <meta property="og:image" content="https://www.tiendadedonmarco.com/og-contacto.jpg" />
      </Head>
      <main>
        <h1>Contacta Don Marco</h1>
      </main>
    </>
  );
}
// This page provides a contact form or information for users to reach out to the business.