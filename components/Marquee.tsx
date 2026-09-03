import { siteConfig } from "@/lib/site-config";
import styles from "./Marquee.module.css";

const ITEMS = [
  "Open Mic Tuesdays",
  "Ladies' Night Wednesdays",
  "Live Band Karaoke Thursdays",
  "Host's Night Fridays",
  "Vegas Saturdays till 2",
];

export default function Marquee() {
  if (!siteConfig.showNightsMarquee) return null;

  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            {i < loop.length - 1 ? " ·" : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
