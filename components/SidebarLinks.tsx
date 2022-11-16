import React, {ReactNode} from "react";
import {useRouter} from "next/router";
interface Iprops {
    icon: ReactNode;
    label:string;
    href:string;
}

export default function SidebarLinks({href, icon, label}: Iprops) {
    const {pathname} = useRouter();
    const style = href===pathname
        ? "relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
        : "group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300";
    return (
            <li>
                <a
                    href={href}
                    aria-label="dashboard"
                    className={style}
                >
                    {icon}
                    <span className="-mr-1 font-medium">{label}</span>
                </a>
            </li>
    )
}