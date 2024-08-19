import { NextResponse, NextRequest } from "next/server";


export async function POST(req,res) {
  // Your code here
  try {
    
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}