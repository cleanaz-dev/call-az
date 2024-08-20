"use client";

import { ArrowRightIcon, ChevronRight, EyeIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
 PlusIcon,
 SmileIcon,
 ClockIcon,
 TicketIcon,
 BarChartIcon,
 LineChartIcon,
} from "lucide-react";

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

import ReactPlayer from "react-player";

export default function DashboardCallsPage() {
 const [calls, setCalls] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [selectedCall, setSelectedCall] = useState(null);

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

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error}</p>;

 return (
  <div className="flex flex-col h-screen bg-background">
   <header className="px-6 py-4 bg-transparent">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl text-primary font-bold">Calls {calls.length}</h1>
     </div>
     <div className="flex items-center gap-4">
      <NewCallDialog />
     </div>
    </div>
   </header>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6 ">
     <Card className="w-full">
      <CardHeader>
       <CardTitle>Logged Calls</CardTitle>
       <CardDescription>View details of your customer calls.</CardDescription>
      </CardHeader>
      <CardContent>
       <Table>
        <TableHeader>
         <TableRow>
          <TableHead>Caller</TableHead>
          <TableHead>Date/Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Ticket #</TableHead>
          <TableHead className="text-right">View</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
         {calls.map((call) => (
          <TableRow
           key={call.id}
           className={selectedCall?.id === call.id ? "bg-gray-100" : ""}
          >
           <TableCell>
            <div className="font-medium">{call.callerName}</div>
            <div className="text-muted-foreground">{call.callerPhone}</div>
           </TableCell>
           <TableCell>{new Date(call.createdAt).toLocaleString()}</TableCell>
           <TableCell >{call.length} s</TableCell>
           <TableCell>
            {call.ticket.length > 0 ? call.ticket[0].id : "N/A"}
           </TableCell>
           <TableCell className="text-right">
            <Button
             variant="outline"
             size="icon"
             onClick={() => setSelectedCall(call)}
             className="hover:bg-primary transition-colors duration-300"
            >
             <ChevronRight className="h-4 w-4" />

             <span className="sr-only">View call details</span>
            </Button>
           </TableCell>
          </TableRow>
         ))}
        </TableBody>
       </Table>
      </CardContent>
     </Card>

     {selectedCall && (
      <Card className="w-full">
       <CardHeader>
        <CardTitle>Call Details</CardTitle>
        <CardDescription>
         View more information about the selected call.
        </CardDescription>
       </CardHeader>
       <CardContent>
        <div className="grid gap-4">
         <div>
          <div className="font-bold">Caller</div>
          <div>{selectedCall.callerName}</div>
          <div className="text-muted-foreground">
           {selectedCall.callerPhone}
          </div>
         </div>
         <div>
          <div className="font-bold">Call Time</div>
          <div>{new Date(selectedCall.createdAt).toLocaleString()}</div>
         </div>
         <div>
          <div className="font-bold">Call Duration</div>
          <div>{selectedCall.length} seconds</div>
         </div>
         <div>
          <div className="font-bold">Summary</div>
          <div className="text-muted-foreground">
           {selectedCall.ticket[0].summary}
          </div>
         </div>
         <Separator />
         

         <div>
          <div className="font-bold">Call Transcript</div>
          <ScrollArea className="h-auto rounded-md border">
           <div className="p-4 text-sm">
            {selectedCall.transcripts.split("\n").map((line, index) => (
             <p key={index}>{line}</p>
            ))}
           </div>
          </ScrollArea>
         </div>
         <div className="font-bold">Playback</div>
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
          <div className="font-bold">Ticket Status</div>
          <div className="flex mt-2">
           <Badge variant="secondary">In Progress</Badge>
           <Link href={`/tickets/${selectedCall.ticket[0].id}`}>
            <span className="ml-2 text-xs hover:underline">View</span>
           </Link>
          </div>
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
