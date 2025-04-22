import { NextResponse } from "next/server";

type FormData = {
  name: string;
  address: string;
  country: string;
  registrationNumber: string;
  description: string;
  email: string;
  phoneNumber: string;
  sector: string;
};

export async function UpdateNgoRequest(Options: FormData) {
  try {
    const {
      name,
      address,
      country,
      registrationNumber,
      email,
      phoneNumber,
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
        email,
        phoneNumber,
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
      email,
      phoneNumber,
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
        contactEmail: email,
        contactPhone: phoneNumber,
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

export const getNgoRequest = async (id: string) => {
  try {
    const fetchNgo = async () => {
      const ngo = await fetch(`http://localhost:5189/api/Ngo/ngo?Id=${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!ngo.ok) {
        throw new Error("Failed to fetch NGOs");
      }

      const fetchedNgo = ngo.json();
      return fetchedNgo;
    };

    const fetchAndLog = async () => {
      const data = await fetchNgo();
      return data;
    };

    return await fetchAndLog();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
