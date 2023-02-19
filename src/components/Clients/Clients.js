import Image from "next/image";
import styles from "./Clients.module.scss";

const Clients = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Clients</h1>
      <div className={styles.wrapper}>
        <div className={styles.left} />
        <div className={styles.right} />
        <div className={styles["client-wrapper"]}>
          <Image
            alt='client1'
            src='/images/client1-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client2-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client1-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client2-logo.png'
            width={230}
            height={230}
          />
        </div>
        <div className={styles["client-wrapper"]}>
          <Image
            alt='client1'
            src='/images/client1-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client2-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client1-logo.png'
            width={230}
            height={230}
          />
          <Image
            alt='client1'
            src='/images/client2-logo.png'
            width={230}
            height={230}
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
