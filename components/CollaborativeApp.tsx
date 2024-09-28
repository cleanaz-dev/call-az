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
     className="text-white"
    />
   ))}
   {threads.length === 0 && (
    <Composer
     overrides={{
      COMPOSER_PLACEHOLDER: "Add a message...",
     }}
     className="bg-slate-700 rounded-md text-white"
    />
   )}
  </div>
 );
}
