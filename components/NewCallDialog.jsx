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
import { Plus } from "lucide-react";

export default function NewCallDialog() {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button variant="outline"><Plus /> New Call</Button>
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Create a new call</DialogTitle>
     <DialogDescription>Please dial number below.</DialogDescription>
    </DialogHeader>
    
      <div className="p-6 max-w-md mx-auto bg-slate-100 rounded-md space-y-4">
  <div className="text-gray-700 font-bold text-lg">
    437-292-0555
  </div>
  <div className="space-y-2">
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-gray-800 font-normal"> Thank you for calling [Company Name], how can I assist you today?</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-gray-800 font-normal"> Hi, [State Issue]. Can you create a ticket for me?</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-gray-800 font-normal"> Of course. Can I get your name, phone number, and email to create the ticket?</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-gray-800 font-normal"> Sure, my name is [Name], my email is [Email], and my phone number is [Phone Number].</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-gray-800 font-normal"> Thank you. The ticket has been created, and our team will reach out soon.</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-gray-800 font-normal"> Thanks.</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-gray-800 font-normal"> You're welcome. Have a great day!</span>
    </div>
  </div>
</div>


     <DialogFooter className="mt-4">
      <DialogClose>
       <Button variant="outline">Close</Button>
      </DialogClose>
     </DialogFooter>
   </DialogContent>
  </Dialog>
 );
}
