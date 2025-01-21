/* eslint-disable no-unused-vars */
import React from "react";

const GlobalContext =React.createContext({
  monthIndex:0,
  setMonthIndex:(index) => {},
  miniCalenderMonth : 0,
  setMiniCalenderMonth : (index) => {},
  daySelected : null,
  setDaySelected : (day) => {},
  showEventModel : false,
  setShowEventModel : () => {},
  dispatchCalEvent : ({ type , payload }) => {},
  savedEvents : [],
  selectedEvent : null,
  setSelectedEvent : () =>{},
  labels : [],
  setLabels : () => {},
  updateLabel:()=>{},
  filteredEvent : [],

  startDate : null,
  endDate: null,
  setStartDate : (date) => {},
  setEndDate : (date) => {},
});

export default GlobalContext;