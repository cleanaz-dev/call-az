"use client";

import { useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";

export function CollaborativeApp() {
 const { threads } = useThreads();

 return (
  <div>
   {threads.map((thread) => (
    <Thread
     key={thread.id}
     thread={thread}
     overrides={{
      THREAD_COMPOSER_PLACEHOLDER: "Reply to this message...",
      
     }}
    />
   ))}
   {threads.length === 0 && (
    <Composer
     overrides={{
      COMPOSER_PLACEHOLDER: "Add a message...",
     }}
    />
   )}
  </div>
 );
}
