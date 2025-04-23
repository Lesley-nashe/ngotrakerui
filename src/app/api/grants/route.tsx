import { NextResponse } from "next/server";

type FormData = {
  title: string;
  provider: string;
  amount: number;
  currency: string;
  description: string;
  eligibility: string;
  email: string;
  phoneNumber: string;
};

export type GrantType = {
  amount: number;
  contactPhone: string;
  createdAt: string;
  currency: string;
  deadline: string;
  description: string;
  eligibility: string;
  id: string;
  provider: string;
  status: string;
  title: string;
};

export async function UpdateGrantRequest(Options: FormData) {
  try {
    const {
      title,
      provider,
      amount,
      currency,
      description,
      eligibility,
      email,
      phoneNumber,
    } = Options;

    const res = await fetch("http://localhost:5189/api/Grant/grant", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        provider,
        amount,
        currency,
        description,
        eligibility,
        email,
        phoneNumber,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Grant updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error, err: "Grant updated failed" },
      { status: 500 }
    );
  }
}

export async function CreateGrantRequest(Options: FormData) {
  try {
    const {
      title,
      provider,
      amount,
      currency,
      description,
      eligibility,
      phoneNumber,
    } = Options;

    const res = await fetch("http://localhost:5189/api/Grant/grant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        provider,
        amount,
        currency,
        description,
        eligibility,
        status,
        phoneNumber,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData.message },
        { status: res.status }
      );
    }

    return NextResponse.json({ message: "Grant created successfully" });
  } catch (error) {
    return NextResponse.json(
      { error, err: "Grant creation failed" },
      { status: 500 }
    );
  }
}

export const getGrantRequest = async (id: string) => {
  try {
    const fetchGrant = async () => {
      const grant = await fetch(
        `http://localhost:5189/api/Grant/grant?Id=${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!grant.ok) {
        throw new Error("Failed to fetch Grant");
      }

      const fetchedGrant = grant.json();
      return fetchedGrant;
    };

    const fetchAndLog = async () => {
      const data = await fetchGrant();
      return data.result;
    };

    return await fetchAndLog();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
