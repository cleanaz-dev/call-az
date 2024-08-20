"use server";

import exp from "constants";
import primsa from "./prisma"
import prisma from "./prisma";
import { parseStringify } from "./utils";
import { clerkClient } from "@clerk/nextjs/server";

export const createCallAndTicket = async (data) => {
 try {
  if (!data) {
   throw new Error("Data is required");
  }
  console.log(data)
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const {
    analysis,
    call_id,
    corrected_duration,
    concatenated_transcript,
    from,
    completed,
    record,
    recording_url,
    summary,
    to,
    transferred_to,
    transcripts,
    variables,
  } = data;

  const callData = await primsa.call.create({
    data: {
     callId: call_id,
     length: corrected_duration,
     callerEmail: analysis.email,
     callerName: analysis.name,
     callerPhone: analysis.number,
     to,
     from,
     completed,
     record,
     recordingUrl: recording_url,
     transcripts: concatenated_transcript,
    //  created_at,
    //  variables,
    //  analysis,
    //  transferred_to,
    },
  });
  

  const ticketData = await primsa.ticket.create({
   data: {
    callId: callData.id,
    description: capitalizeFirstLetter(analysis.description),
    summary,
   },
  });

  return {
   success: true,
   message: "Created successfully",
   ticket: ticketData,
   call: callData,
  };
 } catch (error) {
  return { 
    success: false, 
    message: error.message 
  };
 }
};


export const getAllCalls = async () => {
  try {
   const calls = await primsa.call.findMany({
    include: {
      ticket: true,
    }
   });
   return { success: true, data: calls };
  } catch (error) {
   return {
    success: false,
    message: error.message,
   };
  }
}

export const getCallById = async (id) => {
  try {
   const call = await primsa.call.findUnique({
    where: {
     id,
    },
    include: {
      ticket: true,
    }
   });
   return call;
  } catch (error) {
   return {
    success: false,
    message: error.message,
   };
  }
}

export const getAllTickets = async () => {
  try {
   const tickets = await primsa.ticket.findMany({
    include: {
      Call: true,
      Note: true,
    }
   })
   return {success: true, data: tickets };
  } catch (error) {
   return {
    success: false,
    message: error.message,
   };
  }
}

export const getTicketById = async (id) => {
  try {
   const ticket = await primsa.ticket.findUnique({
    where: {
     id,
    },
    include: {
      Call: true,
      Note: true,
      assignedTo: true,
    }
   });
   return {success: true, data: ticket };
  } catch (error) {
   return {
    success: false,
    message: error.message,
   };
  }
}

export const getNotesByTicketId = async ({ticketId}) => {
  console.log("ticketId:", ticketId);
  try {
    const notes = await primsa.note.findMany({
     where: {
      ticketId,
     },
    });
   return notes;
  } catch (error) {
    console.log("Error fetching notes:",error);
    throw new Error("Failed to fetch notes");
  };
}

export const createNote = async (formData) => {
  const ticketId = formData.get("ticketId");
  const content = formData.get("content");
  const userId = formData.get("userId");

  try {
    const user = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        name: true,
      }
    })
    const note = await prisma.note.create({
      data: {
        content,
        ticket: {connect: {id: ticketId}},
        createdBy: {connect: {id: user.id}},
        
      },
    });
    return note;
  } catch (error) {
    console.log("Error creating note:", error);
    throw new Error("Failed to create note");
  }
}

export const getClerkUsers = async ({ userIds }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });

    const users = data.map(function(user) {
      return {
        id: user.id,
        name: user.firstName,
        email: user.emailAddresses[0].emailAddress,
        avatar: user.imageUrl,
      };
    });

    const sortedUsers = userIds.map(function(email) {
      return users.find(function(user) {
        return user.email === email;
      });
    });

    return parseStringify(sortedUsers);
  } catch (error) {
    console.log('Error fetching users: ' + error);
  }
};


