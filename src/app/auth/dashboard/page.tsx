import { auth } from "@/lib/auth";

const Dashboard = async () => {
  const session = await auth();
  const stats = [
    { label: "Total NGOs", value: 128 },
    { label: "Active Grants", value: 42 },
    { label: "Applications", value: 311 },
  ];

  if (!session?.user) {
    return <div>You must be signed in</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div>
        <h1>Welcome, {session.user.firstName}!</h1>
        <p>Email: {session.user.email}</p>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">NGO Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-indigo-600 mt-1">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Activity
        </h2>
        <ul className="divide-y divide-gray-100">
          <li className="py-3 flex justify-between text-sm">
            <span>Green Future Foundation registered</span>
            <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="py-3 flex justify-between text-sm">
            <span>Grant application submitted by Youth Impact</span>
            <span className="text-gray-400">5 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
