"use client";

import React from "react";
import { Short_Stack, Anton } from "next/font/google";
import { Nav, Panel } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {Label} from "./ui/label";
import Link from "next/link";
import HeroImage from "../public/support1.png";
import BlurryBG from "../public/bbblurry.svg";
import ContactBG from "../public/contact-bg.svg";
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
 LineChart,
} from "lucide-react";
import LogoImg from "../public/logo1.png";
import { contactFormData } from "../lib/actions";
import { SubmitNoteButton } from "./SubmitButton";
import TestimonialBanner from "./TestimonialBanner";
import FastImg from "../public/fast.svg";
import PuzzleImg from "../public/puzzle.svg";
import EfficientImg from "../public/efficient.svg";
import HeroImg from "../public/hero.svg";

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
  key: "instant-responses",
  icon: <GaugeIcon className="size-16" />,
  title: "Instant Responses",
  description:
   "Our AI-powered chatbot provides lightning-fast responses, 24/7, ensuring your customers get the help they need immediately.",
 },
 {
  key: "personalized-solutions",
  icon: <PuzzleIcon className="size-16" />,
  title: "Personalized Solutions",
  description:
   "Our AI analyzes customer queries and provides tailored solutions, ensuring a seamless and satisfying experience.",
 },
 {
  key: "increased-efficiency",
  icon: <BriefcaseIcon className="size-16" />,
  title: "Increased Efficiency",
  description:
   "Streamline your customer service operations with our AI-driven platform, freeing up your team to focus on higher-value tasks.",
 },
];
const tabs = [
  {
    id: "instant",
    title: "Instant Responses",
    description: "Lightning-fast responses",
    icon: <GaugeIcon size={40} />,
    content: "Our AI-powered chatbot provides instant responses 24/7, ensuring your customers get immediate assistance.",
    img: FastImg,
    features: [
      "24/7 Availability",
      "Millisecond Response Time",
      "Multi-Language Support"
    ]
  },
  {
    id: "personalized",
    title: "Personalized Solutions",
    description: "Tailored answers for each customer",
    icon: <PuzzleIcon size={40} />,
    content: "Our AI analyzes customer data to provide personalized solutions, enhancing customer satisfaction and loyalty.",
    img: PuzzleImg,
    features: [
      "Customer Data Analysis",
      "Adaptive Responses",
      "Preference Learning"
    ]
  },
  {
    id: "efficiency",
    title: "Increased Efficiency",
    description: "Streamline your customer service",
    icon: <LineChart size={40} />,
    content: "By automating routine inquiries, our AI frees up your team to focus on complex issues, significantly boosting overall efficiency.",
    img: EfficientImg,
    features: [
      "Automated Routine Inquiries",
      "Task Prioritization",
      "Performance Analytics"
    ]
  }
];

