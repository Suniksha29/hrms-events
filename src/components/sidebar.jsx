import React from "react";
import hrmsLogo from "../assets/hrms-logo.png";
import userPhoto from "../assets/user-photo.png";
import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CalendarDaysIcon,
  UsersIcon,
  TrophyIcon,
  NewspaperIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Chat", icon: ChatBubbleOvalLeftEllipsisIcon },
    { name: "Events", icon: CalendarDaysIcon, active: true },
    { name: "Employees", icon: UsersIcon },
    { name: "Recognition", icon: TrophyIcon },
    { name: "Feed", icon: NewspaperIcon },
    { name: "Profile", icon: UserCircleIcon },
    { name: "Settings", icon: Cog6ToothIcon },
  ];

  return (
    <aside className="h-screen w-64 bg-sidebar flex flex-col justify-between border-r border-borderLight shadow-soft">
      {/* Logo Section */}
      <div>
        <div className="flex flex-col items-center py-6">
          <img src={hrmsLogo} alt="HRMS Logo" className="h-12 w-auto mb-1" />
          <p className="text-xs text-textSecondary text-center leading-tight">
            Human Resource <br /> Management System
          </p>
        </div>

        {/* Menu */}
        <nav className="mt-6">
          <ul className="space-y-1 list-none p-0 m-0"> {/* IMPORTANT: list-none to remove bullets */}
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center w-full gap-3 px-6 py-2.5 text-sm font-medium rounded-r-full transition-all duration-150 ${
                    item.active
                      ? "bg-activeBg text-primary"
                      : "text-textPrimary hover:bg-activeBg hover:text-primary"
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* User Section */}
      <div className="flex flex-col items-center border-t border-borderLight py-5">
        <img
          src={userPhoto}
          alt="User"
          className="h-12 w-12 rounded-full border-2 border-primary object-cover"
        />
        <p className="mt-2 text-sm font-semibold text-textPrimary">Aisha</p>
        <p className="text-xs text-textSecondary">HR Manager</p>
      </div>
    </aside>
  );
};

export default Sidebar;
