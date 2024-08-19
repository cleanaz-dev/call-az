import { MessageCircle, Trash, EditIcon, UserCircleIcon } from 'lucide-react'
import React from 'react'
import { getNotesByTicketId } from '../lib/actions'
import { Button } from './ui/button'
import CreateNote from './AddNoteDialog'

export default async function TicketNotes(ticketId) {
  const notes = await getNotesByTicketId(ticketId)
  console.log(notes)
  return (
    <div className='flex flex-col bg-slate-100 rounded-md p-4 shadow-sm'>
      {notes.length === 0 ? (
        <CreateNote ticketId={ticketId}/>
      ) : (
        <div className='flex flex-col'>
          <div className='flex align-middle items-center gap-2'>
            <UserCircleIcon className='mb-1' />
          </div>
          <p className='text-xs text-muted-foreground'>
            {/* You can map over notes here and display them */}
          </p>
          {notes.map((note, index) => (
            <div key={index} style={{ whiteSpace: 'pre-wrap' }}>
              {note.content} {/* Adjust according to your note structure */}
            </div>
          ))}
          <div className='flex gap-x-2 mt-2'>
            <MessageCircle />
            <EditIcon />
            <Trash />
          </div>
        </div>
      )}
    </div>
  )
}
