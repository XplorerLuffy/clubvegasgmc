"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import styles from "./Reserve.module.css";

const ROOM_OPTIONS = [
  "The Sapphire · 4–6",
  "The Ruby · 8–12",
  "The Grand · up to 20",
  "Lounge table (no room)",
];

export default function Reserve() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const submitLabel = sent ? "Sent — we'll write back tonight" : "Request the Table";

  return (
    <section id="reserve">
      {/* Desktop */}
      <div className={styles.section}>
        <Reveal className={styles.copy}>
          <div className="eyebrow">Reserve</div>
          <div className="rule" />
          <h2 className={styles.heading}>
            Tell us when.
            <br />
            <em>We&rsquo;ll hold the room.</em>
          </h2>
          <p className={styles.p}>
            Rooms go first on Fridays and Saturdays — send this by Wednesday and we&rsquo;ll write
            back the same evening.
          </p>
          <div className={styles.bullets}>
            <span className={styles.bullet}>
              <span className={styles.bulletDot} />
              Private rooms held for 20 minutes past your time.
            </span>
            <span className={styles.bullet}>
              <span className={styles.bulletDot} />
              Bottle service can be pre-ordered to the table.
            </span>
            <span className={styles.bullet}>
              <span className={styles.bulletDot} />
              Stage slots aren&rsquo;t reservable — sign the board at the door.
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHead}>
            <span className="eyebrow">Book a table</span>
            <span className={styles.formHint}>We reply the same evening.</span>
          </div>
          <div className={styles.grid}>
            <label className={styles.field}>
              Name
              <input className={styles.input} type="text" placeholder="Your full name" required />
            </label>
            <label className={styles.field}>
              Phone
              <input className={styles.input} type="tel" placeholder="+975 …" required />
            </label>
            <label className={styles.field}>
              Date
              <input className={styles.input} type="date" required />
            </label>
            <label className={styles.field}>
              Time
              <input className={styles.input} type="time" required />
            </label>
            <label className={styles.field}>
              Guests
              <input className={styles.input} type="number" defaultValue={6} min={1} />
            </label>
            <label className={styles.field}>
              Room
              <select className={styles.select} defaultValue={ROOM_OPTIONS[0]}>
                {ROOM_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label className={`${styles.field} ${styles.fieldWide}`}>
              Anything we should know
              <textarea
                className={styles.textarea}
                rows={3}
                placeholder="Occasion, a song you want cued, dietary notes."
              />
            </label>
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.submit}`}
            disabled={sent}
            aria-live="polite"
          >
            {submitLabel}
          </button>
        </form>
        </Reveal>
      </div>

      {/* Mobile */}
      <div className={styles.sectionMobile}>
        <div className="eyebrow">Reserve</div>
        <div className="rule" />
        <h2 className={styles.headingMobile}>
          Tell us when. <em>We&rsquo;ll hold the room.</em>
        </h2>
        <p className={styles.pMobile}>
          Rooms go first on Fridays and Saturdays. We reply the same evening.
        </p>
        <Reveal>
        <form className={styles.formMobile} onSubmit={handleSubmit}>
          <label className={styles.fieldMobile}>
            Name
            <input className={styles.input} type="text" placeholder="Your full name" required />
          </label>
          <label className={styles.fieldMobile}>
            Phone
            <input className={styles.input} type="tel" placeholder="+975 …" required />
          </label>
          <div className={styles.rowMobile}>
            <label className={styles.fieldMobile}>
              Date
              <input className={styles.input} type="date" required />
            </label>
            <label className={styles.fieldMobile}>
              Guests
              <input className={styles.input} type="number" defaultValue={6} min={1} />
            </label>
          </div>
          <label className={styles.fieldMobile}>
            Room
            <select className={styles.select} defaultValue={ROOM_OPTIONS[0]}>
              {ROOM_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label className={styles.fieldMobile}>
            Anything we should know
            <textarea
              className={styles.textarea}
              rows={3}
              placeholder="Occasion, a song you want cued."
            />
          </label>
          <button
            type="submit"
            className={`btn btn-primary ${styles.submitMobile}`}
            disabled={sent}
            aria-live="polite"
          >
            {submitLabel}
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
