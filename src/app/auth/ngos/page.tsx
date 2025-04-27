"use client";

import NgoCompoent from "@/components/ngoComponent";
import { fetchNgosClient } from "@/lib/ngos/fetchNgosClient";
import { NgoType } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const NgoListPage = () => {
  const [ngos, setNgos] = useState<NgoType[]>();
  useEffect(() => {
    async function fetchAndAssign() {
      const data = await fetchNgosClient();
      setNgos(data);
    }
    fetchAndAssign();
  }, []);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered NGOs
        </h1>
        <Link
          className="flex justify-center align-center bg-indigo-600 text-white h-10 py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          href={`ngos/create`}
        >
          Submit NGO
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ngos?.map((ngo, i) => (
          <Link key={i} href={`ngos/${ngo.id}/update`}>
            <NgoCompoent
              name={ngo.name}
              country={ngo.country}
              mission={ngo.description}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NgoListPage;
