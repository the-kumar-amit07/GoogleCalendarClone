/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Day from './Day'

function Month({month}) {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-6">
            {month.map((row, index)=>(
                <React.Fragment key={index}>
                    {row.map((day,idx) =>(
                        <Day day={day} key={idx} rowIndex={index}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month