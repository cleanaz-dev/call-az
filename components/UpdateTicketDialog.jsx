import React from "react";
import {
 Dialog,
 DialogClose,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
 Select,
 SelectContent,
 SelectGroup,
 SelectItem,
 SelectLabel,
 SelectTrigger,
 SelectValue,
} from "./ui/select";
import { updateTicketStatus} from "../lib/actions";
import { auth } from "@clerk/nextjs/server";
import { SubmitNoteButton } from "./SubmitButton";

export default function UpdateTicketDialog({ ticketId }) {
 const { userId } = auth();

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline">Update Ticket</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Update Ticket</DialogTitle>
     <DialogDescription>Please select from one of the options.</DialogDescription>
    </DialogHeader>
    <form action={updateTicketStatus}>
     <input type="hidden" name="ticketId" value={ticketId} />
     <input type="hidden" name="userId" value={userId} />
     <Select name="status">
      <SelectTrigger  >
        <SelectValue placeholder="Update Ticket Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="font-extrabold">Status</SelectLabel>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Resolved">Resolved</SelectItem>
          <SelectItem value="Closed">Closed</SelectItem>
          <SelectItem value="Unassigned">Unassigned</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
     <DialogFooter className="mt-4">
      <DialogClose>
       <SubmitNoteButton />
      </DialogClose>
     </DialogFooter>
    </form>
   </DialogContent>
  </Dialog>
 );
}
