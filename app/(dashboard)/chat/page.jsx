"use client";
import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "solar-icon-set";
import ChatImg from "../../../public/chat-img.svg";
import Image from "next/image";

export default function page() {
 return (
  <div className="relative flex h-full m-4">
   <div className="bg-slate-800 p-4 rounded-md w-full">
    <div className="flex mb-4">
     <HamburgerMenu size={24} color="#1D4ED8" className="animate-pulse"/>
     <div className="flex items-center gap-2">
      <Image src={ChatImg} height={500} width={500} className="object-cover" />
     </div>
    </div>
    {/* Add your chat content here */}
   </div>
  </div>
 );
}
