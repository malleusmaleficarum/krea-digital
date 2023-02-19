import Image from "next/image";
import styles from "./Service.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const animateService = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const upDown = {
  initial: { y: -15 },
  animate: {
    y: 15,
    transition: {
      duration: 2,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const Service = () => {
  return (
    <div className={styles.container}>
      {/* LEFT */}
      <motion.div
        className={styles.wrapper}
        variants={animateService}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          className={styles.img}
          variants={upDown}
          initial='initial'
          animate='animate'
        >
          <Image
            alt='banner'
            src='/images/service-banner.png'
            width={1043}
            height={1154}
          />
        </motion.div>

        <h1 className={styles.rotate}>Social Media Management</h1>
        <div className={styles["detail-right"]}>
          <h2>Define</h2>
          <h3>WITH US AND BREAK NEW GROUND</h3>
          <p>The Power Of Content And Why Your Business Needs It</p>
          <Link href='/services' className={styles.button}>
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className={styles.wrapper}
        variants={animateService}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
      >
        <div className={styles["detail-left"]}>
          <h2>Define</h2>
          <h3>WITH US AND BREAK NEW GROUND</h3>
          <p>The Power Of Content And Why Your Business Needs It</p>
          <Link href='/services' className={styles.button}>
            Learn More
          </Link>
        </div>
        <h1 className={styles.rotate}>Production House</h1>
        <motion.div
          className={styles.img}
          variants={upDown}
          initial='initial'
          animate='animate'
        >
          <Image
            alt='banner'
            src='/images/service-banner.png'
            width={1043}
            height={1154}
          />
        </motion.div>
      </motion.div>

      {/* LEFT */}
      <motion.div
        className={styles.wrapper}
        variants={animateService}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.div
          className={styles.img}
          variants={upDown}
          initial='initial'
          animate='animate'
        >
          <Image
            alt='banner'
            src='/images/service-banner.png'
            width={1043}
            height={1154}
          />
        </motion.div>

        <h1 className={styles.rotate}>Media Buying / Placement</h1>
        <div className={styles["detail-right"]}>
          <h2>Define</h2>
          <h3>WITH US AND BREAK NEW GROUND</h3>
          <p>The Power Of Content And Why Your Business Needs It</p>
          <Link href='/services' className={styles.button}>
            Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
