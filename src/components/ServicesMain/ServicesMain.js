import Image from "next/image";
import styles from "./ServicesMain.module.scss";

const ServicesMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.hero}>SERVICES</h1>
      </div>

      <div className={styles.intro}>
        <div className={styles["intro-title"]}>
          The Future of Branding is Marketing with people not at Them
        </div>
        <div className={styles["intro-body"]}>
          We&apos;re designing, and delivering the message that a brand wants to
          convey to the target audience creatively so that it can be easily
          accepted by the market.
        </div>
      </div>

      {/* Service */}
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Social Media Management</h1>
          <p className={styles.body}>
            We are providing content marketing for social media from ideation,
            content creation, post planning, conversation standard SLA and also
            monthly, and annual reporting
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner2.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Production House</h1>
          <p className={styles.body}>
            Due to changing nature of how audience consume content from visual
            to audio visual, we also produce some of video content that can
            easily approached our audience in social media, Youtube or any
            commercial channel
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Media Buying / Placement</h1>
          <p className={styles.body}>
            National Television: All Channel Radio: All Radio Station Indonesia
            Coverage Podcast: Podkesmas Asia Network
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Plan and Ads Placement Optimization</h1>
          <p className={styles.body}>
            Right Content for the Right Audience We helps brand ﬁnd out speciﬁc
            audience based on audience media journey and business funnel journey
            to make sure we are delivering relevant content
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Key Opinion Leader Management</h1>
          <p className={styles.body}>
            From Mega to Nano We are helping brand to connect to niche interest
            audience by partnering with social media inﬂuencer
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Social Media Buzzer</h1>
          <p className={styles.body}>
            Make it Hype, exposure is really important With our social media
            buzzer services, you can create hype of your product or services in
            very short period to get ﬁrst attention from wider audience then we
            prolong it with a campaign
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.img}>
            <Image
              src='/images/services-banner1.png'
              width={930}
              height={530}
              alt='banner'
            />
          </div>
          <h1 className={styles.title}>Press Release</h1>
          <p className={styles.body}>
            Deliver with clear information Our press release services help on
            guiding brands to mass spread information that related with a
            product or services and build trust
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
