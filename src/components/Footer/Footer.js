import Link from "next/link";
import styles from "./Footer.module.scss";
import Twitter from "/public/images/twitter-logo.svg";
import Facebook from "/public/images/fb-logo.svg";
import Instagram from "/public/images/instagram-logo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p>Copyright © 2023 KREA Agency</p>
        </div>
        <div className={styles.right}>
          <p>Our Social Media</p>
          <div className={styles.socialmedia}>
            <Link target='_blank' href='https://www.twitter.com'>
              <Twitter />
            </Link>
            <Link target='_blank' href='https://www.facebook.com'>
              <Facebook />
            </Link>
            <Link target='_blank' href='https://www.instagram.com'>
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
