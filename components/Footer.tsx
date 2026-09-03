import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <Link href="/" className={styles.brand}>
          <img className={styles.logo} src="/assets/vegas-logo.jpeg" alt="" />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Vegas Lounge &amp; Bar</span>
            <span className={styles.brandAddr}>Riverside Block, Gelephu Mindfulness City</span>
          </div>
        </Link>
        <div className={styles.links}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
          <Link href="/drinks">Full drinks menu</Link>
          <Link href="/karaoke">Song book</Link>
        </div>
      </div>

      <div className={styles.footerMobile}>
        <Link href="/" className={styles.footerMobileBrand}>
          <img className={styles.logoMobile} src="/assets/vegas-logo.jpeg" alt="" />
          <span className={styles.brandNameMobile}>Vegas Lounge &amp; Bar</span>
        </Link>
        <div className={styles.linksMobile}>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
        <span className={styles.noteMobile}>
          Riverside Block, Gelephu Mindfulness City · 18+ after 9pm
        </span>
      </div>
    </footer>
  );
}
