import ServiceBanner from "@/components/ServiceBanner/ServiceBanner";
import Header from "@/components/Header/Header";
import Service from "@/components/Services/Service";
import Footer from "@/components/Footer/Footer";
import Clients from "@/components/Clients/Clients";
import BlogHome from "@/components/BlogHome/BlogHome";
import Hamburger from "@/components/Hamburger/Hamburger";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Krea Digital</title>
      </Head>
      <Hamburger />
      <Nav />
      <Header />
      <ServiceBanner />
      <Service />
      <BlogHome />
      <Clients />
      <Footer />
    </>
  );
}
