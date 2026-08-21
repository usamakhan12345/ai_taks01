export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
};

export const defaultProducts: Product[] = [
  {
    id: "product-1",
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Over-ear headphones with adaptive noise cancellation and 30-hour battery life for all-day listening.",
    image: "https://picsum.photos/id/1080/600/450",
    imageAlt: "Black wireless over-ear headphones",
    price: 129.99,
    category: "Audio",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "product-2",
    title: "Smart Fitness Watch",
    description:
      "Track workouts, heart rate, and sleep with a bright always-on display and a week-long battery.",
    image: "https://picsum.photos/id/1082/600/450",
    imageAlt: "Smart fitness watch on a wrist",
    price: 89.5,
    category: "Wearables",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "product-3",
    title: "Ceramic Pour-Over Coffee Set",
    description: "A hand-glazed ceramic dripper and carafe for a smoother, richer cup at home.",
    image: "https://picsum.photos/id/292/600/450",
    imageAlt: "Ceramic pour-over coffee dripper and carafe",
    price: 42.0,
    category: "Home",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "product-4",
    title: "Minimalist Leather Wallet",
    description: "Slim full-grain leather wallet with RFID-blocking lining and six card slots.",
    image: "https://picsum.photos/id/1060/600/450",
    imageAlt: "Slim brown leather wallet",
    price: 38.0,
    category: "Accessories",
    rating: 4.1,
    inStock: false,
  },
  {
    id: "product-5",
    title: "Portable Bluetooth Speaker",
    description: "Compact speaker with rich bass, IPX7 waterproofing, and 12 hours of playtime.",
    image: "https://picsum.photos/id/1050/600/450",
    imageAlt: "Portable bluetooth speaker outdoors",
    price: 59.99,
    category: "Audio",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "product-6",
    title: "Insulated Steel Water Bottle",
    description: "Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12.",
    image: "https://picsum.photos/id/425/600/450",
    imageAlt: "Insulated steel water bottle",
    price: 24.99,
    category: "Outdoor",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "product-7",
    title: "Compact Travel Backpack",
    description: "Weatherproof 22L backpack with a padded laptop sleeve and hidden pockets.",
    image: "https://picsum.photos/id/667/600/450",
    imageAlt: "Compact travel backpack",
    price: 75.0,
    category: "Outdoor",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "product-8",
    title: "Aromatherapy Diffuser",
    description: "Whisper-quiet ultrasonic diffuser with ambient LED light and auto shut-off.",
    image: "https://picsum.photos/id/1057/600/450",
    imageAlt: "Aromatherapy diffuser with soft light",
    price: 19.99,
    category: "Home",
    rating: 4.0,
    inStock: true,
  },
  {
    id: "product-9",
    title: "Wireless Charging Pad",
    description: "Fast 15W charging pad with a non-slip surface that fits any case.",
    image: "https://picsum.photos/id/119/600/450",
    imageAlt: "Wireless charging pad with a phone on it",
    price: 22.5,
    category: "Accessories",
    rating: 3.9,
    inStock: true,
  },
  {
    id: "product-10",
    title: "Studio Monitor Speakers (Pair)",
    description: "Reference-grade studio monitors with a crisp high end and tight, punchy bass.",
    image: "https://picsum.photos/id/250/600/450",
    imageAlt: "Pair of studio monitor speakers",
    price: 199.0,
    category: "Audio",
    rating: 4.9,
    inStock: false,
  },
];
