import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.head}>
        <div className="eyebrow">Gallery</div>
        <div className="rule" />
        <h2 className={styles.heading}>Last Saturday, in frames.</h2>
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.span2x2} delay={0}>
          <ImagePlaceholder label="Full room, mid-song" radius={18} />
        </Reveal>
        <Reveal delay={70}>
          <ImagePlaceholder label="Mic in hand" radius={18} />
        </Reveal>
        <Reveal className={styles.rowSpan2} delay={140}>
          <ImagePlaceholder label="Bartender pouring" radius={18} />
        </Reveal>
        <Reveal delay={210}>
          <ImagePlaceholder label="Neon sign detail" radius={18} />
        </Reveal>
        <Reveal className={styles.colSpan2} delay={280}>
          <ImagePlaceholder label="Private room, full table" radius={18} />
        </Reveal>
        <Reveal delay={350}>
          <ImagePlaceholder label="The band, Thursday" radius={18} />
        </Reveal>
        <Reveal delay={420}>
          <ImagePlaceholder label="Last call" radius={18} />
        </Reveal>
      </div>

      <div className={styles.gridMobile}>
        <Reveal className={styles.span2x2} delay={0}>
          <ImagePlaceholder label="Full room, mid-song" radius={14} />
        </Reveal>
        <Reveal delay={70}>
          <ImagePlaceholder label="Mic in hand" radius={14} />
        </Reveal>
        <Reveal delay={140}>
          <ImagePlaceholder label="Neon detail" radius={14} />
        </Reveal>
        <Reveal className={styles.colSpan2} delay={210}>
          <ImagePlaceholder label="The band, Thursday" radius={14} />
        </Reveal>
      </div>
    </section>
  );
}
