import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Dashboard", path: "/auth/dashboard" },
    { name: "NGOs", path: "/auth/ngos" },
    { name: "Grants", path: "/auth/grants" },
    { name: "Applications", path: "/auth/applications" },
  ];
  return (
      <aside className="w-64 h-full bg-white shadow-md border-r">
        <div className="px-6 py-4 text-2xl font-bold text-indigo-600">
          NGO Tracker
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-6 py-3 rounded-lg transition ${
                pathname === item.path
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
  );
};
export default Sidebar;
