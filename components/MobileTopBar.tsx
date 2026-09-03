"use client";

import { useState } from "react";
import styles from "./MobileTopBar.module.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#karaoke", label: "Karaoke" },
  { href: "#drinks", label: "Drinks" },
  { href: "#nights", label: "Nights" },
  { href: "#find-us", label: "Find Us" },
];

export default function MobileTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.bar}>
      <div className={styles.brand}>
        <img className={styles.brandLogo} src="/assets/vegas-logo.jpeg" alt="" />
        <span className={styles.brandName}>Vegas</span>
      </div>
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

      {open && (
        <nav className={styles.menu} aria-label="Mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.menuLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            className={`btn btn-primary ${styles.menuCta}`}
            onClick={() => setOpen(false)}
          >
            Reserve
          </a>
        </nav>
      )}
    </div>
  );
}
