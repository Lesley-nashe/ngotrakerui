import React, { useState } from "react";
import { Gear } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";

function UserSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleMenu}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Gear size={22} weight="light" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-10 bottom-full w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          onMouseLeave={closeMenu}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={closeMenu}
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={closeMenu}
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={closeMenu}
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSettings;

