"use server";

import exp from "constants";
import primsa from "./prisma";
import prisma from "./prisma";
import { parseStringify } from "./utils";
import { clerkClient } from "@clerk/nextjs/server";
import axios from "axios";
import { redirect } from "next/navigation";

export const createCallAndTicket = async (data) => {
 try {
  if (!data) {
   throw new Error("Data is required");
  }
  console.log(data);

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

  const roomName = ticketData.id.toString();
  const response = await axios.post("http://localhost:3000/api/create-room", {
   roomId: roomName,
  });

  if (response.status !== 200) {
   throw new Error("Failed to create room");
  }

  return {
   success: true,
   message: "Created successfully",
   ticket: ticketData,
   call: callData,
   room: response.data,
  };
 } catch (error) {
  return {
   success: false,
   message: error.message,
  };
 }
};

export const getAllCalls = async () => {
 try {
  const calls = await primsa.call.findMany({
   include: {
    ticket: true,
   },
  });
  return { success: true, data: calls };
 } catch (error) {
  return {
   success: false,
   message: error.message,
  };
 }
};

export const getCallById = async (id) => {
 try {
  const call = await primsa.call.findUnique({
   where: {
    id,
   },
   include: {
    ticket: true,
   },
  });
  return call;
 } catch (error) {
  return {
   success: false,
   message: error.message,
  };
 }
};

export const getAllTickets = async () => {
 try {
  const tickets = await primsa.ticket.findMany({
   include: {
    Call: true,
    Note: true,
   },
  });
  return { success: true, data: tickets };
 } catch (error) {
  return {
   success: false,
   message: error.message,
  };
 }
};

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
   },
  });
  return { success: true, data: ticket };
 } catch (error) {
  return {
   success: false,
   message: error.message,
  };
 }
};

export const getNotesByTicketId = async ({ ticketId }) => {
 console.log("ticketId:", ticketId);
 try {
  const notes = await primsa.note.findMany({
   where: {
    ticketId,
   },
  });
  return notes;
 } catch (error) {
  console.log("Error fetching notes:", error);
  throw new Error("Failed to fetch notes");
 }
};

export const createNote = async (formData) => {
 const ticketId = formData.get("ticketId");
 const content = formData.get("content");
 const userId = formData.get("userId");

 try {
  const user = await prisma.user.findFirst({
   where: { id: userId },
   select: {
    name: true,
   },
  });
  const note = await prisma.note.create({
   data: {
    content,
    ticket: { connect: { id: ticketId } },
    createdBy: { connect: { id: user.id } },
   },
  });
  return note;
 } catch (error) {
  console.log("Error creating note:", error);
  throw new Error("Failed to create note");
 }
};

export const getClerkUsers = async ({ userIds }) => {
 try {
  const { data } = await clerkClient().users.getUserList({
   emailAddress: userIds,
  });

  const users = data.map(function (user) {
   return {
    id: user.id,
    name: user.firstName,
    email: user.emailAddresses[0].emailAddress,
    avatar: user.imageUrl,
   };
  });

  const sortedUsers = userIds.map(function (email) {
   return users.find(function (user) {
    return user.email === email;
   });
  });

  return parseStringify(sortedUsers);
 } catch (error) {
  console.error("Error fetching users: " + error);
  throw new Error("Failed to fetch users");
 }
};

export const contactFormData = async (formData) => {
 try {
  const name = formData.get("name");
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const company = formData.get("company");
  const message = formData.get("message");
  console.log(name + email + message + mobile + company);
  const response = await axios.post(
   "https://hook.us1.make.com/gkg7apz6vaqfk1exxmtqevyoffynsts3",
   {
    name,
    email,
    mobile,
    company,
    message,
   }
  )
  console.log(response.status);
 } catch (error) {
  console.error("Error sending contact form data: ", error);
  throw new Error("Failed to send contact form data");
 }
 redirect("/thank-you");
};

export const updateTicketStatus = async (formData) => {
 try {
  const ticketId = formData.get("ticketId");
  const status = formData.get("status");
  console.log(formData);
  await primsa.ticket.update({
    where: { id: ticketId },
    data: { status },
  })

  

 } catch (error) {
  console.error("Error updating ticket status: ", error);
  throw new Error("Failed to update ticket status");
 }
 redirect("/tickets");
};
