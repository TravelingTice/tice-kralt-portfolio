import Head from "next/head";
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Projects from "../components/projects/Projects";
import About from '../components/about/About';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

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
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Index;
