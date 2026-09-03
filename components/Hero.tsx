import Image from "next/image";
import Link from "next/link";
import { business, navLinks } from "@/lib/site-config";
import ImagePlaceholder from "./ImagePlaceholder";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      {/* Desktop / tablet hero — cinematic photo treatment (1b/1d) */}
      <header className={styles.hero}>
        <div className={styles.bg}>
          <ImagePlaceholder label="Hero: stage, mic, amber haze" />
        </div>
        <div className={styles.scrimRadial} />
        <div className={styles.scrimBottom} />

        <div className={styles.navWrap}>
          <div className={styles.navPill}>
            <Link href="/" className={styles.navBrand}>
              <Image
                className={styles.navLogo}
                src="/assets/vegas-logo.jpeg"
                alt=""
                width={36}
                height={36}
                priority
              />
              <span className={styles.navBrandName}>Vegas</span>
            </Link>
            <nav className={styles.navLinks} aria-label="Primary">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/reserve" className={styles.reserveBtn}>
              Reserve
            </Link>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.kicker}>Karaoke lounge · Gelephu Mindfulness City</div>
          <div className="rule" />
          <h1 className={styles.headline}>
            Sing like the lights
            <br />
            <em>are on you.</em>
          </h1>
          <p className={styles.sub}>
            Four private rooms, one open stage, twelve thousand songs and a bar that stays warm
            until the last chorus.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/reserve" className="btn btn-primary">
              Book a Table
            </Link>
            <Link href="/nights" className="btn btn-secondary">
              See Tonight&rsquo;s Lineup
            </Link>
          </div>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className="status-dot" />
              Open · until 1am
            </span>
            <span>·</span>
            <span>
              Riverside Block, {business.region}
            </span>
            <span>·</span>
            <span>{business.agePolicyShort}</span>
          </div>
        </div>
      </header>

      {/* Mobile hero (1e) */}
      <header className={styles.heroMobile}>
        <div className={styles.bg}>
          <ImagePlaceholder label="Hero, vertical crop" />
        </div>
        <div className={styles.scrimBottom} />
        <div className={styles.contentMobile}>
          <Image
            className={styles.logoMobile}
            src="/assets/vegas-logo.jpeg"
            alt="Vegas Lounge & Bar"
            width={88}
            height={88}
            priority
          />
          <div className={styles.kicker}>Karaoke lounge · Gelephu</div>
          <h1 className={styles.headlineMobile}>
            Sing like the lights <em>are on you.</em>
          </h1>
          <p className={styles.subMobile}>
            Four private rooms, one open stage, twelve thousand songs.
          </p>
          <div className={styles.ctaColMobile}>
            <Link href="/reserve" className="btn btn-primary">
              Book a Table
            </Link>
            <Link href="/nights" className="btn btn-secondary">
              See Tonight&rsquo;s Lineup
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.tonightBar}>
        <span className={styles.tonightLabel}>Tonight · Live Band Karaoke</span>
        <span className={styles.tonightTime}>9pm</span>
      </div>
    </>
  );
}
