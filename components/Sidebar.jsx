"use client";

import { PanelRight } from "lucide-react";
import {
 HomeIcon,
 PhoneCallIcon,
 Settings,
 TicketIcon,
 LayoutDashboard,
} from "lucide-react";
import {} from "next/font/goggle"
import Link from "next/link";
import React, { useState, useEffect } from "react";

const links = [
 { name: "Home", href: "/", icon: <HomeIcon /> },
 { name: "Calls", href: "/calls", icon: <PhoneCallIcon /> },
 { name: "Tickets", href: "/tickets", icon: <TicketIcon /> },
 { name: "Settings", href: "/settings", icon: <Settings /> },
];

export default function Sidebar() {
 const [sideBarOpen, setSideBarOpen] = useState(true);
 const toggleSideBar = () => {
  setSideBarOpen(!sideBarOpen);
 };
 return (
  <div className="relative">
   <div
    className={`h-screen w-auto ${
     sideBarOpen ? "translate-x-0" : "-translate-x-60"
    } bg-accent transition-transform duration-300`}
   >
    <div className="flex py-4 px-6 gap-2 items-center">
     <Link
      href="/home"
      className="flex items-center text-lg font-semibold"
      prefetch={false}
     >
      <Image src={LogoImg} width={50} height={50} alt="logo" />
      <span>Call Center AI</span>
     </Link>
     <button
      className="hover:text-slate-50 transition-colors duration-300"
      onClick={toggleSideBar}
     >
      <PanelRight />
     </button>
    </div>
    <div className="gap-4 py-4 px-8 items-center">
     {links.map((link, index) => (
      <Link href={link.href} key={index}>
       <div className="flex items-center gap-2 mb-4 p-2 rounded-xl hover:bg-secondary hover:text-slate-50">
        {link.icon}
        <p className="text-sm">{link.name}</p>
       </div>
      </Link>
     ))}
    </div>
   </div>
   {!sideBarOpen ? (
    <button
     className="absolute top-4 left-4 p-2 bg-accent rounded-full hover:bg-secondary transition-colors duration-300"
     onClick={toggleSideBar}
    >
     <PanelRight />
    </button>
   ) : null}
  </div>
 );
}