export default function LandingPage() {
 const [activeTab, setActiveTab] = React.useState(tabs[0].id);

 return (
  <div className="flex flex-col min-h-[100dvh] bg-blue-600">
   <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
    {/* Left side: Logo and title */}
    <div className="flex items-center">
     <Link href="/" className="flex items-center" prefetch={false}>
      <Image 
       src={LogoImg}
       height={70}
       width={70}
       className="p-1 rounded-xl border-2 border-secondary text-secondary"
      />
      <p
       className={` text-xl font-semibold mx-2 tracking-widest`}
      >
       <span className="text-white">CALL AZ </span><span className="text-secondary">AI</span>
      </p>
     </Link>
     <span className="sr-only">AI Customer Service</span>
    </div>

    {/* Right side: Navigation */}
    <div>
     <nav className="flex items-center ml-auto gap-4 sm:gap-6 text-secondary">
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
    </div>
   </header>

   <main className="flex-1">
    {/* Hero Section  */}
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-600  to-blue-900">
     <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
       <div className="flex flex-col justify-center space-y-4  p-6">
        <div className="space-y-6 mb-6">
         <p className="font-bold text-zinc-300">Discover Call AZ AI today</p>
         <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
          Revolutionize Your Customer Service with AI
         </h1>
         <p className="max-w-[600px] text-zinc-300 md:text-xl">
          Our AI-powered customer service platform delivers lightning-fast
          responses, personalized solutions, and unparalleled efficiency.
         </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
         <Link
          href="/sign-up"
          className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-300"
          prefetch={false}
         >
          Get Started
         </Link>
         <Link
          href="/sign-in"
          className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 duration-300"
          prefetch={false}
         >
          Login
         </Link>
        </div>
       </div>
       <div className="relative">
        {/* <Image
         src={BlurryBG}
         alt="Blurry background"
         className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full animate-pulse"
         width="500"
         height="500"
         priority
        /> */}
        <Image
         src={HeroImg}
         alt="Hero"
         className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
         width="500"
         height="500"
         priority
        />
       </div>
      </div>
     </div>
    </section>
    {/* Feature Section  */}
    <section className="bg-blue-900">
     <div className="mx-auto">
      <div className="flex justify-between mx-2 sm:mx-4 md:mx-6 lg:mx-10">
       {tabs.map((tab) => (
        <div
         key={tab.id}
         className={`bg-blue-600/15 w-full h-auto px-2 sm:px-3 md:px-4 lg:px-6 pt-4 sm:pt-5 md:pt-6 pb-2 sm:pb-3 md:pb-4 rounded-t-md mx-1 sm:mx-2 md:mx-3 lg:mx-4 cursor-pointer ${
          activeTab === tab.id ? "bg-blue-600/50" : ""
         }`}
         onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
        >
         <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
          <div className="text-white hidden lg:block">
           <p className="font-bold">{tab.title}</p>
           <p className="text-sm">{tab.description}</p>
          </div>
          <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-2xl">
           {tab.icon}
          </span>
         </div>
        </div>
       ))}
      </div>

      {activeTab && (() => {
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-b-md mt-0 h-auto overflow-auto">
      <div className="flex flex-col md:flex-row gap-20 max-w-5xl mx-auto my-20">
        <div className="md:w-1/2">
          <Image
            src={activeTabData?.img}
            alt={`${activeTabData?.title} Feature`}
            className="w-full h-auto object-cover rounded-md"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="flex flex-col md:w-1/2 gap-6 mt-10 text-blue-700">
        {activeTabData?.icon}
          <h2 className="text-2xl font-bold mb-2">{activeTabData?.title}</h2>
          <p className="text-blue-900 mb-4">
            {activeTabData?.content}
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc pl-5">
            {activeTabData?.features.map((feature, index) => (
              <li key={index} className="text-blue-800 mb-1">
                {feature}
              </li>
            ))}
          </ul>
          <Button className="bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border transition-colors duration-500">Learn More</Button>
        </div>
      </div>
    </div>
  );
})()}
     </div>
    </section>

    {/* Testimonial Section  */}
    <section className="">
      <div className="bg-white text-blue-700 text-center"><h1 className="text-3xl">What our clients say</h1></div>
     <TestimonialBanner />
    </section>
    {/* Pricing Section  */}
    <section className="w-full py-12 md:pb-24 lg:pb-32 bg-gradient-to-b from-slate-50 to-slate-100">
     <div className="container px-4 md:px-6 mt-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
       <div className="space-y-2  mb-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">
         Pricing
        </h2>
        <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed0">
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
          <Button className="bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border transition-colors duration-500 w-full">Get Started</Button>
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
          <Button className="bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border transition-colors duration-500 w-full">Get Started</Button>
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
          <Button className="bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border transition-colors duration-500 w-full">Get Started</Button>
         </CardContent>
        </Card>
       </div>
      </div>
     </div>
    </section>

    <section
     className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-b from-slate-100 to-slate-50"
    >
     {/* Contact Section  */}
     <div className="container px-4 md:px-6">
      <p className="text-center mb-4 text-blue-700 tracking-tighter text-3xl">Have any questions?</p>
      <div className="mx-auto max-w-3xl space-y-4 text-center p-6 rounded-xl bg-blue-700">
       <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
        Get in Touch
       </h2>
       <p className="text-slate-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Have a question or need more information? Fill out the form below and
        our team will be in touch.
       </p>
       <form action={contactFormData} className="flex-1 space-y-4 ">
        <div className="grid grid-cols-2 gap-4">
         
          
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
         required
        />
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
   <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-600">
    <p className="text-xs text-white">
     &copy; 2024 AI Customer Service. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6 ">
     <Link
      href="#"
      className="text-xs hover:underline underline-offset-4 text-white"
      prefetch={false}
     >
      Terms of Service
     </Link>
     <Link
      href="#"
      className="text-xs hover:underline underline-offset-4 text-white"
      prefetch={false}
     >
      Privacy
     </Link>
    </nav>
   </footer>
  </div>
 );
}
