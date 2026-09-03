import Link from "next/link";
import styles from "./MobileStickyBar.module.css";

export default function MobileStickyBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.status}>
        <span className={styles.statusLine}>Open until 1am</span>
        <span className={styles.tonight}>Tonight · Live Band Karaoke</span>
      </div>
      <Link href="/reserve" className={`btn btn-primary ${styles.cta}`}>
        Book a Table
      </Link>
    </div>
  );
}
