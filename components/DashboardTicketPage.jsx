"use client";

import React, { useState , useEffect } from "react";
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
import { ArrowRightIcon, ChevronRight, ExternalLink, PlusIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getAllTickets } from "../lib/actions";
import Link from "next/link";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
 console.log(tickets)
 
 return (
  <div className="flex flex-col h-screen bg-background w-full">
   <header className="bg-card px-6 py-4">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl text-primary font-bold">Tickets {tickets.length}</h1>
     </div>
     <div className="flex items-center gap-4">
      <Button variant="outline">
       <PlusIcon className="w-4 h-4 mr-2" />
       New Ticket
      </Button>
     </div>
    </div>
   </header>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6">
     <Card className="w-full">
      <CardHeader>
       <CardTitle>All Tickets</CardTitle>
       <CardDescription>View and manage your support tickets.</CardDescription>
      </CardHeader>
      <CardContent>
       <Table>
        <TableHeader>
         <TableRow>
          <TableHead>Ticket #</TableHead>
          <TableHead>Caller</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Details</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
         {tickets.map((ticket) => (
          <TableRow 
            key={ticket.id}
            className={selectedTicket?.id === ticket.id ? "bg-gray-100" : ""}
            >
           <TableCell>
            <div className="flex items-center gap-2">
             <div className="font-medium"><Link href={`/tickets/${ticket.id}`}><span className="flex items-center font-bold underline hover:text-secondary transition-all duration-300">{ticket.id} <ExternalLink size={15} className="ml-1"/></span></Link></div>
            </div>
           </TableCell>
           <TableCell>
            <div className="flex flex-col">
             <span>{ticket.Call?.callerName}</span>
             <span className="text-muted-foreground">
              {ticket.Call?.callerPhone}
             </span>
             <span className="text-muted-foreground">
              {ticket.Call?.callerEmail}
             </span>
            </div>
           </TableCell>
           <TableHead>{ticket.description}</TableHead>
           <TableCell>
            <Badge variant={ticket.status === "Closed" ? "secondary" : "primary"}>
             {ticket.status}
            </Badge>
           </TableCell>
           <TableCell>{new Date(ticket.updatedAt).toLocaleString()}</TableCell>
           <TableCell className="text-right">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setSelectedTicket(ticket)}
              className="hover:bg-primary transition-colors duration-300"
              >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Button>
           </TableCell>
          </TableRow>
         ))}
         
        
        </TableBody>
       </Table>
      </CardContent>
     </Card>

     {selectedTicket && (
     <Card className="w-full">
      <CardHeader>
       <CardTitle>Ticket Details </CardTitle>
       <CardDescription>
        View more information about the selected ticket.
       </CardDescription>
      </CardHeader>
      <CardContent>
       <div className="grid gap-4">
        <div>
         <div className="font-medium">Ticket #</div>
         <div className="text-muted-foreground">{selectedTicket.id}</div>
        </div>
        <div>
         <div className="font-medium">Description</div>
         <div className="text-muted-foreground">{selectedTicket.description}</div>
        </div>
        <div>
          <div className="font-medium">Assignted To</div>
          <div className="text-muted-foreground">{selectedTicket.assignedTo ?? "Ticket Not Assigned"}</div>
        </div>
        <div>
          <div className="font-medium">Date Created</div>
          <div className="text-muted-foreground">{new Date(selectedTicket.createdAt).toLocaleDateString()}</div>
        </div>
         <div>
          <div className="font-medium">Last Updated</div>
          <div className="text-muted-foreground">{new Date(selectedTicket.updatedAt).toLocaleString()}</div>
         </div>
        <Separator />
        <div>
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
        </div>
        <div>
          <div className="font-medium">Resolution Status</div>
          <Badge variant="secondary">{selectedTicket.status}</Badge>
        </div>
      </div>
      </CardContent>
     </Card>
     )}
    </main>
   </ScrollArea>
  </div>
 );
}
