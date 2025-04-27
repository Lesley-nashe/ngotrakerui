import { apiUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${apiUrl}/Grant/grants`);
    if (!res.ok) {
      throw new Error("Failed to fetch the grants");
    }
    const data = await res.json();
    return NextResponse.json({ result: data.result });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body)
    const res = await fetch(`${apiUrl}/Grant/grant`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    return NextResponse.json({ message: "Grant created successfully" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
}
