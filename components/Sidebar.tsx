import React from "react";
import SidebarLinks from "./SidebarLinks";
import DashboardIcon from "./icons/DashboardIcon";
import FolderIcon from "./icons/FolderIcon";

export default function Sidebar() {
    return (
        <aside
            className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
        >
            <div>

                <div className="mt-8 text-center">
                    <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">Cynthia
                        J.
                        Watts</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>
                <ul className="mt-8 space-y-2 tracking-wide">
                    <SidebarLinks href="/" icon={<DashboardIcon/>} label='Dashboard'/>
                    <SidebarLinks href="/trending" icon={<FolderIcon/>} label='Catégorie'/>
                </ul>
            </div>

            <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
                <button
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </button>
            </div>
        </aside>
    )
}