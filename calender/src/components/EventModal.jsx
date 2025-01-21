/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs';

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
    ];

function EventModal() {
    const {setShowEventModel , daySelected , dispatchCalEvent , selectedEvent , startDate, endDate} = useContext(GlobalContext);
    const [title,setTitle] = useState( selectedEvent ? selectedEvent.title : '')
    const [description,setDescription] = useState( selectedEvent ? selectedEvent.description : '')
    const [selectedLabel,setSelectedLabel] = useState( selectedEvent ? labelsClasses.find((lblClass) => lblClass === selectedEvent.label) : labelsClasses[0])

    
    

    function handleSubmit (ev){
        ev.preventDefault()
        const calenderEvent = {
            title,
            description,
            label: selectedLabel,
            // day: daySelected.valueOf(),
            stDate:startDate.valueOf(),
            edDate:endDate.valueOf(),
            id :selectedEvent ? selectedEvent.id : Date.now()
        }

        if (selectedEvent) {
            dispatchCalEvent({type : 'update', payload : calenderEvent})
        }else{
            dispatchCalEvent({type : 'push', payload : calenderEvent})
        }
        setShowEventModel(false)
    }

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
        <form className='bg-white rounded-lg shadow-2xl w-2/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400' >
                    drag_handle
                </span>
                    <div>
                        {selectedEvent && (
                            <span 
                            onClick={()=>{
                                dispatchCalEvent({
                                    type:'delete',
                                    payload:selectedEvent
                                })
                                setShowEventModel(false)
                            }}
                            className='material-icons-outlined text-gray-400 cursor-pointer' 
                            >
                                delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModel(false)}>
                            <span className='material-icons-outlined text-gray-400' >
                                close
                            </span>
                        </button>
                    </div>
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-1/5 items-end gap-y-7'>
                    <div></div>
                    <input 
                    type="text" 
                    name='title' 
                    placeholder='Add title' 
                    value={title} 
                    required
                    className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                    onChange={(ev)=> setTitle(ev.target.value)}
                    />
                    <span className="material-icons-outlined text-gray-400">
                        schedule
                    </span>
                    {/* <p>{daySelected.format('dddd, MMMM DD')}</p> */}

                    {/* Experiment*/}
                    <div>
                        <input
                        type='date'
                        name='startDate'
                        placeholder='Select a date'
                        value={startDate}
                        className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' 
                        onChange={(ev) => (ev.target.value)}
                        />
                        <input
                        type='date'
                        name='endDate'
                        placeholder='Select a date'
                        value={endDate}
                        className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500' 
                        onChange={(ev) => (ev.target.value)}
                        />
                    </div>

                    <span className='material-icons-outlined text-gray-400' >
                        segment
                    </span>
                    <input 
                    type="text" 
                    name='description' 
                    placeholder='Add  description' 
                    value={description} 
                    required
                    className='pt-3 border-0 text-gray-600  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                    onChange={(ev)=> setDescription(ev.target.value)}/>
                    <span className='material-icons-outlined text-gray-400'>
                        bookmark_border
                    </span>
                    <div className="flex gap-x-2">
                        {labelsClasses.map((lblClass,index)=>(
                            <span key={index}
                            onClick={()=> setSelectedLabel(lblClass)}
                            className={`bg-${lblClass}-500 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer`}
                            >
                                {
                                    selectedLabel ===  lblClass && (
                                        <span className='material-icons-outlined text-white text-sm'>
                                        check
                                        </span>
                                    )
                                }
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className='flex justify-end border-t p-3 mt-5'>
                <button
                type='submit'
                onClick={handleSubmit}
                className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'
                >
                    Save
                </button>
            </footer>
        </form>
        </div>
    )
}

export default EventModal
