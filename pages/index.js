import Head from "next/head";
import Header from '../components/header/Header';

const Index = () => {
  const head = () => (
    <Head>
      <title>Tice Kralt Full-stack Web Developer Portfolio</title>
    </Head>
  )
  return (
    <>
      {head()}
      <Header />
    </>
  )
}

export default Index;
