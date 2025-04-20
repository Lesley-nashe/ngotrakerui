import { FC } from "react";

type GrantDetails = {
  name: string;
  location: string;
  mission: string;
};

const GrantCompoent: FC<GrantDetails> = ({name, location, mission}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
      <h2 className="text-xl font-semibold text-indigo-600">{name}</h2>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="mt-2 text-gray-700 text-sm">{mission}</p>
    </div>
  );
};

export default GrantCompoent;

