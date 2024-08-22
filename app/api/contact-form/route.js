import { NextResponse } from "next/server";

export async function POST(request) {
 console.log("Hello from Contact Form API!");
 return new NextResponse("Contact Form sent successfully", { status: 200 });
}

export async function GET(request) {
  console.log("Hello from Contact Form API!");
  return new NextResponse("Contact Form sent successfully!", { status: 200 });
}