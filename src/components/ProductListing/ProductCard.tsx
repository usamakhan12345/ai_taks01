import styles from "./ProductCard.module.scss";
import type { Product } from "./products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.imageAlt}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.categoryBadge}>{product.category}</span>
        {!product.inStock && <span className={styles.stockBadge}>Out of stock</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.meta}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span className={styles.rating} aria-label={`Rated ${product.rating} out of 5`}>
            <StarIcon />
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.06 6.6.63-4.98 4.5 1.4 6.55L12 16.9l-5.92 3.34 1.4-6.55-4.98-4.5 6.6-.63L12 2.5z" />
    </svg>
  );
}
