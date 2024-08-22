import React from "react";
import { Short_Stack, Anton } from "next/font/google";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import HeroImage from "../public/support1.png";
import Image from "next/image";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
 CardFooter,
} from "./ui/card";
import {
 CheckIcon,
 XIcon,
 GaugeIcon,
 PuzzleIcon,
 BriefcaseIcon,
 PhoneForwarded,
} from "lucide-react";
import LogoImg from "../public/logo.png";
import { contactFormData } from "../lib/actions";
import { SubmitNoteButton } from "./SubmitButton";

const shortStack = Short_Stack({
 subsets: ["latin"],
 weight: "400",
});
const anton = Anton({
 subsets: ["latin"],
 weight: "400",
});

const links = [
 {
  title: "Features",
  href: "#",
 },
 {
  title: "Pricing",
  href: "#",
 },
 {
  title: "Contact",
  href: "#",
 },
];

const features = [
 {
  icon: <GaugeIcon className="size-16" />,
  title: "Instant Responses",
  description:
   "Our AI-powered chatbot provides lightning-fast responses, 24/7, ensuring your customers get the help they need immediately.",
 },
 {
  icon: <PuzzleIcon className="size-16" />,
  title: "Personalized Solutions",
  description:
   "Our AI analyzes customer queries and provides tailored solutions, ensuring a seamless and satisfying experience.",
 },
 {
  icon: <BriefcaseIcon className="size-16" />,
  title: "Increased Efficiency",
  description:
   "Streamline your customer service operations with our AI-driven platform, freeing up your team to focus on higher-value tasks.",
 },
];
export default function LandingPage() {
 return (
  <div className="flex flex-col min-h-[100dvh]">
   <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link href="/" className="flex items-center " prefetch={false}>
     <PhoneForwarded
      size="40"
      className="p-1 rounded-xl border-2 border-secondary text-secondary bg-white"
     />
     <p
      className={`${anton.className} text-xl font-semibold mx-2 tracking-widest`}
     >
      CALL AZ <span className="text-secondary">AI</span>
     </p>
    </Link>
    <span className="sr-only">AI Customer Service</span>
    <nav className="ml-auto flex gap-4 sm:gap-6 text-secondary">
     {links.map((link, index) => (
      <Link
       href={link.href}
       key={index}
       className="text-sm font-medium hover:underline underline-offset-4"
       prefetch={false}
      >
       {link.title}
      </Link>
     ))}
    </nav>
   </header>
   <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
     <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
       <div className="flex flex-col justify-center space-y-4 bg-red-50 rounded-xl p-6">
        <div className="space-y-2">
         <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-secondary">
          Revolutionize Your Customer Service with AI
         </h1>
         <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Our AI-powered customer service platform delivers lightning-fast
          responses, personalized solutions, and unparalleled efficiency.
         </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
         <Link
          href="/sign-up"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-300"
          prefetch={false}
         >
          Get Started
         </Link>
         <Link
          href="/sign-in"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-300"
          prefetch={false}
         >
          Login
         </Link>
        </div>
       </div>
       <Image
        src={HeroImage}
        alt="Hero"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        width="500"
        height="500"
        priority
       />
      </div>
     </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted-foreground">
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50">
         Unlock the Power of AI-Driven Customer Service
        </h2>
        <p className="max-w-[900px] text-slate-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
         Our AI-powered platform revolutionizes the way you interact with your
         customers, delivering lightning-fast responses, personalized solutions,
         and unparalleled efficiency.
        </p>
       </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
       {features.map((feature, index) => (
        <div
         key={index}
         className="flex flex-col items-center justify-center space-y-4"
        >
         <span className="text-primary">{feature.icon}</span>
         <div className="grid gap-1 text-center">
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-slate-50 h-24">{feature.description}</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    </section>
    <section className="w-full py-12 md:pb-24 lg:pb-32 bg-primary">
     <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50">
         Pricing
        </h2>
        <p className="max-w-[900px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
         Choose the plan that best fits your needs and budget.
        </p>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="bg-background shadow-sm">
         <CardHeader className="border-b">
          <CardTitle>7-Day Trial</CardTitle>
          <CardDescription>Free trail</CardDescription>
         </CardHeader>
         <CardContent className="py-6 space-y-4">
          <div className="space-y-1">
           <div className="text-4xl font-bold">$</div>
           <p className="text-muted-foreground">per month</p>
          </div>
          <ul className="space-y-2 text-muted-foreground">
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Basic customer support
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Limited integrations
           </li>
           <li className="flex items-center gap-2">
            <XIcon className="w-5 h-5 text-red-500" />
            No custom branding
           </li>
           <li className="flex items-center gap-2">
            <XIcon className="w-5 h-5 text-red-500" />
            No advanced analytics
           </li>
          </ul>
          <Button variant="outline" className="w-full hover:text-white">
           Get Started
          </Button>
         </CardContent>
        </Card>
        <Card className="bg-background shadow-sm">
         <CardHeader className="border-b">
          <CardTitle>Proper</CardTitle>
          <CardDescription>For growing businesses</CardDescription>
         </CardHeader>
         <CardContent className="py-6 space-y-4">
          <div className="space-y-1">
           <div className="text-4xl font-bold">$$</div>
           <p className="text-muted-foreground">per month</p>
          </div>
          <ul className="space-y-2 text-muted-foreground">
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Priority customer support
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Limited integrations
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Custom branding
           </li>
           <li className="flex items-center gap-2">
            <XIcon className="w-5 h-5 text-red-500" />
            No advanced analytics
           </li>
          </ul>
          <Button variant="outline" className="w-full hover:text-white">
           Get Started
          </Button>
         </CardContent>
        </Card>
        <Card className="bg-background shadow-sm">
         <CardHeader className="border-b">
          <CardTitle>Elite</CardTitle>
          <CardDescription>For enterprise-level businesses</CardDescription>
         </CardHeader>
         <CardContent className="py-6 space-y-4">
          <div className="space-y-1">
           <div className="text-4xl font-bold">$$$</div>
           <p className="text-muted-foreground">per month</p>
          </div>
          <ul className="space-y-2 text-muted-foreground">
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Dedicated support
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Unlimited integrations
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Custom branding
           </li>
           <li className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-500" />
            Advanced analytics
           </li>
          </ul>
          <Button variant="outline" className="w-full hover:text-white">
           Get Started
          </Button>
         </CardContent>
        </Card>
       </div>
      </div>
     </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
     <div className="container px-4 md:px-6">
      <div className="mx-auto max-w-2xl space-y-4 text-center bg-muted-foreground p-6 rounded-xl">
       <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-50">
        Get in Touch
       </h2>
       <p className="text-slate-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Have a question or need more information? Fill out the form below and
        our team will be in touch.
       </p>
       <form action={contactFormData} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
         <Input
          type="text"
          placeholder="Name*"
          name="name"
          className="flex-1"
          required
         />
         <Input
          type="email"
          placeholder="Email*"
          name="email"
          className="flex-1"
          required
         />
         <Input
          type="text"
          placeholder="Company"
          name="company"
          className="flex"
         />
         <Input
          type="text"
          placeholder="Mobile"
          name="mobile"
          className="flex"
         />
        </div>
        <Textarea 
          type="text" 
          name="message" 
          placeholder="Message" 
          className="flex-1" 
          rows={4} 
          required />
          <SubmitNoteButton />
        {/* <Button
         type="submit"
         variant="secondary"
         className="w-full bg-white hover:bg-primary hover:text-white transition-colors duration-300"
        >
         Submit
        </Button> */}
       </form>
      </div>
     </div>
    </section>
   </main>
   <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-muted-foreground">
     &copy; 2024 AI Customer Service. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
     <Link
      href="#"
      className="text-xs hover:underline underline-offset-4"
      prefetch={false}
     >
      Terms of Service
     </Link>
     <Link
      href="#"
      className="text-xs hover:underline underline-offset-4"
      prefetch={false}
     >
      Privacy
     </Link>
    </nav>
   </footer>
  </div>
 );
}
