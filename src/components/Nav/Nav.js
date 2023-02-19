import Link from "next/link";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Digital Marketing Agency</div>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Link href='/'>Logo Disini </Link>
        </div>{" "}
        <span></span>
      </div>
    </div>
  );
};

export default Nav;
