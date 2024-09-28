"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
 Card,
 CardContent,
 CardTitle,
 CardHeader,
 CardDescription,
 CardFooter,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
 ChartTooltipContent,
 ChartTooltip,
 ChartContainer,
 ChartConfig,
} from "./ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
 PlusIcon,
 SmileIcon,
 ClockIcon,
 TicketIcon,
 BarChartIcon,
 LineChartIcon,
 TrendingUp,
 EyeIcon,
} from "lucide-react";
import { WebcamIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { UserButton } from "@clerk/nextjs";
import { User2 } from "lucide-react";
import ReactApexChart from 'react-apexcharts';

const chartData = [
 { month: "January", desktop: 50 },
 { month: "February", desktop: 75 },
 { month: "March", desktop: 35 },
 { month: "April", desktop: 73 },
 { month: "May", desktop: 55 },
 { month: "June", desktop: 100 },
];


const chartConfig = {
 desktop: {
  label: "Desktop",
  color: "green",
 },
};

export default function DashboardHomePage() {
 const [usersLoggedin, setUsersLoggedin] = useState(0);


 return (
  <div className="flex flex-col h-screen  w-full">
   <header className=" px-6 py-4 ">
    <div className="flex items-center justify-between py-2">
     <div className="flex items-center gap-2">
      <h1 className="text-2xl text-blue-700 font-bold">Home</h1>
     </div>
     {/* <div className="flex items-center gap-4">
      <Button variant="outline">
       <User2 className="w-4 h-4 mr-2" />
       
       <span className="ml-2 hidden md:block">0 Logged in</span>
      </Button>
     </div> */}
    </div>
   </header>
   <ScrollArea>
    <main className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
     <Card className="w-full bg-slate-800 border-none">
      <CardHeader className="flex items-center pb-4 ">
       <CardTitle className=" text-blue-700 mb-2">Customer Satisfaction</CardTitle>
       <SmileIcon className="w-10 h-10 text-zinc-300" />
      </CardHeader>
      <CardContent className="text-center">
       <div className="text-4xl font-bold text-blue-700">87%</div>
       <p className="text-sm text-zinc-300">+5% from last month</p>
      </CardContent>
     </Card>
     <Card className="w-full bg-slate-800 border-none">
      <CardHeader className="flex items-center pb-4">
       <CardTitle className="text-blue-700  mb-2">Average Response Time</CardTitle>
       <ClockIcon className="w-10 h-10 text-zinc-300" />
      </CardHeader>
      <CardContent className="text-center">
       <div className="text-4xl font-bold text-blue-700">12 min</div>
       <p className="text-sm text-zinc-300">-2 min from last month</p>
      </CardContent>
     </Card>
     <Card className="w-full bg-slate-800 text-blue-700 border-none">
      <CardHeader className="flex items-center pb-4">
       <CardTitle className="text-blue-700 mb-2">Resolved Tickets</CardTitle>
       <TicketIcon className="w-10 h-10 text-zinc-300" />
      </CardHeader>
      <CardContent className="text-center">
       <div className="text-4xl font-bold">1,234</div>
       <p className="text-sm text-zinc-300">+15% from last month</p>
      </CardContent>
     </Card>
     {/* Ticket Trend Chart */}
     <Card className="col-span-1  bg-slate-800 border-none">
      <CardHeader className="flex items-center justify-between pb-4">
       <CardTitle className="text-blue-700">Ticket Trends</CardTitle>
       <BarChartIcon className="w-6 h-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
       <ChartContainer config={chartConfig}>
        <LineChart
         accessibilityLayer
         data={chartData}
         margin={{
          left: 12,
          right: 12,
         }}
        >
         <CartesianGrid vertical={false} />
         
         <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
         />
         <Line
          dataKey="desktop"
          type="natural"
          stroke="rgba(29, 78, 216)"
          strokeWidth={2}
          dot={false}
         />
        </LineChart>
       </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       <div className="flex gap-2 font-medium leading-none text-zinc-300">
        Trending up by 30% this month <TrendingUp className="h-4 w-4" />
       </div>
       
      </CardFooter>
     </Card>
     {/* Survey Analysis */}
     <Card className="col-span-1 bg-slate-800 border-none">
      <CardHeader className="flex items-center justify-between pb-4">
       <CardTitle className="text-blue-700">Survey Analysis</CardTitle>
       <BarChartIcon className="w-6 h-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
       <ChartContainer config={chartConfig}>
        <LineChart
         accessibilityLayer
         data={chartData}
         margin={{
          left: 12,
          right: 12,
         }}
        >
         <CartesianGrid vertical={false} />
         
         <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
         />
         <Line
          dataKey="desktop"
          type="natural"
          stroke="rgba(29, 78, 216)"
          strokeWidth={2}
          dot={false}
         />
        </LineChart>
       </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       <div className="flex gap-2 font-medium leading-none text-zinc-300">
        Trending up by 55% this month <TrendingUp className="h-4 w-4" />
       </div>
       
      </CardFooter>
     </Card>
     <Card className="col-span-1 bg-slate-800 border-none">
      <CardHeader className="flex items-center justify-between pb-4">
       <CardTitle className="text-blue-700">Engagement</CardTitle>
       <BarChartIcon className="w-6 h-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
       <ChartContainer config={chartConfig}>
        <LineChart
         accessibilityLayer
         data={chartData}
         margin={{
          left: 12,
          right: 12,
         }}
        >
         <CartesianGrid vertical={false} />
         
         <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
         />
         <Line
          dataKey="desktop"
          type="natural"
          stroke="rgba(29, 78, 216)"
          strokeWidth={2}
          dot={false}
         />
        </LineChart>
       </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       <div className="flex gap-2 font-medium leading-none text-zinc-300">
        Trending up by 26% this month <TrendingUp className="h-4 w-4" />
       </div>
      </CardFooter>
     </Card>
     <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-slate-800 border-none">
      <CardHeader className="flex items-center justify-between pb-4">
       <CardTitle className="text-blue-700">Recent Conversations</CardTitle>
       <WebcamIcon className="w-6 h-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
       <div className="grid gap-4">
        <div className="flex items-start gap-4">
         <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div className="grid gap-1">
          <div className="flex items-center gap-2">
           <div className="font-medium text-blue-700">John Doe</div>
           <div className="text-xs text-zinc-300">2 hours ago</div>
          </div>
          <div className="text-sm text-zinc-300">
           Hi, I'm having trouble with my order. Can you please help?
          </div>
         </div>
        </div>
        <div className="flex items-start gap-4">
         <Avatar className="w-10 h-10 border">
          <AvatarImage src={"/placeholder-user.jpg"} />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div className="grid gap-1">
          <div className="flex items-center gap-2">
           <div className="font-medium text-blue-700">Jane Smith</div>
           <div className="text-xs text-zinc-300">1 day ago</div>
          </div>
          <div className="text-sm text-zinc-300">
           I need to return an item, how do I do that?
          </div>
         </div>
        </div>
        <div className="flex items-start gap-4">
         <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div className="grid gap-1">
          <div className="flex items-center gap-2">
           <div className="font-medium text-blue-700">Michael Johnson</div>
           <div className="text-xs text-zinc-300">3 days ago</div>
          </div>
          <div className="text-sm text-zinc-300">
           I'm having trouble with your website, can you help me?
          </div>
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
