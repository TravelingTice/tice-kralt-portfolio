import Head from "next/head";

const Index = () => {
  const head = () => (
    <Head>
      <title>Tice Kralt Full-stack Web Developer Portfolio</title>
    </Head>
  )
  return (
    <>
      {head()}
      <p>Hi</p>
    </>
  )
}

export default Index;
