"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/karaoke", label: "Karaoke" },
  { href: "/drinks", label: "Drinks" },
  { href: "/nights", label: "Nights" },
  { href: "/find-us", label: "Find Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img className={styles.logo} src="/assets/vegas-logo.jpeg" alt="Vegas Lounge & Bar" />
          <span className={styles.brandName}>Vegas</span>
        </Link>
        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.linkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/reserve" className={styles.reserveBtn}>
          Reserve
        </Link>
      </div>
    </div>
  );
}
