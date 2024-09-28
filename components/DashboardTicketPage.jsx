"use client";

import React, { useState, useEffect } from "react";
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
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import {
 ArrowRightIcon,
 ChevronRight,
 ExternalLink,
 PlusIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getAllTickets } from "../lib/actions";
import Link from "next/link";
import { ArrowRight } from "solar-icon-set";

export default function DashboardTicketPage() {
 const [tickets, setTickets] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [selectedTicket, setSelectedTicket] = useState(null);

 useEffect(() => {
  const fetchTickets = async () => {
   try {
    const response = await getAllTickets();
    if (response.success) {
     setTickets(response.data);
    } else {
     setError(response.message);
    }
   } catch (error) {
    setError(error.message);
   } finally {
    setLoading(false);
   }
  };
  fetchTickets();
 }, []);

 const statusColors = {
  pending: "text-purple-700",
  unassigned: "text-yellow-700",
  resolved: "text-green-700",
  closed: "text-teal-700",
  open: "text-orange-700",
 };

 const statuses = [
  { label: "Open", key: "open" },
  { label: "Pending", key: "pending" },
  { label: "Resolved", key: "resolved" },
  { label: "Unassigned", key: "unassigned" },
 ];

 if (loading) return <p className="text-blue-700">Loading...</p>;
 if (error) return <p>Error: {error}</p>;

 return (
  <div className="flex flex-col bg-slate-900 w-full">
   <header className="px-6 ">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl text-blue-700 font-bold">
       Tickets {tickets.length}
      </h1>
     </div>
     {/* <div className="flex items-center gap-4">
      <Button variant="outline">
       <PlusIcon className="w-4 h-4 mr-2" />
       New Ticket
      </Button>
     </div> */}
    </div>
   </header>
   {/* Ticket Overview Section */}
   <section className="bg-slate-800 h-24 mx-6 rounded-md">
   <div className="flex justify-between p-6 gap-4">
  {statuses.map((status) => (
    <div
      key={status.key}
      className="text-white space-x-4 text-center flex flex-col items-center bg-slate-700 flex-1 rounded-md"
    >
      <p
        className={`font-medium text-lg ${
          statusColors[status.key] || "text-gray-700"
        }`}
      >
        {status.label}
      </p>
      <span className="text-lg font-extrabold">
        {
          tickets.filter(
            (ticket) =>
              ticket.status.toLowerCase() === status.label.toLowerCase()
          ).length
        }
      </span>
    </div>
  ))}
</div>
   </section>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6">
     <Card className="w-full bg-slate-800 border-none">
      <CardHeader>
       <CardTitle className="text-blue-700 ">All Tickets</CardTitle>
       <CardDescription className="text-zinc-300">
        View and manage your support tickets.
       </CardDescription>
      </CardHeader>
      <CardContent>
       <Table>
        <TableHeader className="bg-slate-700">
         <TableRow>
          <TableHead className="text-zinc-300">Ticket #</TableHead>
          <TableHead className="text-zinc-300">Caller</TableHead>
          <TableHead className="text-zinc-300">Description</TableHead>
          <TableHead className="text-zinc-300">Status</TableHead>
          <TableHead className="text-zinc-300">Last Updated</TableHead>
          <TableHead className="text-right text-zinc-300">Details</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
         {tickets.map((ticket) => (
          <TableRow
           key={ticket.id}
           className={selectedTicket?.id === ticket.id ? "bg-blue-700/5" : ""}
          >
           <TableCell>
            <div className="flex items-center gap-2">
             <div className="font-medium">
              <Link href={`/tickets/${ticket.id}`}>
               <span className="flex items-center font-bold underline text-white hover:text-blue-700 transition-all duration-300">
                {ticket.id} <ExternalLink size={15} className="ml-1" />
               </span>
              </Link>
             </div>
            </div>
           </TableCell>
           <TableCell className="text-zinc-300">
            <div className="flex flex-col">
             <span>{ticket.Call?.callerName}</span>
            </div>
           </TableCell>
           <TableHead className="text-zinc-300">{ticket.description}</TableHead>
           <TableCell>
            <span
             className={`font-medium ${
              statusColors[ticket.status.toLowerCase()] || "text-gray-700"
             }`}
            >
             {ticket.status}
            </span>
           </TableCell>
           <TableCell className="text-zinc-300">
            {new Date(ticket.updatedAt).toLocaleString()}
           </TableCell>
           <TableCell className="text-right">
            <Button
             variant="outline"
             size="icon"
             onClick={() => setSelectedTicket(ticket)}
             className=" hover:bg-slate-500 transition-colors duration-300 border-none bg-transparent"
            >
             <ArrowRight color="#ffffff" />
            </Button>
           </TableCell>
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </CardContent>
     </Card>

     {selectedTicket && (
      <Card className="w-full bg-slate-800 border-none">
       <CardHeader>
        <CardTitle>
         <span className="text-blue-700">Ticket Details</span>{" "}
        </CardTitle>
        <CardDescription>
         <span className="text-zinc-300">
          View more information about the selected ticket.
         </span>
        </CardDescription>
       </CardHeader>
       <CardContent>
        <div className="grid gap-4">
         <div>
          <div className="font-medium text-white">Ticket #</div>
          <div className="text-zinc-300">{selectedTicket.id}</div>
         </div>
         <div>
          <div className="font-medium text-white">Description</div>
          <div className="text-zinc-300">{selectedTicket.description}</div>
         </div>
         <div>
          <div className="font-medium text-white">Assignted To</div>
          <div className="text-zinc-300">
           {selectedTicket.assignedTo ?? "Ticket Not Assigned"}
          </div>
         </div>
         <div>
          <div className="font-medium text-white">Date Created</div>
          <div className="text-zinc-300">
           {new Date(selectedTicket.createdAt).toLocaleDateString()}
          </div>
         </div>
         <div>
          <div className="font-medium text-white">Last Updated</div>
          <div className="text-zinc-300">
           {new Date(selectedTicket.updatedAt).toLocaleString()}
          </div>
         </div>
         {/* <div>
          <div className="font-medium">Notes</div>
          {selectedTicket.Note.length > 0 ? (
            <ul className="list-disc pl-5">
              {selectedTicket.Note.map(note => (
                <li key={note.id} className="text-muted-foreground">
                  {note.content}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-muted-foreground">
              No notes available for this ticket.
            </div>
          )}
        </div> */}
        </div>
       </CardContent>
      </Card>
     )}
    </main>
   </ScrollArea>
  </div>
 );
}
