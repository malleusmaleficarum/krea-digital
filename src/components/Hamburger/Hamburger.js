import { useEffect, useState } from "react";
import styles from "./Hamburger.module.scss";
import Menu from "/public/images/menu-icon.svg";
import Close from "/public/images/close-icon.svg";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Close /> : <Menu />}
      </div>
      <div
        className={
          isOpen ? `${styles.modal} ${styles.open}` : `${styles.modal}`
        }
      >
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/blogs'>Blog</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
