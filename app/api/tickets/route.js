import { NextResponse } from "next/server";

export async function POST(request) {
 console.log("Hello from Ticket API!");
 return new NextResponse("Ticket created successfully", { status: 200 });
}

export async function GET(request) {
  console.log("Hello from Ticket API!");
  return new NextResponse("Tickets retrieved successfully!", { status: 200 });
}