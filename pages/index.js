import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
    <head>
      <meta name="google-site-verification" content="POr69ZX42X9JitHpNjlKIGmJapGJmXoIKAWkzRp7Puc" />
    </head>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}

