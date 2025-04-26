// lib/fetchApplicationsClient.ts

import { ApplicationsType } from "@/lib/utils";

export const fetchApplicationsClient = async (): Promise<
  ApplicationsType[]
> => {
  try {
    const res = await fetch("/api/applications", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to fetch applications");

    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};




