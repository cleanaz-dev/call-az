import React from 'react'
import { getAllTickets } from '../lib/actions'
export default async function DashboardSettingsPage() {
  const tickets = await getAllTickets()
  return (
    <div>
      {tickets.length}
    </div>
  )
}
