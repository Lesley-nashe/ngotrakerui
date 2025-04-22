type NgoDetails = {
  name: string;
  location: string;
  mission: string;
};

const ngoId = "id";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let ngo: NgoDetails = {
  name: "",
  location: "",
  mission: "",
};

try {
  const fetchNgo = async (id: string) => {
    const ngo = await fetch(`http://localhost:5189/api/Ngo/ngo?Id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!ngo.ok) {
      throw new Error("Failed to fetch NGOs");
    }

    const fetchedNgo = ngo.json();
    return fetchedNgo;
  };

  const fetchAndLog = async (id: string) => {
    const data = await fetchNgo(id);
    ngo = data.result.map(
      (item: { name: string; country: string; mission: string }) => {
        return {
          name: item.name,
          location: item.country,
          mission: item.mission,
        };
      }
    );
  };

  fetchAndLog(ngoId);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  throw new Error(error);
}
const CreateNGO = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 col-1">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Registered NGOs
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Register New NGO
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NGO Name
              </label>
              <input
                type="text"
                placeholder="e.g. Clean Water Initiative"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  City/Town
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Registration Num
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Sector
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div className=" w-full">
                <label className="block text-sm font-medium text-gray-700">
                  PhoneNumber
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="What is your organization’s mission?"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit NGO
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNGO;
