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
    <aside className="sticky w-64 bg-white shadow-md border-r hidden md:block">
      <div className="p-6 text-2xl font-bold text-indigo-600">NGO Tracker</div>
      <nav className="mt-8 space-y-2">
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
