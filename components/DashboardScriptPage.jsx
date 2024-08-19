import React from 'react'
import { Button } from './ui/button'
import { PlusIcon, UserCircleIcon, ArrowRightIcon } from 'lucide-react'
import { ScrollArea } from './ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Table, TableHead,TableHeader, TableBody, TableCell, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export default function DashboardScriptPage() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-card px-6 py-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl text-primary font-bold">Call Scripts</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              New Script
            </Button>
          </div>
        </div>
      </header>
      <ScrollArea>
        <main className="overflow-y-auto grid grid-cols-1 gap-6 p-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>All Call Scripts</CardTitle>
              <CardDescription>View and manage call scripts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Script Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground"><UserCircleIcon /></div>
                        <div className="font-medium">Order Issue</div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="outline">Support</Badge></TableCell>
                    <TableCell>2024-07-08</TableCell>
                    <TableCell>
                      <Button variant="outline" size="icon">
                        <ArrowRightIcon className="h-4 w-4" />
                        <span className="sr-only">Edit script</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground"><UserCircleIcon /></div>
                        <div className="font-medium">Billing Inquiry</div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="outline">Billing</Badge></TableCell>
                    <TableCell>2024-07-07</TableCell>
                    <TableCell>
                      <Button variant="outline" size="icon">
                        <ArrowRightIcon className="h-4 w-4" />
                        <span className="sr-only">Edit script</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground"><UserCircleIcon /></div>
                        <div className="font-medium">Technical Support</div>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="outline">Technical</Badge></TableCell>
                    <TableCell>2024-07-06</TableCell>
                    <TableCell>
                      <Button variant="outline" size="icon">
                        <ArrowRightIcon className="h-4 w-4" />
                        <span className="sr-only">Edit script</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Script Details</CardTitle>
              <CardDescription>View details of the selected call script.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex">
                  <div className="font-medium mr-2">Script Name:</div>
                  <div>Order Issue</div>
                </div>
                <div className="flex">
                  <div className="font-medium mr-2">Category:</div>
                  <div>Support</div>
                </div>
                <Separator />
                <div>
                  <div className="font-medium">Script Content</div>
                  <ScrollArea className="h-40 rounded-md border">
                    <div className="p-4 text-sm">
                      <p>Agent: Hi, how can I assist you with your order today?</p>
                      <p>Customer: I'm having an issue with a recent order.</p>
                      <p>Agent: I'm sorry to hear that. Can you please provide me with your order number?</p>
                      <p>Customer: Sure, it's OE31b70H.</p>
                      <p>Agent: Thank you. Let me check the status of your order.</p>
                    </div>
                  </ScrollArea>
                </div>
                <div>
                  <div className="font-medium">Agent Notes</div>
                  <div className="text-muted-foreground">
                    Make sure to verify the order number and double-check the issue details before proceeding with the solution.
                  </div>
                </div>
                <div>
                  <div className="font-medium">Last Updated</div>
                  <div>2024-07-08</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </ScrollArea>
    </div>
  )
}
