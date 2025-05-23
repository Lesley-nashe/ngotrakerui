"use client";
import GrantCompoent from "@/components/grantComponent";
import LoadingSpinner from "@/components/loadingSpinner";
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
          <p className="hidden md:block">Registered Grants</p>
          <p className="block md:hidden">Grants</p>
        </h1>
        <Link
          className="flex justify-center align-center bg-indigo-600 text-white h-10 py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          href={`grants/create`}
        >
          <p className="hidden md:block">+ Add Grant</p>
          <p className="block md:hidden">+</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!grants ? (
          <LoadingSpinner />
        ) : (
          grants.map((grant, i) => (
            <Link key={i} href={`grants/${grant.id}/update`}>
              <GrantCompoent
                title={grant.title}
                provider={grant.provider}
                description={grant.description}
                key={i}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default GrantListPage;
