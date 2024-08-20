"use client"

import React from 'react'
import {
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CollaborativeApp } from './CollaborativeApp';

export default function CollaborativeRoom({id}: {id: string}) {
  
  return (
    <RoomProvider id={id}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <CollaborativeApp />
        </ClientSideSuspense>
      </RoomProvider>
  )
}
