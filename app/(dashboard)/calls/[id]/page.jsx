import React from 'react'
import { getCallById } from '../../../../lib/actions'
export default function SingleCallPage({ params }) {
  const { id } = params
  const call = getCallById(id)
  return (
    <div>
      Single Call Page
    </div>
  )
}
