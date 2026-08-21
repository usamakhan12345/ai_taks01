import type { Product } from "./products";

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating-desc";

export type PriceRange = {
  id: string;
  label: string;
  min: number;
  max: number;
};

export const PRICE_RANGES: PriceRange[] = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-25", label: "Under $25", min: 0, max: 25 },
  { id: "25-50", label: "$25 - $50", min: 25, max: 50 },
  { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
  { id: "over-100", label: "Over $100", min: 100, max: Infinity },
];

export type ProductFilters = {
  search: string;
  category: string;
  priceRangeId: string;
  inStockOnly: boolean;
  sort: SortOption;
};

export function filterAndSortProducts(products: Product[], filters: ProductFilters): Product[] {
  const range = PRICE_RANGES.find((item) => item.id === filters.priceRangeId) ?? PRICE_RANGES[0];
  const query = filters.search.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesSearch =
      query.length === 0 ||
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    const matchesCategory = filters.category === "all" || product.category === filters.category;
    const matchesPrice = product.price >= range.min && product.price <= range.max;
    const matchesStock = !filters.inStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesPrice && matchesStock;
  });

  return [...filtered].sort((a, b) => {
    switch (filters.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
}
