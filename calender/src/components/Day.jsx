/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

    function Day({ day, rowIndex }) {
    
    const[dayEvents,setDayEvents] = useState([]);
    const {setDaySelected,setShowEventModel,filteredEvent ,setSelectedEvent} = useContext(GlobalContext)
    useEffect(() => {
        const events = filteredEvent.filter(
            (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format( 'DD-MM-YY' )
            ); 
            setDayEvents(events);
    },[filteredEvent,day])
    
    
    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ? "bg-blue-600  text-white rounded-lg w-7"
        : " ";
    }
    return (
        <div className="border border-gray-200 rounded-lg flex flex-col shadow-sm">
        <header className="flex flex-col items-center bg-gradient-to-b from-slate-200 rounded-md">
            {rowIndex === 0 && (
            <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
            )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
            {day.format("DD")}
            </p>
        </header>
            <div className="flex-1 cursor-pointer"
            onClick={()=>{
                setDaySelected(day);
                setShowEventModel(true)
            }}
            >
                    {dayEvents.map((evt,index) => (
                        <div key={index}
                        onClick={()=> setSelectedEvent(evt)}
                        className={`bg-${evt.label}-200 p-1 ml-1 mr-2 text-xs text-gray-600 rounded mb-1 truncate `}
                        >
                            {evt.title}
                        </div>
                    ) )}
            </div>
        </div>
    );
    }

    export default Day;
