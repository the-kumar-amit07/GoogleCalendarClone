/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import plusImg from '../assets/plus.svg';
import GlobalContext from '../context/GlobalContext';

function CreateEventButton() {

    const{setShowEventModel}= useContext(GlobalContext)

    return (
    <button
    onClick={()=> setShowEventModel(true)} 
    className='border p-2 rounded flex items-center shadow-sm hover:shadow-md'>
        <img src={plusImg} alt="create-event" className='w-5 h-5' />
        <span className='pl-3 pr-7'>Create Event</span>
    </button>
    )
}

export default CreateEventButton