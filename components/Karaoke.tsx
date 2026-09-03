import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./Karaoke.module.css";

const STEPS = [
  {
    num: "01",
    title: "Pick your room — or the stage",
    body: "Book a private room by the hour, or sign the board at the door and wait for the host to call you up.",
  },
  {
    num: "02",
    title: "Search the book",
    body: "Twelve thousand tracks in Dzongkha, Nepali, Hindi, English and Korean. Queue from your phone at the table.",
  },
  {
    num: "03",
    title: "The host cues you in",
    body: "Lights down, key set, the room brought with you. Thursdays a live band plays behind you instead of a track.",
  },
];

const ROOMS = [
  { label: "The Sapphire room", name: "The Sapphire", meta: "4–6 guests · booth seating", price: "Nu 900", unit: "/ hour" },
  { label: "The Ruby room", name: "The Ruby", meta: "8–12 guests · own bar tab", price: "Nu 1,600", unit: "/ hour" },
  { label: "The Grand room", name: "The Grand", meta: "Up to 20 · full buyout available", price: "Nu 2,800", unit: "/ hour" },
];

export default function Karaoke() {
  return (
    <section id="karaoke" className={styles.section}>
      <Reveal className={styles.head}>
        <div className="eyebrow">The karaoke</div>
        <div className="rule-center" />
        <h2 className={styles.heading}>Two ways to take the mic.</h2>
      </Reveal>

      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <Reveal key={step.num} className={styles.step} delay={i * 100}>
            <span className={styles.stepNum}>{step.num}</span>
            <span className={styles.stepTitle}>{step.title}</span>
            <span className={styles.stepBody}>{step.body}</span>
          </Reveal>
        ))}
      </div>

      <div className={styles.rooms}>
        {ROOMS.map((room, i) => (
          <Reveal key={room.name} className={styles.room} delay={i * 90}>
            <div className={styles.roomPhoto}>
              <ImagePlaceholder label={room.label} />
            </div>
            <div className={styles.roomBody}>
              <span className={styles.roomName}>{room.name}</span>
              <span className={styles.roomMeta}>{room.meta}</span>
              <div className={styles.roomDivider} />
              <span className={styles.roomPrice}>
                {room.price} <span className={styles.roomPriceUnit}>{room.unit}</span>
              </span>
            </div>
          </Reveal>
        ))}
        <Reveal className={`${styles.room} ${styles.roomFeatured}`} delay={ROOMS.length * 90}>
          <div className={styles.roomPhoto}>
            <ImagePlaceholder label="The main stage" />
          </div>
          <div className={styles.roomBody}>
            <span className={styles.roomName}>The Main Stage</span>
            <span className={styles.roomMeta}>Open floor · sign the board</span>
            <div className={styles.roomDivider} />
            <span className={styles.roomPrice}>No charge</span>
          </div>
        </Reveal>
      </div>

      <Reveal className={styles.songBand}>
        <div className={styles.songCopy}>
          <div className="eyebrow">The song book</div>
          <h3 className={styles.songHeading}>
            <strong>{siteConfig.songCount}</strong> songs, five languages.
          </h3>
          <p className={styles.songSub}>
            Search before you come. Queue from the table when you&rsquo;re here.
          </p>
        </div>
        <div className={styles.searchBox}>
          <span className={styles.searchPlaceholder}>Search a title, artist or language…</span>
          <button type="button" className={styles.searchBtn}>
            Browse
          </button>
        </div>
      </Reveal>
    </section>
  );
}
