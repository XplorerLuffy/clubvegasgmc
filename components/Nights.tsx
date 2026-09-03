import { siteConfig } from "@/lib/site-config";
import Reveal from "./Reveal";
import styles from "./Nights.module.css";

const NIGHTS = [
  { day: "Tuesday", title: "Open Mic", body: "Sign the board, three songs each, the room decides who gets a fourth.", time: "8pm · No cover" },
  { day: "Wednesday", title: "Ladies' Night", body: "First cocktail on us, and the room stays yours until midnight.", time: "7pm · First drink free" },
  { day: "Thursday · Tonight", title: "Live Band Karaoke", body: "A four-piece behind you instead of a backing track. Book early — the stage fills.", time: "9pm · Nu 300 cover", tonight: true },
  { day: "Friday", title: "Host's Night", body: "Our MC runs the room — duets, dares and a trophy nobody takes home.", time: "9pm · No cover" },
  { day: "Saturday", title: "Vegas Saturdays", body: "Rooms booked out by eight, stage running till two, bottle service all night.", time: "Till 2am" },
  { day: "Sunday", title: "Sunday Slow", body: "Acoustic backing, half-price wine, everything a key lower.", time: "6pm · Half-price wine" },
];

export default function Nights() {
  const view = siteConfig.nightsView;

  return (
    <section id="nights" className={styles.section}>
      <Reveal className={styles.head}>
        <div className="eyebrow">The week</div>
        <div className="rule" />
        <h2 className={styles.heading}>Every night has a name.</h2>
      </Reveal>

      {view === "list" && (
        <div className={styles.list}>
          {NIGHTS.map((n, i) => (
            <Reveal
              key={n.day}
              className={`${styles.row} ${n.tonight ? styles.rowTonight : ""}`}
              delay={i * 55}
            >
              <span className={`${styles.rowDay} ${n.tonight ? styles.rowDayTonight : ""}`}>
                {n.day}
              </span>
              <div className={styles.rowMain}>
                <span className={styles.rowTitle}>{n.title}</span>
                <span className={styles.rowBody}>{n.body}</span>
              </div>
              <span className={`${styles.rowTime} ${n.tonight ? styles.rowTimeTonight : ""}`}>
                {n.time}
              </span>
            </Reveal>
          ))}
        </div>
      )}

      {view === "cards" && (
        <div className={styles.cards}>
          {NIGHTS.map((n, i) => (
            <Reveal
              key={n.day}
              className={`${styles.card} ${n.tonight ? styles.cardTonight : ""}`}
              delay={i * 55}
            >
              <span className={`${styles.rowDay} ${n.tonight ? styles.rowDayTonight : ""}`}>
                {n.day}
              </span>
              <span className={styles.cardTitle}>{n.title}</span>
              <span className={styles.cardBody}>{n.body}</span>
              <span className={styles.cardTime}>{n.time}</span>
            </Reveal>
          ))}
        </div>
      )}

      {/* mobile always renders as a compact list, independent of the desktop view toggle */}
      <div className={styles.listMobile}>
        {NIGHTS.map((n, i) => (
          <Reveal
            key={n.day}
            className={`${styles.rowMobile} ${n.tonight ? styles.rowMobileTonight : ""}`}
            delay={i * 55}
          >
            <span className={`${styles.rowDayMobile} ${n.tonight ? styles.rowDayMobileTonight : ""}`}>
              {n.day} · {n.time.split(" · ")[0]}
            </span>
            <span className={styles.rowTitleMobile}>{n.title}</span>
            <span className={styles.rowBodyMobile}>{n.body}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.happyHour}>
        <div className={styles.happyHourCopy}>
          <div className="eyebrow">Happy hour</div>
          <span className={styles.happyHourHeading}>
            Five to eight, every night. House pours at Nu 250.
          </span>
        </div>
        <span className={styles.happyHourNote}>Mondays the mic is resting.</span>
      </Reveal>
    </section>
  );
}
