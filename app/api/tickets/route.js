import { NextResponse } from "next/server";

export async function POST(request) {
 console.log("Hello from Ticket API!");
 return new NextResponse("Ticket created successfully", { status: 200 });
}
