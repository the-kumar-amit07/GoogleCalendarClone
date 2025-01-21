    /* eslint-disable no-unused-vars */
    import dayjs from "dayjs";
    import React, { useContext, useEffect, useState } from "react";
    import { getMonth } from "../util";
    import GlobalContext from "../context/GlobalContext";

    function SmallCalender() {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);

    function handlePrevMonth() {
        setCurrentMonthIndex(currentMonthIndex - 1);
    }
    function handleNextMonth() {
        setCurrentMonthIndex(currentMonthIndex + 1);
    }

    const { monthIndex,setMiniCalenderMonth,daySelected,setDaySelected } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIndex(monthIndex);
    }, [monthIndex]);

    function getCurrentDayClass(day) {
        const format = "DD-MM-YY"
        const todayDate = dayjs().format(format);
        const currentDay = day.format(format);
        const selectedDay = daySelected && daySelected.format(format);

        if (todayDate === currentDay) {
            return  "bg-blue-600  text-white rounded-lg" 
        } else if( currentDay === selectedDay ){
            return  "bg-blue-300  text-white rounded-lg" 
        }else{
            " ";
        }
    }

    return (
        <div className="mt-9">
        <header className="flex justify-between items-center mb-4">
            <p className="text-gray-500 font-medium">
            {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
                "MMMM  YYYY"
            )}
            </p>
            <div>
                <button onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-500 mx-2">
                    chevron_left
                </span>
                </button>
                <button onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-500 mx-2">
                    chevron_right
                </span>
                </button>
            </div>
        </header>
        <div className="grid grid-cols-7 grid-rows-7">
            {currentMonth[0].map((day,index)=>(
                <span key={index} className="text-sm py-1 text-center">
                    {day.format('dd').charAt(0)}
                </span>
            ))}
            {currentMonth.map((row,index)=>(
                <React.Fragment key={index}>
                    {row.map((day,idx)=>(
                        <button key={idx} onClick={()=>{
                            setMiniCalenderMonth(currentMonthIndex)
                            setDaySelected(day)
                        }} className={`py-1 w-full ${getCurrentDayClass(day)}`}>
                            <span className="text-sm">
                                {day.format('D')}
                            </span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
        </div>
    );
    }

    export default SmallCalender;
