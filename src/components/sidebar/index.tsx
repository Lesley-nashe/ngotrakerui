import {
  Bank,
  BuildingOffice,
  House,
  LampPendant,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserSettings from "../user";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Dashboard",
      path: "/auth/dashboard",
      icon: <House size={22} weight="fill" />,
    },
    {
      name: "NGOs",
      path: "/auth/ngos",
      icon: <BuildingOffice size={22} weight="fill" />,
    },
    {
      name: "Grants",
      path: "/auth/grants",
      icon: <Bank size={22} weight="fill" />,
    },
    {
      name: "Applications",
      path: "/auth/applications",
      icon: <LampPendant size={22} weight="fill" />,
    },
  ];
  return (
    <aside className="grid grid-cols-1 w-64 h-full bg-white shadow-md border-r content-between">
      <div className="">
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
              <p className="flex flex-row gap-2">
                <span>{item.icon}</span>
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      <div className="grid grid-col">
        <hr />
        <div className="flex flex-row justify-between px-6 py-4">
          <div className="flex flex-col">
            <h1 className="font-bold">Admin User</h1>
            <p className="text-sm">Admin</p>
          </div>
          <div className="mt-3">
            {/* <Gear size={22} weight="light" /> */}
            <UserSettings />
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
