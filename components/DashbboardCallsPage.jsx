"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ArrowRight, User, Phone, CalendarDate, ClockCircle } from "solar-icon-set";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
} from "./ui/card";
import {
 Table,
 TableHeader,
 TableRow,
 TableHead,
 TableBody,
 TableCell,
} from "./ui/table";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { getAllCalls } from "../lib/actions";
import NewCallDialog from "./NewCallDialog";
import { motion } from "framer-motion";

import ReactPlayer from "react-player";

const tableData = [
 {
  id: 1,
  name: "John Doe",
  email: "johndoe@yahoo.com",
  date: "10/08/2020",
  sale: 120,
  status: "Complete",
  register: "5 min ago",
  progress: "40%",
  position: "Developer",
  office: "London",
 },
 {
  id: 2,
  name: "Shaun Park",
  email: "shaunpark@gmail.com",
  date: "11/08/2020",
  sale: 400,
  status: "Pending",
  register: "11 min ago",
  progress: "23%",
  position: "Designer",
  office: "New York",
 },
 {
  id: 3,
  name: "Alma Clarke",
  email: "alma@gmail.com",
  date: "12/02/2020",
  sale: 310,
  status: "In Progress",
  register: "1 hour ago",
  progress: "80%",
  position: "Accountant",
  office: "Amazon",
 },
 {
  id: 4,
  name: "Vincent Carpenter",
  email: "vincent@gmail.com",
  date: "13/08/2020",
  sale: 100,
  status: "Canceled",
  register: "1 day ago",
  progress: "60%",
  position: "Data Scientist",
  office: "Canada",
 },
];

export default function DashboardCallsPage() {
 const [calls, setCalls] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [selectedCall, setSelectedCall] = useState(null);
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
  setIsMounted(true);
 }, []);

 useEffect(() => {
  const fetchCalls = async () => {
   try {
    const response = await getAllCalls();
    if (response.success) {
     setCalls(response.data);
    } else {
     setError(response.message);
    }
   } catch (error) {
    setError(error.message);
   } finally {
    setLoading(false);
   }
  };

  fetchCalls();
 }, []);

 if (loading) return <p className="text-blue-700">Loading...</p>;
 if (error) return <p>Error: {error}</p>;
 console.log(calls);
 return (
  <div className="flex flex-col min-h-screen bg-slate-900 rounded-sm">
   <header className="px-6 bg-transparent">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-xl text-blue-700 font-bold">Calls {calls.length}</h1>
     </div>
     <div className="flex items-center gap-4">
      <NewCallDialog />
     </div>
    </div>
   </header>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6 ">
     {/* Logged Calls */}
     <Card className="w-full bg-slate-800 border-none">
      <CardHeader>
       <CardTitle className="text-blue-700">Logged Calls</CardTitle>
       <CardDescription className="text-zinc-400">View details of your customer calls.</CardDescription>
      </CardHeader>
      <CardContent>
       <Table>
        <TableHeader className="bg-slate-700">
         <TableRow>
          <TableHead className="text-zinc-400">Caller</TableHead>
          <TableHead className="text-zinc-400">Date/Time</TableHead>
          <TableHead className="text-zinc-400">Duration</TableHead>
          <TableHead className="text-zinc-400">Ticket #</TableHead>
          <TableHead className="text-right text-zinc-400">View</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
         {calls.map((call) => (
          <TableRow
           key={call.id}
           className={selectedCall?.id === call.id ? "bg-blue-700/5" : ""}
          >
           <TableCell>
            <div className="font-medium text-white">{call.callerName}</div>
            <div className="text-zinc-400">{call.callerPhone}</div>
           </TableCell>
           <TableCell className="text-white">
            {new Date(call.createdAt).toLocaleString()}
           </TableCell>
           <TableCell className="text-white text-center">
            {call.length} s
           </TableCell>
           <TableCell className="text-white">
            {call.ticket.length > 0 ? call.ticket[0].id : "N/A"}
           </TableCell>
           <TableCell className="text-right">
            <Button
             variant="outline"
             size="icon"
             onClick={() =>
              setSelectedCall((prevCall) => (prevCall === call ? null : call))
             }
             className="hover:bg-slate-500 transition-colors duration-300 border-none bg-transparent"
            >
             <ArrowRight size={20} color="#ffffff" />

             <span className="sr-only">View call details</span>
            </Button>
           </TableCell>
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </CardContent>
     </Card>
     <motion.div
      className="w-full"
      initial={{ opacity: 0 }} // Card starts invisible
      animate={{ opacity: selectedCall ? 1 : 0 }} // Fade in when selectedCall is true, fade out when false
      transition={{ duration: 1, ease: "easeInOut" }} // 1 second duration
     >
      {selectedCall && (
       <Card className="w-full bg-slate-800 border-none">
        <CardHeader>
         <CardTitle className="text-blue-700">Call Details</CardTitle>
         <CardDescription className="text-zinc-400">
          View information about the selected call.
         </CardDescription>
        </CardHeader>
        <CardContent>
         <div className="grid gap-4 ">
          <div className="bg-slate-700 p-4 rounded-sm">
           <div className="mb-2">
            <div className="font-extrabold text-lg text-white mb-2 border-b">Caller</div>
            <div className="flex text-white items-center gap-2"><User />{selectedCall?.callerName}</div>
            <div className="flex text-zinc-400 items-center gap-2">
             <Phone />{selectedCall.callerPhone}
            </div>
           </div>
           <div className="mb-2">
            <div className="font-bold text-white">Call Time</div>
            <div className="flex text-zinc-400 items-center gap-2"><CalendarDate />{new Date(selectedCall.createdAt).toLocaleString()}</div>
           </div>
           <div className="mb-2">
            <div className="font-bold text-white">Call Duration</div>
            <div className="flex text-zinc-400 items-center gap-2"><ClockCircle />{selectedCall.length} seconds</div>
           </div>
           <div className="mb-2">
            <div className="font-bold text-white">Summary</div>
            <div className="text-zinc-200">
             {selectedCall.ticket[0].summary}
            </div>
           </div>
          </div>

          <Separator />

          <div className="">
           
           <ScrollArea className="h-auto rounded-md bg-slate-700">
            <div className="p-4">
            <h1 className="font-extrabold text-lg text-white mb-2 border-b">Call Transcript</h1>
            <div className="text-base">
             {selectedCall.transcripts.split("\n").map((line, index) => (
              <p key={index} className="text-white">{line}</p>
             ))}
            </div>
            </div>
           </ScrollArea>
          </div>
          <div className="font-bold text-white">Playback</div>
          <div>
           {selectedCall?.recordingUrl ? (
            <ReactPlayer
             url={selectedCall.recordingUrl}
             controls={true}
             height="50px"
             width="100%"
             wrapper="div"
             volume={0.3}
            />
           ) : (
            <div>No recording</div>
           )}
          </div>
          <div>
           <div className="font-bold text-white">Ticket Status</div>
           <div className="flex mt-2">
            <Badge variant="secondary">In Progress</Badge>
            <Link href={`/tickets/${selectedCall.ticket[0].id}`}>
             <span className="ml-2 text-xs hover:underline text-white">View</span>
            </Link>
           </div>
          </div>
         </div>
        </CardContent>
       </Card>
      )}
     </motion.div>
    </main>
   </ScrollArea>
  </div>
 );
}
