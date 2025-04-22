"use client";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 bg-white border-b p-4 flex items-center justify-between shadow-sm z-10">
      <h1 className="text-xl font-semibold text-gray-800">
        {session?.user?.role}
      </h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">{session?.user.userName}</span>
        {/* <img
              src="/avatar.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border"
            /> */}
      </div>
    </header>
  );
};

export default Navbar;
