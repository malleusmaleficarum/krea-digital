import BlogMain from "@/components/BlogMain/BlogMain";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Hamburger/Hamburger";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog | Krea Digital</title>
      </Head>
      <Hamburger />
      <Nav />
      <BlogMain />
      <Footer />
    </>
  );
};

export default Blogs;
