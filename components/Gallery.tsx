import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div className="eyebrow">Gallery</div>
        <div className="rule" />
        <h2 className={styles.heading}>Last Saturday, in frames.</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.span2x2}>
          <ImagePlaceholder label="Full room, mid-song" radius={18} />
        </div>
        <div>
          <ImagePlaceholder label="Mic in hand" radius={18} />
        </div>
        <div className={styles.rowSpan2}>
          <ImagePlaceholder label="Bartender pouring" radius={18} />
        </div>
        <div>
          <ImagePlaceholder label="Neon sign detail" radius={18} />
        </div>
        <div className={styles.colSpan2}>
          <ImagePlaceholder label="Private room, full table" radius={18} />
        </div>
        <div>
          <ImagePlaceholder label="The band, Thursday" radius={18} />
        </div>
        <div>
          <ImagePlaceholder label="Last call" radius={18} />
        </div>
      </div>

      <div className={styles.gridMobile}>
        <div className={styles.span2x2}>
          <ImagePlaceholder label="Full room, mid-song" radius={14} />
        </div>
        <div>
          <ImagePlaceholder label="Mic in hand" radius={14} />
        </div>
        <div>
          <ImagePlaceholder label="Neon detail" radius={14} />
        </div>
        <div className={styles.colSpan2}>
          <ImagePlaceholder label="The band, Thursday" radius={14} />
        </div>
      </div>
    </section>
  );
}
