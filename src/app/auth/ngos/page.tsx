"use client";

import { GetNgosRequest } from "@/app/api/ngos/route";
import NgoCompoent from "@/components/ngoComponent";
import Link from "next/link";
import { useEffect, useState } from "react";

type NgoDetails = {
  name: string;
  location: string;
  mission: string;
  id: string;
};

const NGOListPage = () => {
  const [ngos, setNgos] = useState<NgoDetails[]>();
  useEffect(() => {
    async function fetchAndLog() {
      const data = await GetNgosRequest();
      setNgos(
        data.result.map(
          (item: {
            name: string;
            country: string;
            mission: string;
            id: string;
          }) => {
            return {
              name: item.name,
              location: item.country,
              mission: item.mission,
              id: item.id,
            } as NgoDetails;
          }
        )
      );
    }
    fetchAndLog();
  }, []);
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered NGOs
        </h1>
        <Link
          className="bg-indigo-600 text-white px-4 py-4 rounded-lg hover:bg-indigo-700 transition"
          href={`ngos/create`}
        >
          Submit Grant
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ngos?.map((ngo, i) => (
          <Link key={i} href={`ngos/${ngo.id}/update`}>
            <NgoCompoent
              name={ngo.name}
              location={ngo.location}
              mission={ngo.mission}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NGOListPage;
