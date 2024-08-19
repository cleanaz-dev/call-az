"use client"


import { useState } from 'react';
import Link from 'next/link'; // assuming you're using Next.js
import { usePathname } from 'next/navigation';
import { HomeIcon, PhoneCallIcon, TicketIcon, FileTerminal, Settings, Users2, LayoutDashboard, PanelRight, PhoneForwarded   } from 'lucide-react';
import LogoImg from '../../public/logo.png';
import {Short_Stack, Anton} from 'next/font/google'
import Image from 'next/image'
import { UserButton, useUser  } from '@clerk/nextjs';



const shortStack = Short_Stack({ 
  subsets: ["latin"],
  weight: "400"
 });
const anton = Anton({
  subsets: ["latin"],
  weight: "400"
 
});
const links = [
  { name: 'Home', href: '/home', icon: <HomeIcon /> },
  { name: 'Calls', href: '/calls', icon: <PhoneCallIcon /> },
  { name: 'Tickets', href: '/tickets', icon: <TicketIcon /> },
  { name: 'Agents', href: '/agents', icon: <Users2 /> },
  {name: 'Scripts', href: '/scripts', icon: <FileTerminal /> },
  { name: 'Settings', href: '/settings', icon: <Settings /> },
  
]
function Sidebar({ sideBarOpen, toggleSideBar }) {
const { user } = useUser();


const pathname = usePathname();
  return (
    <div className="relative">
    <div className={`h-screen w-auto flex flex-col ${sideBarOpen ? 'translate-x-0' : '-translate-x-60' } bg-accent transition-transform duration-500 justify-between`}>
      <div className='flex pt-6 px-4 gap-2 items-center '>
      <Link href="/" className="flex items-center " prefetch={false}>
            <PhoneForwarded size="40" className='p-1 rounded-xl border-2 border-secondary text-secondary bg-white'/>
            <p className={`${anton.className} text-xl font-semibold mx-2 tracking-widest`}>CALL AZ <span className='text-secondary'>AI</span></p>
          </Link>
          
        <button className='hover:text-slate-50 transition-colors duration-300 pb-0.5' onClick={toggleSideBar}>
          <PanelRight className='animate-pulse ring-1 rounded hover:animate-none '/>
        </button>
      </div>
      <div className='flex-1 gap-4 py-4 px-8 '>
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <div className={`flex items-center gap-2 mb-2 p-2 rounded-xl hover:bg-secondary hover:text-white hover:translate-x-2 transition-all duration-100 ${pathname.startsWith(link.href) ? 'bg-secondary text-white' : ''}`}>
              {link.icon}
              <p className='text-sm '>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className='mt-auto py-4 px-8 items-center flex gap-2 hover:bg-primary transition-all duration-300'>
     
      <UserButton /> {user?.firstName}
      
      </div>
      
    </div>
    {!sideBarOpen ? (
      <button
        className="absolute top-6 left-4 p-2 bg-accent rounded-full hover:bg-secondary transition-colors duration-300"
        onClick={toggleSideBar}
      >
        <PanelRight />
      </button>
    ) : null}
  </div>
  );
}

export default function Layout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar sideBarOpen={sideBarOpen} toggleSideBar={toggleSideBar} />
      <div className={`flex-1 transition-all duration-300 ${sideBarOpen ? 'ml-0' : '-ml-40'} w-full`}>
        {children}
      </div>
    </div>
  );
}
