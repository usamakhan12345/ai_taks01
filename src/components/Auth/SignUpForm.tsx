"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./AuthForm.module.scss";
import { signUpRequest, type SignUpPayload } from "./authApi";
import {
  CONTACT_NUMBER_PATTERN,
  EMAIL_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN,
} from "./validation";

type SignUpFormProps = {
  onSuccess?: () => void;
};

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpPayload>({ mode: "onBlur" });

  const onSubmit = async (data: SignUpPayload) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await signUpRequest(data);
      await Swal.fire({
        icon: "success",
        title: "Sign up successful",
        text: result.message,
        confirmButtonColor: "#2563eb",
      });
      reset();
      onSuccess?.();
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Sign up failed",
        text: error instanceof Error ? error.message : "Something went wrong.",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.field}>
        <label htmlFor="signup-name" className={styles.label}>
          Name
        </label>
        <input
          id="signup-name"
          type="text"
          autoComplete="name"
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
          {...register("name", {
            required: "Name is required.",
            pattern: NAME_PATTERN,
          })}
        />
        {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="signup-email" className={styles.label}>
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          {...register("email", {
            required: "Email is required.",
            pattern: EMAIL_PATTERN,
          })}
        />
        {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="signup-password" className={styles.label}>
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          autoComplete="new-password"
          className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
          {...register("password", {
            required: "Password is required.",
            pattern: PASSWORD_PATTERN,
          })}
        />
        {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="signup-contact" className={styles.label}>
          Contact Number
        </label>
        <input
          id="signup-contact"
          type="tel"
          autoComplete="tel"
          className={`${styles.input} ${errors.contactNumber ? styles.inputError : ""}`}
          {...register("contactNumber", {
            required: "Contact number is required.",
            pattern: CONTACT_NUMBER_PATTERN,
          })}
        />
        {errors.contactNumber && (
          <p className={styles.errorText}>{errors.contactNumber.message}</p>
        )}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? <span className={styles.spinner} aria-label="Loading" /> : "Sign Up"}
      </button>
    </form>
  );
}
