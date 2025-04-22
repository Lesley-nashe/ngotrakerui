import NgoCompoent from "@/components/ngoComponent";
import Link from "next/link";

type NgoDetails = {
  name: string;
  location: string;
  mission: string;
};

let ngos = [] as NgoDetails[];
try {
  const fetchNgos = async () => {
    const ngos = await fetch("http://localhost:5189/api/Ngo/ngos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!ngos.ok) {
      throw new Error("Failed to fetch NGOs");
    }

    const fetchedNgos = ngos.json();
    return fetchedNgos;
  };

  const fetchAndLog = async () => {
    const data = await fetchNgos();
    ngos = data.result.map(
      (item: { name: string; country: string; mission: string }) => {
        return {
          name: item.name,
          location: item.country,
          mission: item.mission,
        };
      }
    );
  };

  fetchAndLog();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  throw new Error(error);
}

const NGOListPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered NGOs
        </h1>
        <Link
          className="bg-indigo-600 text-white px-4 py-4 rounded-lg hover:bg-indigo-700 transition"
          href={`/grants/create`}
        >
          Submit Grant
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ngos.map((ngo, i) => (
          <Link key={i} href={`/ngos/create`}>
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
