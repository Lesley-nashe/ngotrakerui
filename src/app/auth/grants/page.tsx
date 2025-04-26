"use client";
import GrantCompoent from "@/components/grantComponent";
import { fetchGrantsClient } from "@/lib/grants/fetchGrantsClient";
import { GrantType } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const GrantListPage = () => {
  const [grants, setGrants] = useState<GrantType[]>();
  useEffect(() => {
    async function fetchAndAssign() {
      const data = await fetchGrantsClient();
      setGrants(data);
    }
    fetchAndAssign();
  }, []);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered Grants
        </h1>
        <Link
          className="bg-indigo-600 text-white px-4 py-4 rounded-lg hover:bg-indigo-700 transition"
          href={`grants/create`}
        >
          Submit NGO
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grants?.map((grant, i) => (
          <Link key={i} href={`grants/${grant.id}/update`}>
            <GrantCompoent
              title={grant.title}
              provider={grant.provider}
              description={grant.description}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GrantListPage;
