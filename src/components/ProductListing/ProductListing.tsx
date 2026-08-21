"use client";

import { useMemo, useState } from "react";
import styles from "./ProductListing.module.scss";
import ProductCard from "./ProductCard";
import { defaultProducts, type Product } from "./products";
import {
  PRICE_RANGES,
  filterAndSortProducts,
  type ProductFilters,
  type SortOption,
} from "./filterProducts";

type ProductListingProps = {
  products?: Product[];
};

const DEFAULT_FILTERS: ProductFilters = {
  search: "",
  category: "all",
  priceRangeId: PRICE_RANGES[0].id,
  inStockOnly: false,
  sort: "featured",
};

export default function ProductListing({ products = defaultProducts }: ProductListingProps) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))).sort(),
    [products],
  );

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [products, filters],
  );

  const activeFilterCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.priceRangeId !== PRICE_RANGES[0].id ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0);

  const isFiltered = filters.search.trim() !== "" || activeFilterCount > 0;

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchRow}>
        <div className={styles.searchField}>
          <SearchIcon />
          <input
            type="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
            aria-label="Search products"
            className={styles.searchInput}
          />
        </div>

        <button
          type="button"
          className={styles.filtersToggle}
          onClick={() => setIsFiltersOpen((prev) => !prev)}
          aria-expanded={isFiltersOpen}
        >
          <FilterIcon />
          Filters
          {activeFilterCount > 0 && <span className={styles.filterBadge}>{activeFilterCount}</span>}
        </button>
      </div>

      <div className={`${styles.filtersPanel} ${isFiltersOpen ? styles.filtersPanelOpen : ""}`}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel} htmlFor="category-filter">
            Category
          </label>
          <select
            id="category-filter"
            className={styles.select}
            value={filters.category}
            onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Price</span>
          <div className={styles.chipRow}>
            {PRICE_RANGES.map((range) => (
              <button
                key={range.id}
                type="button"
                className={`${styles.chip} ${filters.priceRangeId === range.id ? styles.chipActive : ""}`}
                onClick={() => setFilters((prev) => ({ ...prev, priceRangeId: range.id }))}
                aria-pressed={filters.priceRangeId === range.id}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel} htmlFor="sort-filter">
            Sort By
          </label>
          <select
            id="sort-filter"
            className={styles.select}
            value={filters.sort}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, sort: event.target.value as SortOption }))
            }
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Highest Rated</option>
          </select>
        </div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, inStockOnly: event.target.checked }))
            }
          />
          In stock only
        </label>

        {isFiltered && (
          <button
            type="button"
            className={styles.resetButton}
            onClick={() => setFilters(DEFAULT_FILTERS)}
          >
            Reset filters
          </button>
        )}
      </div>

      <p className={styles.resultsCount}>
        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
      </p>

      {filteredProducts.length > 0 ? (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <EmptyIcon />
          <h2 className={styles.emptyTitle}>No Items Found</h2>
          <p className={styles.emptyText}>
            Try adjusting your search or filters to find what you are looking for.
          </p>
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
    </svg>
  );
}

function EmptyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      <path d="M8.5 11h5" strokeLinecap="round" />
    </svg>
  );
}
