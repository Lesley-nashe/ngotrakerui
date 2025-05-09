import { apiUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const { id } = await context.params;

  const res = await fetch(`${apiUrl}/Grant/grant?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...body }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return NextResponse.json(
      { error: errorData.message },
      { status: res.status }
    );
  }

  return NextResponse.json({ message: `Grant Update successfully` });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const res = await fetch(`${apiUrl}/Grant/grant/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Grant");
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
}
