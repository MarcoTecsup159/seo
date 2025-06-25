import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Tienda de Don Marco | Novedades y Consejos</title>
        <meta name="description" content="Lee las últimas novedades, consejos y tendencias en el blog de Tienda de Don Marco." />

        {/* Open Graph */}
        <meta property="og:title" content="Blog de Tienda de Don Marco | Novedades y Consejos" />
        <meta property="og:description" content="Lee las últimas novedades, consejos y tendencias en el blog de Tienda de Don Marco." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.tiendadedonmarco.com/blog" />
        <meta property="og:image" content="https://www.tiendadedonmarco.com/og-blog.jpg" />
      </Head>
      <main>
        <h1>Blog de Marco</h1>
      </main>
    </>
  );
}
