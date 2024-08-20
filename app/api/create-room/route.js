import { NextResponse } from "next/server";
import { liveblocks } from "../../../lib/liveblocks";

export async function POST(request) {
 const body = await request.json();
 console.log(body)

 const roomId = body.roomId

 if (!roomId) {
   return new NextResponse("Invalid roomId", { status: 400 });
 }

 try {
  const roomName = `${roomId}`

  await liveblocks.createRoom(roomName, {
    defaultAccesses: ["room:write"],
  })
  console.log(`Created room: ${roomName}`)
  return new NextResponse("Room created successfully", { status: 200 });
  
 } catch (error) {
  console.error(error);
  return new NextResponse("Error creating room", { status: 500 });
  
 }
}

