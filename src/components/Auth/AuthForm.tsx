"use client";

import { useState } from "react";
import styles from "./AuthForm.module.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

type AuthMode = "login" | "signup";

type AuthFormProps = {
  defaultMode?: AuthMode;
};

export default function AuthForm({ defaultMode = "login" }: AuthFormProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);

  return (
    <div className={styles.card}>
      <div className={styles.tabs} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "login"}
          className={`${styles.tab} ${mode === "login" ? styles.tabActive : ""}`}
          onClick={() => setMode("login")}
        >
          Login
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "signup"}
          className={`${styles.tab} ${mode === "signup" ? styles.tabActive : ""}`}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </button>
      </div>

      <h2 className={styles.title}>
        {mode === "login" ? "Welcome back" : "Create an account"}
      </h2>

      {mode === "login" ? (
        <LoginForm onSuccess={() => setMode("login")} />
      ) : (
        <SignUpForm onSuccess={() => setMode("login")} />
      )}
    </div>
  );
}
