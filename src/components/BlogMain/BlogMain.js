import Image from "next/image";
import Link from "next/link";
import styles from "./BlogMain.module.scss";

const BlogMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.hero}>BLOGS</h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Link href='/blogs'>
              <Image
                src='/images/blog-banner.png'
                width={1200}
                height={900}
                alt='blog'
              />
            </Link>
          </div>
          <div className={styles.detail}>
            <Link href='/blogs'>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dignissimos.
              </h1>
            </Link>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ad cum! Nulla cumque quasi molestias aspernatur. Tenetur nam
              beatae ratione. Ducimus natus cum sunt praesentium facilis dolores
              est? Sint, odit. Quia perspiciatis molestiae rerum. Eaque et quis
              rem dolores excepturi totam! Ducimus debitis fuga porro expedita
              soluta rem modi rerum.
            </p>
            <p className={styles.date}>May 18 2023</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Link href='/blogs'>
              <Image
                src='/images/blog-banner.png'
                width={1200}
                height={900}
                alt='blog'
              />
            </Link>
          </div>
          <div className={styles.detail}>
            <Link href='/blogs'>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dignissimos.
              </h1>
            </Link>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ad cum! Nulla cumque quasi molestias aspernatur. Tenetur nam
              beatae ratione. Ducimus natus cum sunt praesentium facilis dolores
              est? Sint, odit. Quia perspiciatis molestiae rerum. Eaque et quis
              rem dolores excepturi totam! Ducimus debitis fuga porro expedita
              soluta rem modi rerum.
            </p>
            <p className={styles.date}>May 18 2023</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Link href='/blogs'>
              <Image
                src='/images/blog-banner.png'
                width={1200}
                height={900}
                alt='blog'
              />
            </Link>
          </div>
          <div className={styles.detail}>
            <Link href='/blogs'>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dignissimos.
              </h1>
            </Link>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ad cum! Nulla cumque quasi molestias aspernatur. Tenetur nam
              beatae ratione. Ducimus natus cum sunt praesentium facilis dolores
              est? Sint, odit. Quia perspiciatis molestiae rerum. Eaque et quis
              rem dolores excepturi totam! Ducimus debitis fuga porro expedita
              soluta rem modi rerum.
            </p>
            <p className={styles.date}>May 18 2023</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Link href='/blogs'>
              <Image
                src='/images/blog-banner.png'
                width={1200}
                height={900}
                alt='blog'
              />
            </Link>
          </div>
          <div className={styles.detail}>
            <Link href='/blogs'>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dignissimos.
              </h1>
            </Link>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ad cum! Nulla cumque quasi molestias aspernatur. Tenetur nam
              beatae ratione. Ducimus natus cum sunt praesentium facilis dolores
              est? Sint, odit. Quia perspiciatis molestiae rerum. Eaque et quis
              rem dolores excepturi totam! Ducimus debitis fuga porro expedita
              soluta rem modi rerum.
            </p>
            <p className={styles.date}>May 18 2023</p>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.img}>
            <Link href='/blogs'>
              <Image
                src='/images/blog-banner.png'
                width={1200}
                height={900}
                alt='blog'
              />
            </Link>
          </div>
          <div className={styles.detail}>
            <Link href='/blogs'>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dignissimos.
              </h1>
            </Link>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ad cum! Nulla cumque quasi molestias aspernatur. Tenetur nam
              beatae ratione. Ducimus natus cum sunt praesentium facilis dolores
              est? Sint, odit. Quia perspiciatis molestiae rerum. Eaque et quis
              rem dolores excepturi totam! Ducimus debitis fuga porro expedita
              soluta rem modi rerum.
            </p>
            <p className={styles.date}>May 18 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
