const applications = [
  {
    ngo: "Hope Foundation",
    grant: "Youth Empowerment",
    status: "Pending",
    date: "2025-04-16",
  },
  {
    ngo: "Tech for All",
    grant: "Digital Literacy",
    status: "Approved",
    date: "2025-04-14",
  },
];

const fetchApplications = async () => {
  const applications = await fetch(
    "http://localhost:5189/api/Application/applications",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!applications.ok) {
    throw new Error("Failed to load appliations");
  }

  const fetchedAppliations = applications.json();
  return fetchedAppliations;
};

const fetchAndLog = async () => {
  const applications = await fetchApplications();
  console.log(applications);
};

fetchAndLog();

const columns = ["ngo", "grant", "status", "date"];

const ApplicationsPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Grant Applications
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-100">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {columns.map((colmun, index) => (
                <th className="px-6 py-4" key={index}>
                  {colmun}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">{app.ngo}</td>
                <td className="px-6 py-4">{app.grant}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsPage;
