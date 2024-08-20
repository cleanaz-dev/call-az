import React from "react";
import { Button } from "../../../../components/ui/button";
import {
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
 Avatar,
 AvatarFallback,
 AvatarImage,
} from "../../../../components/ui/avatar";
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
import TicketNotes from "../../../../components/TicketNotes"
import { auth } from "@clerk/nextjs/server";
import CollaborativeRoom from "../../../../components/CollaborativeRoom";





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

 return (

   <div className="flex flex-col h-screen bg-background w-full">
    <header className="bg-card px-6 py-4">
     <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
       <h1 className="text-2xl text-primary font-bold">Ticket {id}</h1>
      </div>
     </div>
    </header>
    <ScrollArea>
     <main className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 p-6">
      <Card className="w-full">
       <CardHeader>
        <CardTitle>Details</CardTitle>
        <CardDescription>View ticket details.</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="grid gap-6">
         <div>
          <div className="grid gap-2">
           <div className="grid gap-1">
            <h1 className="mb-1 font-medium">Caller Details</h1>
            <div className="flex flex-col gap-1">
             <span className="flex gap-2 text-muted-foreground">
              <User size={20} /> {ticket.data.Call.callerName}
             </span>
             <span className="flex gap-2 text-muted-foreground">
              <Mail size={20} /> {ticket.data.Call.callerEmail}
             </span>
             <span className="flex gap-2 text-muted-foreground">
              <Phone size={20} /> {ticket.data.Call.callerPhone}
             </span>
            </div>
           </div>
           <div className="grid">
            <h1 className="font-medium">Description</h1>
            <span className="text-muted-foreground">
             {ticket.data.description}
            </span>
           </div>
           <div className="grid">
            <h1 className="font-medium">Status</h1>
            <span className="text-muted-foreground">{ticket.data.status}</span>
           </div>
           <div className="grid">
            <h1 className="font-medium">Priority</h1>
            <span className="text-muted-foreground">
             {ticket.data.priority}
            </span>
           </div>
           <div className="grid">
            <h1 className="font-medium">Created</h1>
            <span className="text-muted-foreground">
             {new Date(ticket.data.createdAt).toLocaleDateString()}
            </span>
           </div>
           <div className="grid">
            <h1 className="font-medium">Last Updated</h1>
            <span className="text-muted-foreground">
             {new Date(ticket.data.updatedAt).toLocaleString()}
            </span>
           </div>
           <div className="grid">
            <h1 className="font-medium">Days Open</h1>
            <span className="text-muted-foreground">
             {getDaysOpen(ticket.data.createdAt) === 0
              ? "Opened Today"
              : `${getDaysOpen(ticket.data.createdAt)} days`}
            </span>
           </div>
          </div>
         </div>
         <Separator />
         <div>
          <div>
           <h1 className="font-medium">Assigned To</h1>
           <span className="text-muted-foreground">
            {ticket.data.assignedTo?.name ?? "Unassigned"}
           </span>
          </div>
          <div>
           <h1 className="font-medium">Discussion</h1>
           {/* <TicketNotes ticketId={id} /> */}
           <CollaborativeRoom id={id}/>
          </div>
         </div>
         <div>
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
         </div>
        </div>
       </CardContent>
       <CardFooter className="flex justify-end">
        <Button variant="outline">Update Ticket</Button>
        <Button className="ml-2">Close Ticket</Button>
       </CardFooter>
      </Card>
     </main>
    </ScrollArea>
   </div>
 );
}
