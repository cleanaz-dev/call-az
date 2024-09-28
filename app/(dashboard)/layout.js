"use client"


import { useState } from 'react';
import Link from 'next/link'; // assuming you're using Next.js
import { usePathname } from 'next/navigation';
import {Short_Stack, Anton} from 'next/font/google'
import {  useUser  } from '@clerk/nextjs';



const shortStack = Short_Stack({ 
  subsets: ["latin"],
  weight: "400"
 });
const anton = Anton({
  subsets: ["latin"],
  weight: "400"
 
});

import DashboardLayout from "../../components/DashboardLayout"

export default function layout({ children }) {
  return (
    <div>
      <DashboardLayout >
      {children}
     </DashboardLayout>
    </div>
  )
}
