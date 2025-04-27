import { apiUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const body = await req.json();
  const { id } = context.params;
  try {
    const res = await fetch(`${apiUrl}/Ngo/ngo?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        ...body,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Ngo updated successfully" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  try {
    const res = await fetch(`${apiUrl}/Ngo/ngo?Id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.log("something went wrong");
      throw new Error("Failed to fetch NGO");
    }

    const data = await res.json();
    return NextResponse.json({ result: data.result });
    // return {
    //   name: data.result.name,
    //   registrationNumber: data.result.registrationNumber,
    //   description: data.result.description,
    //   sector: data.result.sector,
    //   country: data.result.country,
    //   address: data.result.address,
    //   contactEmail: data.result.contactEmail,
    //   contactPhone: data.result.contactPhone,
    //   website: "https://website.com",
    //   logoUrl: "https://logourl.com",
    //   verified: true,
    // };
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
