import BlogMainSingle from "@/components/BlogMainSingle/BlogMainSingle";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Hamburger/Hamburger";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";

const SingleBlog = () => {
  return (
    <>
      <Head>
        <title>Blog | Krea Digital</title>
      </Head>
      <Hamburger />
      <Nav />
      <BlogMainSingle />
      <Footer />
    </>
  );
};

export default SingleBlog;
