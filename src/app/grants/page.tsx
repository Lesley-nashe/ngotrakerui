import GrantCompoent from "@/components/grantComponent";
import Link from "next/link";

type NgoDetails = {
  name: string;
  location: string;
  mission: string;
};

const grants = [
  {
    name: "Green Africa",
    location: "Kenya",
    mission: "Promoting sustainable agriculture.",
  },
  {
    name: "Future Girls",
    location: "Zimbabwe",
    mission: "Empowering young women through education.",
  },
  {
    name: "Green Africa",
    location: "Kenya",
    mission: "Promoting sustainable agriculture.",
  },
  {
    name: "Future Girls",
    location: "Zimbabwe",
    mission: "Empowering young women through education.",
  },
  {
    name: "Green Africa",
    location: "Kenya",
    mission: "Promoting sustainable agriculture.",
  },
  {
    name: "Future Girls",
    location: "Zimbabwe",
    mission: "Empowering young women through education.",
  },
] as NgoDetails[];

const grantsFetch = async () => {
  const grants = await fetch("http://localhost:5189/api/Grant/grants", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!grants.ok) {
    throw new Error("Failed to fetch the grants");
  }
  const fetchedGrants = grants.json();
  return fetchedGrants;
};

const fetchAndLog = async () => {
  const data = await grantsFetch();
  console.log(data);
};

fetchAndLog();

const GrantListPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered Grants
        </h1>
        <Link
          className="bg-indigo-600 text-white px-4 py-4 rounded-lg hover:bg-indigo-700 transition"
          href={`/grants/create`}
        >
          Submit NGO
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grants.map((grant, i) => (
          <Link key={i} href={`/grants/create`}>
            <GrantCompoent
              name={grant.name}
              location={grant.location}
              mission={grant.mission}
              key={i}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GrantListPage;
