import { GrantFormData, GrantType } from "../utils";

export const fetchGrantsClient = async (): Promise<GrantType[]> => {
  try {
    const res = await fetch("/api/grants", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to fetch grants");

    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};

export const SendGrantsClient = async (item: GrantFormData) => {
  try {
    const res = await fetch("/api/grants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: item.title,
        provider: item.provider,
        amount: item.amount,
        currency: item.currency,
        description: item.description,
        eligibility: item.eligibility,
        contactPhone: item.phoneNumber,
        status: "pending",
      }),
    });

    return res.ok;
  } catch (error) {
    console.error("Client fetch error:", error);
    return [];
  }
};

export const fetchGrantClient = async (id: string): Promise<GrantType> => {
  try {
    const res = await fetch(`/api/grants/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to fetch grant");

    const data = await res.json();
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error("Client fetch error:", error);
    throw Error;
  }
};

export const UpdateGrantClient = async (id: string, item: GrantFormData) => {
  try {
    const res = await fetch(`/api/grants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: item.title,
        provider: item.provider,
        amount: item.amount,
        currency: item.currency,
        description: item.description,
        eligibility: item.eligibility,
        contactPhone: item.phoneNumber,
        status: "pending",
      }),
    });
    if (!res.ok) throw new Error("Failed to fetch grants");

    const data = await res.json();
    console.log(data.result);
    return data.result;
  } catch (error) {
    console.error("Client fetch error:", error);
    throw Error;
  }
};
