export type HeroContent = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export const defaultHeroContent: HeroContent = {
  image: "https://picsum.photos/id/1043/1920/1080",
  imageAlt: "Wide mountain landscape glowing at golden hour",
  title: "Adventure Starts Here",
  description:
    "Plan smarter trips with real-time guidance, curated itineraries, and tools built for every kind of traveler.",
  cta: { label: "Get Started", href: "#" },
};
