import NgoCompoent from "@/components/ngoComponent";

type NgoDetails = {
  name: string;
  location: string;
  mission: string;
};

const ngos = [
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

const NGOListPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Registered NGOs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ngos.map((ngo, i) => (
          <NgoCompoent
            name={ngo.name}
            location={ngo.location}
            mission={ngo.mission}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default NGOListPage;
