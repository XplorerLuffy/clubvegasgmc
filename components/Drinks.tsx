import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import styles from "./Drinks.module.css";

export default function Drinks() {
  return (
    <section id="drinks" className={styles.section}>
      <Reveal className={styles.head} as="div">
        <div className={styles.headCopy}>
          <div className="eyebrow">The bar</div>
          <div className="rule" />
          <h2 className={styles.heading}>Pours worth staying for.</h2>
        </div>
        <button type="button" className={`btn btn-secondary ${styles.menuBtn}`}>
          See the Full Menu
        </button>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.card} delay={0}>
          <div className={styles.photo}>
            <ImagePlaceholder label="Amber cocktail, tight crop" />
          </div>
          <div className={styles.body}>
            <span className="eyebrow">Signature cocktails</span>
            <span className={styles.name}>The Neon Sour</span>
            <span className={styles.desc}>Local honey, lime, egg white, a long bitter finish.</span>
            <div className={styles.divider} />
            <span className={styles.price}>from Nu 450</span>
          </div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.cardBeer}`} delay={90}>
          <div className={styles.photo}>
            <ImagePlaceholder label="Beer and glassware" />
          </div>
          <div className={styles.body}>
            <span className="eyebrow">Beer &amp; wine</span>
            <span className={styles.name}>Cold, and kept that way</span>
            <span className={styles.desc}>Druk on tap, imported bottles, six wines by the glass.</span>
            <div className={styles.divider} />
            <span className={styles.price}>from Nu 200</span>
          </div>
        </Reveal>

        <Reveal className={`${styles.card} ${styles.cardFeatured}`} delay={180}>
          <div className={styles.photo}>
            <ImagePlaceholder label="Bottle service, sparklers off" />
          </div>
          <div className={styles.body}>
            <span className="eyebrow">Bottle service</span>
            <span className={styles.name}>A table of ten</span>
            <span className={styles.desc}>
              Your bottle, mixers, ice and a host who watches the glasses.
            </span>
            <div className={styles.divider} />
            <span className={styles.price}>from Nu 6,500</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
