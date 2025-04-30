import { apiUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${apiUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
