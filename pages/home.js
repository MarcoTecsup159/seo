import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiendita de Don Marco | Productos de Calidad</title>
        <meta name="description" content="Bienvenido a Tiendita de Don Marco. Descubre productos de alta calidad al mejor precio." />

        {/* Open Graph */}
        <meta property="og:title" content="Tienda de Don Marco | Productos de Calidad" />
        <meta property="og:description" content="Bienvenido a Tienda de Don Marco. Descubre productos de alta calidad al mejor precio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tiendadedonmarco.com/blog" />
        <meta property="og:image" content="https://www.tiendadedonmarco.com/og-blog.jpg" />
        <meta name="google-site-verification" content="POr69ZX42X9JitHpNjlKIGmJapGJmXoIKAWkzRp7Puc" />
      </Head>
      <main>
        <h1>Bienvenido a Tiendita de Don Marco</h1>
      </main>
    </>
  );
}
