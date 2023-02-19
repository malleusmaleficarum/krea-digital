import BlogMainSingle from "@/components/BlogMainSingle/BlogMainSingle";
import Footer from "@/components/Footer/Footer";
import Hamburger from "@/components/Hamburger/Hamburger";
import Nav from "@/components/Nav/Nav";

const SingleBlog = () => {
  return (
    <>
      <Hamburger />
      <Nav />
      <BlogMainSingle />
      <Footer />
    </>
  );
};

export default SingleBlog;
