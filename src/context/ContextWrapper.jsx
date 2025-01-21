/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from "dayjs"

function savedEventsReducer(state, {type, payload}) {
  switch (type) {
    case 'push':
      return[...state,payload];
    case 'update':
      return state.map(event => event.id === payload.id ? payload : event)
    case 'delete':
      return state.filter(event => event.id !== payload.id )
    default:
      throw new Error(`Unhandled action type`);
  }
}

function storeAllEvents() {
  const storageEvents = localStorage.getItem('savedEvents')
  const parsedEvents = storageEvents ? JSON.parse(storageEvents): []
  console.log("parsed events",parsedEvents)  
  return parsedEvents;
}

function ContextWrapper({children}) {
  const[monthIndex,setMonthIndex]=useState(dayjs().month()) // 0 - 11
  const[miniCalenderMonth, setMiniCalenderMonth] = useState(null)
  const[daySelected,setDaySelected] = useState(dayjs())

  const[startDate,setStartDate] = useState(dayjs())
  const [endDate, setEndDate] = useState(dayjs())

  const[showEventModel,setShowEventModel] = useState(false)
  const[selectedEvent,setSelectedEvent] = useState(null)
  const[labels,setLabels] = useState([])
  const[savedEvents,dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    storeAllEvents
    )
  const filteredEvent = useMemo(() =>{
    return savedEvents.filter(evt => labels.filter(lbl => lbl.checked)
    .map(lbl => lbl.label).includes(evt.label)
    )
  },[savedEvents,labels])

  useEffect(() => {
    localStorage.setItem('savedEvents',JSON.stringify(savedEvents))
  },[savedEvents])

  useEffect(() => {
    setLabels((prevLabels) =>{
      return [...new Set(savedEvents.map(evt => evt.label))].map((label)=>{
        const currentLabel = prevLabels.find(lbl => lbl.label === label)
        return{
          label,
          checked: currentLabel ? currentLabel.checked : true,
        }
      })
    })
  },[savedEvents])

  useEffect(() =>{
    if (miniCalenderMonth !== null){
      setMonthIndex(miniCalenderMonth)
    }
  },[miniCalenderMonth])

  useEffect (()=>{
    if (!showEventModel) {
      setSelectedEvent(null)  //for clearing the  selected event when closing model
    }
  },[showEventModel])

  function updateLabel(label) {
    setLabels(labels.map((lbl) => lbl.label === label.label ? label : lbl));
  }

  return (
    <GlobalContext.Provider value={{
      monthIndex,
      miniCalenderMonth,
      daySelected,
      showEventModel,
      savedEvents,
      selectedEvent,
      labels,
      
      startDate,
      endDate,
      setStartDate,
      setEndDate,

      setMonthIndex,
      setMiniCalenderMonth,
      setDaySelected,
      setShowEventModel,
      dispatchCalEvent,
      setSelectedEvent,
      setLabels,
      updateLabel,
      filteredEvent
      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper