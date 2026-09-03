/**
 * Single source of truth for business info, navigation, and the
 * three content toggles carried over from the design handoff
 * (marquee on/off, nights list vs. cards, song count).
 */

export const siteConfig = {
  name: "Vegas Lounge & Bar",
  shortName: "Vegas",
  tagline: "Sing like the lights are on you.",
  description:
    "Private karaoke rooms, an open stage and a bar that stays warm until the last chorus. Riverside Block, Gelephu Mindfulness City.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vegasloungebar.bt",

  showNightsMarquee: true,
  nightsView: "list" as "list" | "cards",
  songCount: "12,000",
};

export const business = {
  addressLines: ["Riverside Block, Gelephu", "Mindfulness City, Sarpang"],
  addressShort: "Riverside Block, Gelephu Mindfulness City",
  addressFull: "Riverside Block, Gelephu Mindfulness City, Sarpang",
  region: "GMC",
  locality: "Gelephu Mindfulness City",
  country: "BT",

  phone: "+975 17 00 00 00",
  phoneHref: "tel:+97517000000",
  email: "hello@vegaslounge.bt",

  hours: [
    { days: "Tue–Thu", time: "5pm – 1am" },
    { days: "Fri–Sat", time: "5pm – 2am" },
    { days: "Sun", time: "5pm – 12am" },
    { days: "Mon", time: "Closed" },
  ],
  hoursSpecSchema: [
    { days: ["Tuesday", "Wednesday", "Thursday"], opens: "17:00", closes: "01:00" },
    { days: ["Friday", "Saturday"], opens: "17:00", closes: "02:00" },
    { days: ["Sunday"], opens: "17:00", closes: "00:00" },
  ],

  agePolicy: "All ages until 9pm. 18+ with photo ID after.",
  agePolicyShort: "18+ after 9pm",

  get mapsUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.addressFull)}`;
  },

  socials: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/karaoke", label: "Karaoke" },
  { href: "/drinks", label: "Drinks" },
  { href: "/nights", label: "Nights" },
  { href: "/find-us", label: "Find Us" },
];
