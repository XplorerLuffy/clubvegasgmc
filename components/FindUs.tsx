import Image from "next/image";
import { business } from "@/lib/site-config";
import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./FindUs.module.css";

const [hoursWeekday, hoursWeekend, hoursSunday, hoursMonday] = business.hours;

export default function FindUs() {
  return (
    <section id="find-us">
      {/* Desktop */}
      <div className={styles.section}>
        <div className={styles.copy}>
          <div className="eyebrow">Find us</div>
          <div className="rule" />
          <h2 className={styles.heading}>
            Riverside Block,
            <br />
            <em>Gelephu.</em>
          </h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Address</span>
              <span className={styles.infoValue}>
                {business.addressLines[0]}
                <br />
                {business.addressLines[1]}
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Hours</span>
              <span className={styles.infoValue}>
                {hoursWeekday.days} · {hoursWeekday.time}
                <br />
                {hoursWeekend.days} · {hoursWeekend.time}
                <br />
                {hoursSunday.days} · {hoursSunday.time} · {hoursMonday.days} closed
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Reach us</span>
              <span className={styles.infoValue}>
                {business.phone}
                <br />
                {business.email}
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className="eyebrow">Age policy</span>
              <span className={styles.infoValue}>{business.agePolicy}</span>
            </div>
          </div>
          <div className={styles.ctaRow}>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
            </a>
            <a href={business.phoneHref} className="btn btn-secondary">
              Call the Bar
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <ImagePlaceholder label="Dark-styled map of Gelephu Mindfulness City" />
          <Image
            className={styles.mapPin}
            src="/assets/vegas-logo.jpeg"
            alt=""
            width={56}
            height={56}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className={styles.sectionMobile}>
        <div className="eyebrow">Find us</div>
        <div className="rule" />
        <h2 className={styles.heading}>
          Riverside Block, <em>Gelephu.</em>
        </h2>
        <div className={styles.mapMobile}>
          <ImagePlaceholder label="Dark-styled map" />
          <Image
            className={styles.mapPinMobile}
            src="/assets/vegas-logo.jpeg"
            alt=""
            width={44}
            height={44}
          />
        </div>
        <div className={styles.infoListMobile}>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Address</span>
            <span className={styles.infoValueMobile}>{business.addressFull}</span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Hours</span>
            <span className={styles.infoValueMobile}>
              {hoursWeekday.days} · {hoursWeekday.time}
              <br />
              {hoursWeekend.days} · {hoursWeekend.time}
              <br />
              {hoursSunday.days} · {hoursSunday.time} · {hoursMonday.days} closed
            </span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Age policy</span>
            <span className={styles.infoValueMobile}>{business.agePolicy}</span>
          </div>
          <div className={styles.infoBlock}>
            <span className="eyebrow">Reach us</span>
            <span className={styles.infoValueMobile}>
              {business.phone} · {business.email}
            </span>
          </div>
        </div>
        <div className={styles.ctaColMobile}>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Directions
          </a>
          <a href={business.phoneHref} className="btn btn-secondary">
            Call the Bar
          </a>
        </div>
      </div>
    </section>
  );
}
