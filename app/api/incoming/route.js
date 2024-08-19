import { NextResponse } from 'next/server';
import { createCallAndTicket } from '../../../lib/actions'


export async function POST(req, res){
  // Your code here
  try {
    const data = await req.json();
    console.log('incoming call....')
   

    const ticket = await createCallAndTicket(data);
    console.log('ticket created', ticket)
    return new NextResponse('Data received successfully', { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}