import GrantCompoent from "@/components/grantComponent";

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
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Registered Grants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {grants.map((grant, i) => (
          <GrantCompoent
            name={grant.name}
            location={grant.location}
            mission={grant.mission}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default GrantListPage;
