/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'


function CalenderHeader() {

  const {monthIndex,setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth(){
    setMonthIndex(monthIndex + 1)
  }

  function handleReset(){
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
  }

  return (
    <header className="px-4 py-2 flex items-center bg-white shadow-md">
      <img src={logo} alt="time-tracer-logo"  className='mr-2 w-12 h-12 rounded-md'/>
      <h1 className='mr-10 text-xl font-bold text-white'>TimeTracer</h1>
      
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-slate-300 mx-2' >
          chevron_left
        </span>
      </button>

      <button onClick={handleReset} className="border rounded py-2 px-4 bg-slate-50  shadow-sm hover:shadow-md">
        Today
      </button>

      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-slate-300 mx-2'>
          chevron_right
        </span>
      </button>
      <h2 className='ml-4 text-xl text-slate-300 font-medium'>
        {dayjs(new Date(dayjs().year(),monthIndex))
        .format( "MMMM YYYY" )
        .toUpperCase()
        }
      </h2>
    </header>

  )
}

export default CalenderHeader