import { FC } from "react";

type GrantDetails = {
  title: string;
  provider: string;
  description: string;
};

const GrantCompoent: FC<GrantDetails> = ({title, provider, description}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
      <h2 className="text-xl font-semibold text-indigo-600">{title}</h2>
      <p className="text-gray-500 text-sm">{provider}</p>
      <p className="mt-2 text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default GrantCompoent;

