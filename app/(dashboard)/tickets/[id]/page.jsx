import React from "react";
import { Button } from "../../../../components/ui/button";
import {
 AlertCircle,
 Calendar,
 Clock,
 DownloadIcon,
 Eye,
 FileIcon,
 Mail,
 Phone,
 PlusIcon,
 User,
} from "lucide-react";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import {
 Card,
 CardHeader,
 CardFooter,
 CardTitle,
 CardContent,
 CardDescription,
} from "../../../../components/ui/card";
import { getTicketById } from "../../../../lib/actions";
import { Separator } from "../../../../components/ui/separator";
import UpdateTicketDialog from "../../../../components/UpdateTicketDialog";
import { auth } from "@clerk/nextjs/server";
import CollaborativeRoom from "../../../../components/CollaborativeRoom";
import { Badge } from "../../../../components/ui/badge";

export default async function SingleTicketPage({ params }) {
 const { id } = params;
 const ticket = await getTicketById(id);
 const { userId } = auth();

 const getDaysOpen = (createdAt) => {
  const createdDate = new Date(createdAt);
  const today = new Date();
  const diffTime = today - createdDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return diffDays;
 };

 const priorityColors = {
  Low: "bg-blue-100 text-blue-800",
  Medium: "bg-yellow-100 text-yellow-800",
  High: "bg-red-100 text-red-800",
 };

 return (
  <div className="flex flex-col h-screen  w-full">
   <header className="px-6 py-4">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold text-blue-700">Ticket {id} </h1>
     </div>
    </div>
   </header>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6">
     <Card className="w-full bg-slate-800 border-none">
      <CardHeader>
       <CardTitle className="text-2xl font-bold text-blue-700">Ticket Details</CardTitle>
       <CardDescription className="text-zinc-300">View and manage ticket information</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 bg-slate-700 p-2 rounded-sm">
         {/* Caller Information */}
         <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Caller Information</h2>
          <div className="space-y-2">
           <div className="flex items-center gap-2 text-sm">
            <User size={18} className="text-blue-700" />
            <span className="text-zinc-300">{ticket.data.Call.callerName}</span>
           </div>
           <div className="flex items-center gap-2 text-sm">
            <Mail size={18} className="text-blue-700" />
            <span className="text-zinc-300">{ticket.data.Call.callerEmail}</span>
           </div>
           <div className="flex items-center gap-2 text-sm">
            <Phone size={18} className="text-blue-700" />
            <span className="text-zinc-300">{ticket.data.Call.callerPhone}</span>
           </div>
          </div>
         </div>
         {/* Description */}
         <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Description</h2>
          <p className="text-sm text-zinc-300">
           {ticket.data.description}
          </p>
         </div>
        </div>
        <div className="space-y-4 bg-slate-700 p-2 rounded-sm">
          {/* Ticket Status */}
         <div>
          <div className="flex flex-wrap gap-2 mb-2">
          <h2 className="text-lg font-semibold text-white">Ticket Status </h2> <Badge variant="outline" className="text-sm">
            {ticket.data.status}
           </Badge>
           </div>
          <div className="space-y-2 text-sm">
          <div className="flex mb-2 gap-2 ">
          <User size={18} className="text-blue-700" />
          <h1 className="font-medium text-zinc-300">Assigned To</h1>
          
          <span className="text-muted-foreground">
           {ticket.data.assignedTo?.name ?? "Unassigned"}
          </span>
         </div>
           <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-700" />
            <span className="text-zinc-300">
             Created: {new Date(ticket.data.createdAt).toLocaleDateString()}
            </span>
           </div>
           <div className="flex items-center gap-2">
            <Clock size={18} className="text-blue-700" />
            <span className="text-zinc-300">
             Updated: {new Date(ticket.data.updatedAt).toLocaleString()}
            </span>
           </div>
           <div className="flex items-center gap-2">
            <AlertCircle size={18} className="text-blue-700" />
            <span className="text-zinc-300">
             {getDaysOpen(ticket.data.createdAt) === 0
              ? "Opened Today"
              : `Open for ${getDaysOpen(ticket.data.createdAt)} days`}
            </span>
           </div>
          </div>
         </div>
        </div>
        {/* <Separator /> */}
        <div>
         
         <div className="">
          <h1 className="text-lg font-semibold">Discussion</h1>
          {/* <TicketNotes ticketId={id} /> */}
          <CollaborativeRoom id={id} />
         </div>
        </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-end">
       <UpdateTicketDialog ticketId={id} />
      </CardFooter>
     </Card>
    </main>
   </ScrollArea>
  </div>
 );
}

{
 /* <div>
          <div className="font-medium">Attachments</div>
          <div className="grid gap-2">
           <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
             <FileIcon className="h-6 w-6 text-muted-foreground" />
             <div>
              <div className="font-medium">Screenshot.png</div>
              <div className="text-sm text-muted-foreground">
               Uploaded 3 days ago
              </div>
             </div>
            </div>
            <Button variant="outline" size="icon">
             <Eye className="h-4 w-4" />
             <span className="sr-only">Download</span>
            </Button>
           </div>
          </div>
         </div> */
}
