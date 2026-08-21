import styles from "./MainHeroBanner.module.scss";
import { defaultHeroContent, type HeroContent } from "./heroContent";

type MainHeroBannerProps = {
  content?: HeroContent;
};

export default function MainHeroBanner({ content = defaultHeroContent }: MainHeroBannerProps) {
  return (
    <section className={styles.banner}>
      <img
        src={content.image}
        alt={content.imageAlt}
        className={styles.image}
        loading="eager"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
        <a href={content.cta.href} className={styles.cta}>
          {content.cta.label}
        </a>
      </div>
    </section>
  );
}
