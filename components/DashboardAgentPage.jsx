import { ArrowRightIcon, User2, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "./ui/chart";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
 PlusIcon,
 SmileIcon,
 ClockIcon,
 TicketIcon,
 BarChartIcon,
 LineChartIcon,
} from "lucide-react";
import { WebcamIcon } from "lucide-react";
import LogoImg from "../public/logo.png";
import Image from "next/image";
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

export default function DashboardAgentPage() {
 return (
  <div className="flex flex-col h-screen bg-background">
   <header className="bg-card px-6 py-4">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl text-primary font-bold">Agents</h1>
     </div>
     <div className="flex items-center gap-4">
      <Button variant="outline">
       <PlusIcon className="w-4 h-4 mr-2" />
       New Agent
      </Button>
     </div>
    </div>
   </header>
   <ScrollArea>
    <main className="overflow-y-auto grid grid-cols-1 gap-6 p-6">
     <Card className="w-full">
      <CardHeader>
       <CardTitle>All Agents</CardTitle>
       <CardDescription>View and manage agents.</CardDescription>
      </CardHeader>
      <CardContent>
       <Table>
        <TableHeader>
         <TableRow>
          <TableHead>Agent</TableHead>
          <TableHead>Coverage</TableHead>
          <TableHead>Open Tickets</TableHead>
          <TableHead>Edit</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
         <TableRow>
          <TableCell>
           <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
             <UserCircleIcon />
            </div>
            <div className="font-medium">RMA Agent</div>
           </div>
          </TableCell>
          <TableCell>
           <Badge variant="outline">RMA</Badge>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="">
           <Button variant="outline" size="icon">
            <ArrowRightIcon className="h-4 w-4" />
            <span className="sr-only">View call details</span>
           </Button>
          </TableCell>
         </TableRow>

         <TableRow>
          <TableCell>
           <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
             <UserCircleIcon />
            </div>
            <div className="font-medium">Tier 1 Agent</div>
           </div>
          </TableCell>
          <TableCell>
           <Badge variant="outline">Tier 1 Support</Badge>
          </TableCell>
          <TableCell>3</TableCell>
          <TableCell className="">
           <Button variant="outline" size="icon">
            <ArrowRightIcon className="h-4 w-4" />
            <span className="sr-only">View call details</span>
           </Button>
          </TableCell>
         </TableRow>
         <TableRow>
          <TableCell>
           <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
             <UserCircleIcon />
            </div>
            <div className="font-medium">Tier 2 Agent</div>
           </div>
          </TableCell>
          <TableCell>
           <Badge variant="outline">Tier 2 Support</Badge>
          </TableCell>
          <TableCell>1</TableCell>
          <TableCell className="">
           <Button variant="outline" size="icon">
            <ArrowRightIcon className="h-4 w-4" />
            <span className="sr-only">View call details</span>
           </Button>
          </TableCell>
         </TableRow>
        </TableBody>
       </Table>
      </CardContent>
     </Card>
     <Card className="w-full">
      <CardHeader>
       <CardTitle>Last Agent Action</CardTitle>
       <CardDescription>
        View details of the lastest agent action.
       </CardDescription>
      </CardHeader>
      <CardContent>
       <div className="grid gap-4">
        <div className="flex">
         <div className="font-medium mr-2">Agent:</div>
         <div>Tier 1 Agent</div>
        </div>
        <div className="flex">
         <div className="font-medium mr-2">Ticket #:</div>
         <div>12345</div>
        </div>
        <div className="flex">
         <div className="font-medium mr-2">24 Hour Reponse:</div>
         <div>True</div>
        </div>
        <Separator />
        <div>
         <div className="font-medium">Call Transcript</div>
         <ScrollArea className="h-40 rounded-md border">
          <div className="p-4 text-sm">
           <p>
            Assistant: Thank you for calling Clean AZ Services, my name is
            Anna-Leah. How can I help you today.
           </p>
           <p>User: Can I, my laptop screen is just black?</p>
           <p>User: I wanna create a ticket.</p>
           <p>
            Assistant: Okay, I'd be happy to help you with that. Can you please
            provide me with your name, phone number, and email address so I can
            create a ticket for you?
           </p>
           <p>
            User: Yeah. My name is Paul. My email is paulat paul.com, and my
            phone number is 400-555-4463.
           </p>
           <p>
            Assistant: Alright, Paul, I've got that inf- So, just to confirm,
            your laptop screen is just black, is that correct? And I'll go ahead
            and create a ticket for-
           </p>
           <p>User: Yeah.</p>
           <p>Assistant: Okay, Paul.</p>
           <p>User: Okay. Thanks.</p>
           <p>
            Assistant: You're welcome, Paul. Have a great day, and we'll be in
            touch soon. Goodbye.
           </p>
           <p>Agent-action: Ended call</p>
          </div>
         </ScrollArea>
        </div>
        <div>
         <div className="font-medium">Agent Notes</div>
         <div className="text-muted-foreground">
          Sophia reported a damaged lamp in her recent order. I've initiated a
          replacement and will follow up with her once it's shipped.
         </div>
        </div>
        <div>
         <div className="font-medium">Ticket Status</div>
         <div className="flex mt-2">
          <Badge variant="secondary">In Progress</Badge>
          <Link href="/tickets">
           <span className="ml-2 text-xs hover:underline">View</span>
          </Link>
         </div>
        </div>
       </div>
      </CardContent>
     </Card>
    </main>
   </ScrollArea>
  </div>
 );
}
