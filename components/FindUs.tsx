import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./FindUs.module.css";

export default function FindUs() {
  return (
    <section id="find-us">
      {/* Desktop */}
      <div className={styles.section}>
        <div className={styles.copy}>
          <div className="eyebrow">Find us</div>
          <div className="rule" />
          <h2 className={styles.heading}>
            Riverside Block,
            <br />
            <em>Gelephu.</em>
          </h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Address</span>
              <span className={styles.infoValue}>
                Riverside Block, Gelephu
                <br />
                Mindfulness City, Sarpang
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Hours</span>
              <span className={styles.infoValue}>
                Tue–Thu · 5pm – 1am
                <br />
                Fri–Sat · 5pm – 2am
                <br />
                Sun · 5pm – 12am · Mon closed
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Reach us</span>
              <span className={styles.infoValue}>
                +975 17 00 00 00
                <br />
                hello@vegaslounge.bt
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Age policy</span>
              <span className={styles.infoValue}>
                All ages until 9pm.
                <br />
                18+ with photo ID after.
              </span>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <button type="button" className="btn btn-primary">
              Get Directions
            </button>
            <button type="button" className="btn btn-secondary">
              Call the Bar
            </button>
          </div>
        </div>
        <div className={styles.map}>
          <ImagePlaceholder label="Dark-styled map of Gelephu Mindfulness City" />
          <img className={styles.mapPin} src="/assets/vegas-logo.jpeg" alt="" />
        </div>
      </div>

      {/* Mobile */}
      <div className={styles.sectionMobile}>
        <div className="eyebrow">Find us</div>
        <div className="rule" />
        <h2 className={styles.heading}>
          Riverside Block, <em>Gelephu.</em>
        </h2>
        <div className={styles.mapMobile}>
          <ImagePlaceholder label="Dark-styled map" />
          <img className={styles.mapPinMobile} src="/assets/vegas-logo.jpeg" alt="" />
        </div>
        <div className={styles.infoListMobile}>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Address</span>
            <span className={styles.infoValueMobile}>
              Riverside Block, Gelephu Mindfulness City, Sarpang
            </span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Hours</span>
            <span className={styles.infoValueMobile}>
              Tue–Thu · 5pm – 1am
              <br />
              Fri–Sat · 5pm – 2am
              <br />
              Sun · 5pm – 12am · Monday closed
            </span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Age policy</span>
            <span className={styles.infoValueMobile}>All ages until 9pm. 18+ with photo ID after.</span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Reach us</span>
            <span className={styles.infoValueMobile}>+975 17 00 00 00 · hello@vegaslounge.bt</span>
          </div>
        </div>
        <div className={styles.ctaColMobile}>
          <button type="button" className="btn btn-primary">
            Get Directions
          </button>
          <button type="button" className="btn btn-secondary">
            Call the Bar
          </button>
        </div>
      </div>
    </section>
  );
}
