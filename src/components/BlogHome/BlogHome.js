import Image from "next/image";
import Link from "next/link";
import styles from "./BlogHome.module.scss";
import { motion } from "framer-motion";

const animateService = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const BlogHome = () => {
  return (
    <motion.div
      className={styles.container}
      variants={animateService}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.header}>
        <h1 className={styles["page-title"]}>Blogs</h1>
        <Link href='/'>View All</Link>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.blog}>
          <Link href='/blogs/asd'>
            <Image
              alt='blog-banner'
              src='/images/blog-banner.png'
              width={1200}
              height={900}
            />
          </Link>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>
          <p className={styles.date}>August 1, 2022</p>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            optio consequuntur. Reiciendis iste laudantium quo consequatur. Qui
            tempora modi debitis eum, necessitatibus non aspernatur perferendis?
            Ad libero vel ducimus quisquam unde enim obcaecati deleniti sint?
            Magnam velit vel provident. Aliquam?
          </p>
        </div>
        <div className={styles.blog}>
          <Link href='/blogs/asd'>
            <Image
              alt='blog-banner'
              src='/images/blog-banner.png'
              width={1200}
              height={900}
            />
          </Link>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>
          <p className={styles.date}>August 1, 2022</p>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            optio consequuntur. Reiciendis iste laudantium quo consequatur. Qui
            tempora modi debitis eum, necessitatibus non aspernatur perferendis?
            Ad libero vel ducimus quisquam unde enim obcaecati deleniti sint?
            Magnam velit vel provident. Aliquam?
          </p>
        </div>
        <div className={styles.blog}>
          <Link href='/blogs/asd'>
            <Image
              alt='blog-banner'
              src='/images/blog-banner.png'
              width={1200}
              height={900}
            />
          </Link>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>
          <p className={styles.date}>August 1, 2022</p>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            optio consequuntur. Reiciendis iste laudantium quo consequatur. Qui
            tempora modi debitis eum, necessitatibus non aspernatur perferendis?
            Ad libero vel ducimus quisquam unde enim obcaecati deleniti sint?
            Magnam velit vel provident. Aliquam?
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHome;
