"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-config";
import styles from "./MobileTopBar.module.css";

export default function MobileTopBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.bar}>
      <Link href="/" className={styles.brand}>
        <Image
          className={styles.brandLogo}
          src="/assets/vegas-logo.jpeg"
          alt=""
          width={32}
          height={32}
          priority
        />
        <span className={styles.brandName}>Vegas</span>
      </Link>
      <div className={styles.right}>
        <span className={styles.status}>
          <span className="status-dot" />
          Open
        </span>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>
      </div>

      <nav
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.menuLink}
            aria-current={pathname === link.href ? "page" : undefined}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/reserve"
          className={`btn btn-primary ${styles.menuCta}`}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          Reserve
        </Link>
      </nav>
    </div>
  );
}
