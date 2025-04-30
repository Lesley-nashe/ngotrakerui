import { RegistrationOption } from "../utils";

export const RegisterUserClient = async (options: RegistrationOption) => {
  try {
    const { firstName, secondName, role, email, password } = options;
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        secondName,
        role,
        email,
        password,
      }),
    });

    return res.ok;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};