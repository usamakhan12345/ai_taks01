"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./AuthForm.module.scss";
import { loginRequest, type LoginPayload } from "./authApi";
import { EMAIL_PATTERN, PASSWORD_PATTERN } from "./validation";

type LoginFormProps = {
  onSuccess?: () => void;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPayload>({ mode: "onBlur" });

  const onSubmit = async (data: LoginPayload) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const result = await loginRequest(data);
      await Swal.fire({
        icon: "success",
        title: "Login successful",
        text: result.message,
        confirmButtonColor: "#2563eb",
      });
      reset();
      onSuccess?.();
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Login failed",
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
        <label htmlFor="login-email" className={styles.label}>
          Email
        </label>
        <input
          id="login-email"
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
        <label htmlFor="login-password" className={styles.label}>
          Password
        </label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
          {...register("password", {
            required: "Password is required.",
            pattern: PASSWORD_PATTERN,
          })}
        />
        {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? <span className={styles.spinner} aria-label="Loading" /> : "Login"}
      </button>
    </form>
  );
}
