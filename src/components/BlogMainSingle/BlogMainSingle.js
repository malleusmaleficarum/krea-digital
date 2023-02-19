import Image from "next/image";
import styles from "./BlogMainSingle.module.scss";

const BlogMainSingle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, possimus!
        </h1>
        <div className={styles.img}>
          <Image
            src='/images/blog-banner.png'
            width={1200}
            height={900}
            alt='blog-banner'
          />
        </div>
        <p className={styles.date}>Date Posted: August 5 2023</p>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          sapiente corporis impedit illum recusandae tenetur asperiores
          aspernatur iure harum vero quis doloremque necessitatibus nam. Iusto
          consequatur a voluptatibus ullam ea, accusamus quas qui consequuntur
          nisi ipsum vero architecto, assumenda quia cumque incidunt? Architecto
          magnam deleniti corrupti ab, a vitae beatae numquam qui?
          <br />
          <br />
          Sequi, rem nesciunt, asperiores quos illo assumenda, corporis animi
          earum ducimus eos doloremque iure molestiae inventore dolorem.
          Doloremque fugiat harum officiis, quaerat obcaecati nemo earum quos
          fuga consequuntur dicta adipisci consequatur? Alias, necessitatibus!
          Enim dignissimos iusto veniam corporis hic illo ratione tenetur
          magnam, voluptate expedita aut iure explicabo error maiores numquam
          ipsam obcaecati blanditiis laboriosam autem atque?
          <br />
          <br />
          Dolore, dignissimos tenetur? Esse perspiciatis ullam facere obcaecati
          ipsa fugiat commodi laudantium amet assumenda porro. Aliquid quod
          quaerat in, sint culpa autem error delectus necessitatibus esse magni
          id dolor odit vel quia, quis similique dolorum tenetur eos cum
          veritatis placeat nam!
        </p>
      </div>
    </div>
  );
};

export default BlogMainSingle;
