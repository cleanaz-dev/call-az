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
import { Textarea } from "./ui/textarea";
import { createNote } from "../lib/actions";
import { auth } from "@clerk/nextjs/server";
import { SubmitNoteButton } from "./SubmitButton";

export default function CreateNote({ ticketId }) {
 const { userId } = auth();

 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline">Add Note</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Create a New Note</DialogTitle>

     <DialogDescription>Enter any important information.</DialogDescription>
    </DialogHeader>
    <form action={createNote}>
      <input type="hidden" name="ticketId" value={ticketId} />
      <input type="hidden" name="userId" value={userId} />
     <Textarea
       name="content"  
       placeholder="..." 
       required
       />

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
