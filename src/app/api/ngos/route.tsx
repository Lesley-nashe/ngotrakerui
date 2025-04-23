import { NextResponse } from "next/server";

type FormData = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  sector: string;
};

export type NgoType = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  sector: string;
};

export async function UpdateNgoRequest(Options: FormData) {
  try {
    const {
      name,
      address,
      country,
      registrationNumber,
      contactEmail,
      contactPhone,
      sector,
      description,
    } = Options;

    const res = await fetch("http://localhost:5189/api/Ngo/ngo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        address,
        country,
        registrationNumber,
        contactEmail,
        contactPhone,
        sector,
        description,
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
  } catch (error) {
    return NextResponse.json(
      { error, err: "Ngo updated failed" },
      { status: 500 }
    );
  }
}

export async function CreateNgoRequest(Options: FormData) {
  try {
    const {
      name,
      address,
      country,
      registrationNumber,
      contactEmail,
      contactPhone,
      sector,
      description,
    } = Options;

    const res = await fetch("http://localhost:5189/api/Ngo/ngo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        registrationNumber,
        description,
        sector,
        country,
        address,
        contactEmail,
        contactPhone,
        website: "https://website.com",
        logoUrl: "https://logourl.com",
        verified: true,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Ngo created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error, err: "Ngo creation failed" },
      { status: 500 }
    );
  }
}

export const GetNgoRequest = async (id: string) => {
  try {
    const fetchNgo = async () => {
      const ngo = await fetch(`http://localhost:5189/api/Ngo/ngo?Id=${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!ngo.ok) {
        console.log("something went wrong");
        throw new Error("Failed to fetch NGO");
      }

      const fetchedNgo = ngo.json();
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
    };

    return await fetchNgo();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GetNgosRequest = async () => {
  try {
    const ngos = await fetch("http://localhost:5189/api/Ngo/ngos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!ngos.ok) {
      throw new Error("Failed to fetch NGOs");
    }

    const fetchedNgos = await ngos.json();
    return fetchedNgos;
  } catch (error) {
    return NextResponse.json(
      { error, err: "Ngo creation failed" },
      { status: 500 }
    );
  }
};
