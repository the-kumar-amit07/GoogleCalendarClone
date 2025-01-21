/* eslint-disable no-unused-vars */
import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalender from './SmallCalender'
import Labels from './Labels'


function Sidebar() {
  return (
    <aside className='border p-5 w-64 rounded-lg'>
      <CreateEventButton/>
      <Labels/>
      <SmallCalender/>
      
    </aside>
  )
}

export default Sidebar