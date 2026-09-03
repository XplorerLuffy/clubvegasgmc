"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site-config";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Image
            className={styles.logo}
            src="/assets/vegas-logo.jpeg"
            alt="Vegas Lounge & Bar"
            width={34}
            height={34}
            priority
          />
          <span className={styles.brandName}>Vegas</span>
        </Link>
        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active ? styles.linkActive : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/reserve" className={styles.reserveBtn}>
          Reserve
        </Link>
      </div>
    </div>
  );
}
