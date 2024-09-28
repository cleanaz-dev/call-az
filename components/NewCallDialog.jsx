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
import { Plus,Phone } from "lucide-react";
import {AddCircle} from "solar-icon-set"

export default function NewCallDialog() {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button 
      variant="outline"
      className="animate-pulse border-2 border-slate-600 bg-slate-800"
    >
      <AddCircle size={24} color="#ffffff" className="mr-2"/> <span className="text-white">New Call</span>
    </Button>
   </DialogTrigger>
   <DialogContent className="bg-slate-700 border-none">
    <DialogHeader>
     <DialogTitle className="text-white">Create a new call</DialogTitle>
     <DialogDescription className="text-white">Please dial number below and see call flow example.</DialogDescription>
    </DialogHeader>
    
      <div className="p-6 max-w-md mx-auto bg-slate-800 rounded-md space-y-4 border-none">
  <div className=" flex gap-2 items-center text-white font-bold text-lg">
  <Phone /> 437-292-0555
  </div>
  <p className="text-white text-sm">Call Flow Example</p>
  <div className="space-y-2">
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-white font-normal"> Thank you for calling [Company Name], how can I assist you today?</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-white  font-normal"> Hi, [State Issue]. Can you create a ticket for me?</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-white  font-normal"> Of course. Can I get your name, phone number, and email to create the ticket?</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-white  font-normal"> Sure, my name is [Name], my email is [Email], and my phone number is [Phone Number].</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-white  font-normal"> Thank you. The ticket has been created, and our team will reach out soon.</span>
    </div>
    <div className="text-green-600 font-semibold">
      User:
      <span className="text-white  font-normal"> Thanks.</span>
    </div>
    <div className="text-blue-600 font-semibold">
      Assistant:
      <span className="text-white  font-normal"> You're welcome. Have a great day!</span>
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
