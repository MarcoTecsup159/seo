import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="POr69ZX42X9JitHpNjlKIGmJapGJmXoIKAWkzRp7Puc" />
      </Head>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}

