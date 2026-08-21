export type SlideItem = {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  details?: string;
  cta: {
    label: string;
    href: string;
  };
};

export const defaultSlides: SlideItem[] = [
  {
    id: "slide-1",
    image: "https://picsum.photos/id/1015/1200/675",
    imageAlt: "Mountain river winding through a green valley",
    title: "Explore New Horizons",
    description:
      "Discover curated experiences designed to take you beyond the everyday and into the extraordinary.",
    details:
      "Our curated trip collections are built by local experts who know each destination inside out. Every itinerary blends must-see landmarks with hidden gems, so you spend less time planning and more time exploring. Save your favorites and come back to them anytime.",
    cta: { label: "Get Started", href: "#" },
  },
  {
    id: "slide-2",
    image: "https://picsum.photos/id/1016/1200/675",
    imageAlt: "Rocky mountain range glowing at sunset",
    title: "Built for Every Journey",
    description:
      "From quick getaways to long expeditions, our tools adapt to however you like to explore.",
    details:
      "Whether you're planning a weekend escape or a month-long expedition, our platform adjusts to your pace. Track routes offline, get weather-aware suggestions, and sync your plans across devices so nothing gets lost along the way.",
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "slide-3",
    image: "https://picsum.photos/id/1018/1200/675",
    imageAlt: "Winding road through a mountain valley",
    title: "Plan With Confidence",
    description:
      "Real-time insights and reliable guidance help you make the most of every trip you take.",
    details:
      "Live traffic, weather, and crowd-level data are woven into every recommendation, so you always know the best time to go. Our guidance updates as conditions change, helping you avoid surprises and make the most of every stop on your route.",
    cta: { label: "View Plans", href: "#" },
  },
];
