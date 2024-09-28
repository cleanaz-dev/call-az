import React from 'react'
import DashboardLayout from "../../../components/DashboardLayout"

export default function layout({ children }) {
  return (
    <div>
      <DashboardLayout >
      {children}
     </DashboardLayout>
    </div>
  )
}
