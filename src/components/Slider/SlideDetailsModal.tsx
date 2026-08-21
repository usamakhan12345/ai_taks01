"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./SlideDetailsModal.module.scss";
import type { SlideItem } from "./slides";

type SlideDetailsModalProps = {
  slide: SlideItem | null;
  isOpen: boolean;
  isLiked: boolean;
  isSaved: boolean;
  onClose: () => void;
  onToggleLike: () => void;
  onToggleSave: () => void;
};

export default function SlideDetailsModal({
  slide,
  isOpen,
  isLiked,
  isSaved,
  onClose,
  onToggleLike,
  onToggleSave,
}: SlideDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !slide) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="slide-details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close details"
        >
          <CloseIcon />
        </button>

        <div className={styles.content}>
          <h2 id="slide-details-title" className={styles.title}>
            {slide.title}
          </h2>
          <p className={styles.description}>{slide.details ?? slide.description}</p>

          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.like} ${isLiked ? styles.active : ""}`}
              aria-pressed={isLiked}
              aria-label={isLiked ? "Unlike" : "Like"}
              onClick={onToggleLike}
            >
              <HeartIcon />
              <span>Like</span>
            </button>
            <button
              type="button"
              className={`${styles.iconButton} ${styles.save} ${isSaved ? styles.active : ""}`}
              aria-pressed={isSaved}
              aria-label={isSaved ? "Remove from saved" : "Save"}
              onClick={onToggleSave}
            >
              <BookmarkIcon />
              <span>Save</span>
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={slide.image} alt={slide.imageAlt} className={styles.image} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.7 2.4 4 6 4c2 0 3.6 1.1 4.5 2.6.8-1.5 2.5-2.6 4.5-2.6 3.6 0 5.4 3.7 3.8 7.2-2.3 4.7-9.8 9.3-9.8 9.3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M6 3.5h12a.5.5 0 0 1 .5.5v17l-6.5-4-6.5 4v-17a.5.5 0 0 1 .5-.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
