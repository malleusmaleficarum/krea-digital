import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Hamburger/Hamburger";
import Nav from "@/components/Nav/Nav";
import ServicesMain from "@/components/ServicesMain/ServicesMain";
import Head from "next/head";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services | Krea Digital</title>
      </Head>
      <Hamburger />
      <Nav />
      <ServicesMain />
      <Footer />
    </>
  );
};

export default ServicesPage;
