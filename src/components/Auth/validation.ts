export const EMAIL_PATTERN = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Enter a valid email address.",
};

export const PASSWORD_PATTERN = {
  value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
  message: "Password must be at least 8 characters and include a letter and a number.",
};

export const CONTACT_NUMBER_PATTERN = {
  value: /^\+?[0-9]{10,15}$/,
  message: "Enter a valid contact number (10-15 digits).",
};

export const NAME_PATTERN = {
  value: /^[A-Za-z\s'-]{2,50}$/,
  message: "Name must contain only letters and be at least 2 characters.",
};
