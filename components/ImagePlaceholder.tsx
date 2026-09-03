import styles from "./ImagePlaceholder.module.css";

type Props = {
  label: string;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function ImagePlaceholder({ label, radius, className, style }: Props) {
  return (
    <div
      className={[styles.slot, className].filter(Boolean).join(" ")}
      style={{ borderRadius: radius, ...style }}
      role="img"
      aria-label={label}
    >
      <svg
        className={styles.icon}
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D4A437"
        strokeWidth="1.4"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <circle cx="8.5" cy="10" r="1.6" />
        <path d="M4 16.5L9 12l3.5 3.5L16 12l4.5 4.5" />
      </svg>
      <span className={styles.caption}>{label}</span>
    </div>
  );
}
