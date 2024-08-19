import { ArrowRightIcon, User2, UserCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "./ui/chart"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { PlusIcon, SmileIcon,ClockIcon, TicketIcon, BarChartIcon, LineChartIcon } from 'lucide-react'
import { WebcamIcon } from 'lucide-react'
import LogoImg from '../public/logo.png'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { ScrollArea } from "./ui/scroll-area"
import { Badge } from "./ui/badge"

export default function DashboardAgentPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-card px-6 py-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <h1 className='text-2xl text-primary font-bold'>Agents</h1>
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
                <TableRow >
                  <TableHead>Agent</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Open Tickets</TableHead>
                  <TableHead>Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                  <div className="text-muted-foreground"><UserCircleIcon /></div>
                    <div className="font-medium">Neo</div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">RMA</Badge></TableCell>
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
                    <div className='flex items-center gap-2'>
                  <div className="text-muted-foreground"><UserCircleIcon /></div>
                    <div className="font-medium">Peter Parker</div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Tier 1 Support</Badge></TableCell>
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
                    <div className='flex items-center gap-2'>
                  <div className="text-muted-foreground"><UserCircleIcon /></div>
                    <div className="font-medium">Paul Hendricks</div>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Tier 2 Support</Badge></TableCell>
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
            <CardDescription>View details of the lastest agent action.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className='flex'>
                <div className="font-medium mr-2">Agent:</div>
                <div>Peter Parker</div>
                
              </div>
              <div className='flex'>
                <div className="font-medium mr-2">Ticket #:</div>
                <div>12345</div>
              </div>
              <div className='flex'>
                <div className="font-medium mr-2">24 Hour Reponse:</div>
                <div>True</div>
              </div>
              <Separator />
              <div>
                <div className="font-medium">Call Transcript</div>
                <ScrollArea className="h-40 rounded-md border">
                  <div className="p-4 text-sm">
                    <p>Sophia: Hi, I'm calling about an issue with my recent order.</p>
                    <p>Agent: I'm sorry to hear that. Can you please provide me with more details about the issue?</p>
                    <p>Sophia: Yes, I ordered a set of lamps a few days ago, and one of them arrived damaged.</p>
                    <p>Agent: I see. Let me look into that for you. Can you please provide me with your order number?</p>
                    <p>Sophia: Sure, it's OE31b70H.</p>
                    <p>Agent: Okay, got it. Let me check the status of your order.</p>
                    <p>Sophia: Thank you, I really appreciate your help.</p>
                  </div>
                </ScrollArea>
              </div>
              <div>
                <div className="font-medium">Agent Notes</div>
                <div className="text-muted-foreground">
                  Sophia reported a damaged lamp in her recent order. I've initiated a replacement and will follow up with her once it's shipped.
                </div>
              </div>
              <div>
                <div className="font-medium">Ticket Status</div>
                <div className='flex mt-2'>
                  <Badge variant="secondary">In Progress</Badge>
                  <Link href='/tickets'><span className='ml-2 text-xs hover:underline'>View</span></Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      </ScrollArea>
    </div>
)
}
