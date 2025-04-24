import { NextResponse } from "next/server";

export const fetchApplications = async () => {
  try {
    const applicationsfetch = await fetch(
      "http://localhost:5189/api/Application/applications",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!applicationsfetch.ok) {
      throw new Error("Failed to load appliations");
    }

    return await applicationsfetch.json();
  } catch (error) {
    return NextResponse.json(
      { error, err: "Applications fetch failed" },
      { status: 500 }
    );
  }
};
