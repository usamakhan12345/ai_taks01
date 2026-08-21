"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.scss";
import SlideDetailsModal from "./SlideDetailsModal";
import { defaultSlides, type SlideItem } from "./slides";

type SliderProps = {
  slides?: SlideItem[];
};

function toggleInSet(setter: Dispatch<SetStateAction<Set<string>>>, id: string) {
  setter((prev) => {
    const next = new Set(prev);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    return next;
  });
}

export default function Slider({ slides = defaultSlides }: SliderProps) {
  const [activeSlide, setActiveSlide] = useState<SlideItem | null>(null);
  const [likedSlides, setLikedSlides] = useState<Set<string>>(new Set());
  const [savedSlides, setSavedSlides] = useState<Set<string>>(new Set());

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={slides.length > 1}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className={styles.image}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h3 className={styles.title}>{slide.title}</h3>
                <p className={styles.description}>{slide.description}</p>
                <button
                  type="button"
                  className={styles.cta}
                  onClick={() => setActiveSlide(slide)}
                >
                  {slide.cta.label}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideDetailsModal
        slide={activeSlide}
        isOpen={activeSlide !== null}
        isLiked={activeSlide ? likedSlides.has(activeSlide.id) : false}
        isSaved={activeSlide ? savedSlides.has(activeSlide.id) : false}
        onClose={() => setActiveSlide(null)}
        onToggleLike={() => activeSlide && toggleInSet(setLikedSlides, activeSlide.id)}
        onToggleSave={() => activeSlide && toggleInSet(setSavedSlides, activeSlide.id)}
      />
    </div>
  );
}
