// lib/fetchNgoClient.tsx

import { NgoFormData, NgoType } from "@/lib/utils";

export const fetchNgosClient = async (): Promise<NgoType[]> => {
  try {
    const res = await fetch("/api/ngos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to fetch ngos");

    const data = await res.json();
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};

export const SendNgosClient = async (item: NgoFormData) => {
  try {
    const res = await fetch("/api/ngo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...item,
        website: "https://website.com",
        logoUrl: "https://logourl.com",
        verified: true,
      }),
    });

    return res.ok;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};
