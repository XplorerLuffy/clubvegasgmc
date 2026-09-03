import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      {/* Desktop */}
      <div className={styles.section}>
        <div className={styles.collage}>
          <div className={styles.collageMain}>
            <ImagePlaceholder label="The bar at 9pm" radius={18} />
          </div>
          <div>
            <ImagePlaceholder label="Mic on the stand" radius={18} />
          </div>
          <div>
            <ImagePlaceholder label="Private room, lit low" radius={18} />
          </div>
        </div>
        <div className={styles.copy}>
          <div className="eyebrow">Our story</div>
          <div className="rule" />
          <h2 className={styles.heading}>
            A room built for
            <br />
            <em>the second chorus.</em>
          </h2>
          <p className={styles.p}>
            We opened with a borrowed sound system and one house rule — nobody sits through a
            whole evening without singing. The rule stuck. So did the crowd.
          </p>
          <p className={styles.p}>
            Come early for the pours, stay for the room that starts singing along with you.
            Gelephu&rsquo;s night voice, one song at a time.
          </p>
          <blockquote className={styles.quote}>
            <span className={styles.quoteText}>
              Everyone can sing. Some just need the right room.
            </span>
            <span className={styles.quoteAttr}>— The house rule</span>
          </blockquote>
        </div>
      </div>

      {/* Mobile */}
      <div className={styles.sectionMobile}>
        <div className="eyebrow">Our story</div>
        <div className="rule" />
        <h2 className={styles.headingMobile}>
          A room built for <em>the second chorus.</em>
        </h2>
        <p className={styles.pMobile}>
          We opened with a borrowed sound system and one house rule — nobody sits through a whole
          evening without singing. The rule stuck. So did the crowd.
        </p>
        <div className={styles.collageMobile}>
          <div>
            <ImagePlaceholder label="The bar at 9pm" radius={14} />
          </div>
          <div>
            <ImagePlaceholder label="Mic on the stand" radius={14} />
          </div>
        </div>
        <blockquote className={styles.quoteMobile}>
          <span className={styles.quoteTextMobile}>
            Everyone can sing. Some just need the right room.
          </span>
          <span className={styles.quoteAttr}>— The house rule</span>
        </blockquote>
      </div>
    </section>
  );
}
