import { apiUrl, NgoFormData, NgoType } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest,Options: NgoFormData) {
  try {
    const res = await fetch(`${apiUrl}/Ngo/ngo`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...Options,
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

export async function GET(id: string) {
  try {
    const res = await fetch(`${apiUrl}/Ngo/ngo?Id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      console.log("something went wrong");
      throw new Error("Failed to fetch NGO");
    }

    const fetchedNgo = res.json();
    const data = await fetchedNgo;
    return {
      name: data.result.name,
      registrationNumber: data.result.registrationNumber,
      description: data.result.description,
      sector: data.result.sector,
      country: data.result.country,
      address: data.result.address,
      contactEmail: data.result.contactEmail,
      contactPhone: data.result.contactPhone,
      website: "https://website.com",
      logoUrl: "https://logourl.com",
      verified: true,
    } as NgoType;
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
