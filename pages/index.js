import Head from "next/head";
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';

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
      <Banner />
    </>
  )
}

export default Index;
