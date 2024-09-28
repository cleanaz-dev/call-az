"use client";

import { UserButton } from "@clerk/nextjs";

import React from "react";
import Logo from "../public/logo1.png";
import Image from "next/image";

import {
 DoubleAltArrowLeft,
 PhoneCalling,
 MenuDotsSquare,
 TickerStar,
 ChartSquare,
 ChatDots,
 SettingsMinimalistic,
 UserCheck,
 Settings,
 Bell
} from "solar-icon-set";

const navItems = [
 {
  label: "Calls",
  href: "/calls",
  icon: <PhoneCalling size={25} className="text-blue-300"/>,
 },
 {
  label: "Tickets",
  href: "/tickets",
  icon: <TickerStar size={25}  />,
 },
 {
  label: "Analytics",
  href: "/analytics",
  icon: <ChartSquare size={25}  />,
 },
 { label: "Chat", href: "/chat", icon: <ChatDots size={25} /> },
];

const settingItems = [
 { label: "Account Settings", href: "/account-settings", icon: <Settings size={25} /> },
 { label: "Profile", href: "/profile", icon: <UserCheck size={25} /> },
];

const barNavItems = [
  ...navItems
]

export default function DashboardLayout({ children }) {
 const [sidebarOpen, setSidebarOpen] = React.useState(true);

 return (
  <div className="w-screen h-screen flex overflow-hidden">
   {/* Sidebar */}
   <div
    className={`${
     sidebarOpen ? "w-60" : "w-0"
    } bg-slate-800 flex-shrink-0 h-full transition-[width] duration-300 overflow-hidden`}
   >
    <div
     className={`h-full w-60 overflow-y-auto ${
      sidebarOpen ? "opacity-100" : "opacity-0"
     } transition-opacity duration-300`}
    >
     {/* Sidebar content */}
     <div className="flex flex-col h-full">
      <div className="flex p-4 items-center justify-between">
       <div className="flex gap-2 items-center text-white">
        <Image src={Logo} height={45} width={45} className="object-conatin" />
        <h1 className="text-2xl text-white font-bold whitespace-nowrap">
         Call AZ AI
        </h1>
       </div>
       <div
        className="text-white hover:animate-pulse cursor-pointer "
        onClick={() => setSidebarOpen(!sidebarOpen)}
       >
        <DoubleAltArrowLeft
         size={24}
         className="hover:bg-slate-600/50 rounded-lg m-1 "
        />
       </div>
      </div>
      <div className="flex-grow overflow-y-auto">
       {/* Sidebar Title */}
       <div className="flex gap-2 px-4 py-2 bg-slate-600/50 mb-4">
        <h1 className="text-xl">Dashboard</h1>
       </div>
       {/* Sidebar Nav */}
       {navItems.map((navItem, index) => (
        <div className="px-2" key={index}>
         <a
          href={navItem.href}
          className="flex gap-4 items-center p-2 hover:bg-slate-700 hover:text-white rounded-sm text-blue-700"
         >
          {navItem.icon}
          <span className="text-sm text-white">{navItem.label}</span>
         </a>
        </div>
       ))}
       {/* Sidebar Title */}
       <div className="flex gap-2 px-4 py-2 bg-slate-600/50 mb-4 mt-4">
        <h1 className="text-xl">Settings</h1>
       </div>
       {settingItems.map((settingItem, index) => (
        <div className="px-2" key={index}>
         <a
          href={settingItem.href}
          className="flex gap-4 items-center p-2 hover:bg-slate-700 hover:text-white rounded-sm text-blue-700"
         >
          {settingItem.icon}
          <span className="text-sm text-white">{settingItem.label}</span>
         </a>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
   {/* Main content area */}
   <div
    className="flex flex-col flex-grow h-full transition-all duration-300"
    style={{ width: `calc(100% - ${sidebarOpen ? "15rem" : "0rem"})` }}
   >
    {/* Topbar */}
    <div className="h-20 bg-slate-800 w-full flex items-center px-4 justify-between">
     <div className="flex items-center">
      {!sidebarOpen && (
       <div className="flex items-center mr-4">
        <div className="flex gap-2 items-center text-white">
         <Image src={Logo} height={45} width={45} className="object-conatin" />
         <h1 className="text-2xl text-white font-bold whitespace-nowrap">
          Call AZ AI
         </h1>
        </div>
        <div
         className="ml-4 cursor-pointer text-white"
         onClick={() => setSidebarOpen(!sidebarOpen)}
        >
         <MenuDotsSquare size={30} className="mt-2 hover:animate-pulse" />
        </div>
       </div>
      )}
      <div className=" gap-4 text-slate-500 coursor-pointer hidden md:flex ">
      {barNavItems.map((items, index) => (
        <div key={index}>
         <a
          href={items.href}
          className={`text-sm hover:underline hover:underline-offset-4 ${
            items.href === window.location.pathname? "text-white" : "text-slate-500"
          }`}
         >
          {items.label}
         </a>
        </div>
      ))}
      
      </div>
     </div>
     <div className="flex gap-2 items-center">
      <Bell size={25} className="bg-slate-600 p-0.5 rounded-md"/>
      <UserButton />
     </div>
    </div>

    {/* Main content */}
    <div className="flex-grow bg-slate-900 overflow-auto p-4">{children}</div>
   </div>
  </div>
 );
}
