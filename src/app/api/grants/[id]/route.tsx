import { apiUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = await req.json();

  const res = await fetch(`${apiUrl}/Grant/grant/${id}`, {
    method: "PUT",
    body: JSON.stringify({ ...body }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error(" Grant Update failed", errorData);
    return { error: true, message: errorData.message || "Unknown error" };
  }

  return NextResponse.json({ message: `Grant Update successfully` });
}

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  try {
    const res = await fetch(`${apiUrl}/Grant/grant?Id=${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Grant");
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
