import { CircleCheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";

export default function page() {
 return (
  <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center ">
        <CircleCheckIcon className="mx-auto mb-6 size-12 text-primary" />
        <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Thank you for reaching out!</h1>
        <p className="mt-4 text-muted-foreground">
          We've received your message and will get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className=""
          prefetch={false}
        >
          <Button className="mt-4 hover:bg-secondary transition-colors duration-300">Back to Homepage</Button>
        </Link>
      </div>
    </div>
 );
}
