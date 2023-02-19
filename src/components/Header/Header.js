import Image from "next/image";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const leftDiv = {
    hidden: { opacity: 0.5 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const item1 = {
    hidden: { y: "100%" },
    show: { y: 0 },
  };

  const leftRight = {
    left: { x: -15 },
    right: {
      x: 15,
      transition: {
        duration: 2,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  const upDown = {
    up: { y: -15 },
    down: {
      y: 15,
      transition: {
        duration: 2,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <motion.div
          className={styles.leftside}
          variants={leftDiv}
          initial='hidden'
          animate='show'
        >
          <div className={styles.hide}>
            <motion.h1 variants={item1}>Slogannya</motion.h1>
          </div>
          <div className={styles.hide}>
            <motion.h1 variants={item1}>Masukin Di Sini</motion.h1>
          </div>
        </motion.div>
        <div className={styles.rightside}>
          <motion.div
            className={styles.img1}
            variants={leftRight}
            initial='left'
            animate='right'
          >
            <Image
              alt='image1'
              src='/images/img-l.png'
              width={450}
              height={420}
              className={styles.img1}
            />
          </motion.div>
          <motion.div
            className={styles.img2}
            variants={leftRight}
            initial='left'
            animate='right'
          >
            <Image
              alt='image2'
              src='/images/img-l2.png'
              width={450}
              height={420}
              className={styles.img2}
            />
          </motion.div>
          <motion.div
            className={styles.img3}
            variants={leftRight}
            initial='left'
            animate='right'
          >
            <Image
              alt='image3'
              src='/images/img-l3.png'
              width={450}
              height={420}
              className={styles.img3}
            />
          </motion.div>
          <motion.div
            className={styles.img4}
            variants={upDown}
            initial='up'
            animate='down'
          >
            <Image
              alt='image4'
              src='/images/img-u.png'
              width={450}
              height={420}
              className={styles.img4}
            />
          </motion.div>
          <motion.div
            className={styles.img5}
            variants={upDown}
            initial='up'
            animate='down'
          >
            <Image
              alt='image5'
              src='/images/img-u2.png'
              width={450}
              height={420}
              className={styles.img5}
            />
          </motion.div>
          <motion.div
            className={styles.img6}
            variants={upDown}
            initial='up'
            animate='down'
          >
            <Image
              alt='image6'
              src='/images/img-u3.png'
              width={450}
              height={420}
              className={styles.img6}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
