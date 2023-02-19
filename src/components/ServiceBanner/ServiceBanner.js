import Image from "next/image";
import styles from "./ServiceBanner.module.scss";
import { motion } from "framer-motion";

const animateParrent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const animateServiceBanner = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const ServiceBanner = () => {
  return (
    <motion.div
      className={styles.container}
      variants={animateParrent}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.h1 variants={animateServiceBanner}>
        Judul servicenya masukin di sini your business is made of
      </motion.h1>
      <motion.p variants={animateServiceBanner}>
        Penjelasan dari servicenya secara general di sini, powerful online
        platforms, and storytelling through marketing campaigns across major
        media channels.
      </motion.p>

      <motion.div className={styles.services} variants={animateServiceBanner}>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Social Media</h2>
          <h3>Management</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Production</h2>
          <h3>House</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Media</h2>
          <h3>Buying / Placement</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Plan and Ads</h2>
          <h3>Placement Optimization</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Key Opinion</h2>
          <h3>Leader Management</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Social Media</h2>
          <h3>Buzzer</h3>
        </div>
        <div className={styles.service}>
          <Image
            alt='service-icon'
            src='/images/service-icon.png'
            width={200}
            height={160}
          />
          <h2>Press</h2>
          <h3>Release</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceBanner;
