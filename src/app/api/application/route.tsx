import { apiUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${apiUrl}/Application/applications`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to load appliations");
    }
    const data = await res.json();
    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
