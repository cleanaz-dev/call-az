"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

export function SubmitNoteButton() {
 const { pending } = useFormStatus();
 return (
  <>
   {pending ? (
    <Button disabled>
     <Loader2Icon className="w-4 h-4 animate-spin" />
    </Button>
   ) : (
    <Button 
      type="submit"
      className="bg-white text-blue-700 w-full hover:text-white hover:border hover:border-white transition-all duration-500"
    >
      Submit
    </Button>
   )}
  </>
 );
}
