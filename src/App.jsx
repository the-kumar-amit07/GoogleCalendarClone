/* eslint-disable no-unused-vars */
import { useState,useContext } from 'react'
import './App.css'
import { getMonth } from './util'
import CalenderHeader from './components/CalenderHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'
import GlobalContext from './context/GlobalContext'
import { useEffect } from 'react'
import EventModal from './components/EventModal'

function App() {

  // console.table(getMonth(3));
  const [currentMonth,setCurrentMonth] = useState(getMonth())
  const {monthIndex,showEventModel} = useContext(GlobalContext)
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  },[monthIndex])

  return (
    <>
    {showEventModel && <EventModal/>}
      <div className='h-screen flex flex-col bg-slate-100 '>
        <CalenderHeader/>
        <div className="flex flex-1">
          <Sidebar/>
          <Month month= {currentMonth}/>
        </div>
      </div>
    </>
  )
}

export default App
