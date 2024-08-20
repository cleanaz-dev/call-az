"use client";

import { ReactNode } from "react";
import { getClerkUsers } from "../lib/actions";
import { useUser } from "@clerk/nextjs";
import {
 LiveblocksProvider,
 ClientSideSuspense,
} from "@liveblocks/react/suspense";

export default function Provider({ children }: { children: ReactNode }) {
 const { user: clerkUser } = useUser();
 return (
  <LiveblocksProvider
   authEndpoint="/api/liveblocks-auth"
   resolveUsers={async ({ userIds }) => {
    const users = await getClerkUsers({ userIds });
    console.log(userIds);
    return users;
   }}
  >
   <ClientSideSuspense fallback={<div>Loading…</div>}>
    {children}
   </ClientSideSuspense>
  </LiveblocksProvider>
 );
}
