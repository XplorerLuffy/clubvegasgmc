import Image from "next/image";
import Link from "next/link";
import { business, siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <Link href="/" className={styles.brand}>
          <Image
            className={styles.logo}
            src="/assets/vegas-logo.jpeg"
            alt=""
            width={52}
            height={52}
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>{siteConfig.name}</span>
            <span className={styles.brandAddr}>{business.addressShort}</span>
          </div>
        </Link>
        <div className={styles.links}>
          <a href={business.socials.instagram}>Instagram</a>
          <a href={business.socials.facebook}>Facebook</a>
          <a href={business.socials.tiktok}>TikTok</a>
          <Link href="/drinks">Full drinks menu</Link>
          <Link href="/karaoke">Song book</Link>
        </div>
      </div>

      <div className={styles.footerMobile}>
        <Link href="/" className={styles.footerMobileBrand}>
          <Image
            className={styles.logoMobile}
            src="/assets/vegas-logo.jpeg"
            alt=""
            width={48}
            height={48}
          />
          <span className={styles.brandNameMobile}>{siteConfig.name}</span>
        </Link>
        <div className={styles.linksMobile}>
          <a href={business.socials.instagram}>Instagram</a>
          <a href={business.socials.facebook}>Facebook</a>
          <a href={business.socials.tiktok}>TikTok</a>
        </div>
        <span className={styles.noteMobile}>
          {business.addressShort} · {business.agePolicyShort}
        </span>
      </div>
    </footer>
  );
}
