import { apiUrl, RegistrationOption } from "@/lib/utils";
import { NextResponse } from "next/server";

export default async function Registration(Options: RegistrationOption) {
  try {
    const { firstName, secondName, role, email, password } = Options;

    const res = await fetch(`${apiUrl}/auth/register`, {
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

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json(
      { error, err: "Registration failed" },
      { status: 500 }
    );
  }
}
