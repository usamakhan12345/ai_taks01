export type LoginPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
  contactNumber: string;
};

export type AuthResponse = {
  message: string;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function loginRequest(payload: LoginPayload): Promise<AuthResponse> {
  await delay(900);

  if (payload.email.toLowerCase().includes("fail")) {
    throw new Error("Invalid email or password. Please try again.");
  }

  return { message: `Welcome back, ${payload.email}!` };
}

export async function signUpRequest(payload: SignUpPayload): Promise<AuthResponse> {
  await delay(900);

  if (payload.email.toLowerCase().includes("fail")) {
    throw new Error("Unable to create your account. Please try again.");
  }

  return { message: `Account created successfully. Welcome, ${payload.name}!` };
}
