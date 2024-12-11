import React, { useEffect, useState } from 'react'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'

function CardsTask({ notes, deleteNote }) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <div>
            {isLoading ? (
                <div className='border mb-5 py-3 px-3 w-full'>
                    <span>Loading...</span>
                </div>
            ) : error ? (
                <div className='border mb-5 py-3 px-3 w-full'>
                    <span>Error</span>
                </div>
            ) : notes.length === 0 ? (
                <div className='border mb-5 py-3 px-3 w-full text-center'>
                    <span>No List</span>
                </div>
            ) : (
                notes?.map((note) => (
                    <div key={note.id} className='border mb-5 py-3 px-3 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <button className='border w-5 h-5 rounded-full bg-[#FFDE59]' onClick={() => editStatus(note.id)}></button>
                            <p className='text-xl'>{note.title}</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img className='w-5 h-5 cursor-pointer' src={editIcon} alt='editIcon' onClick={() => editNote(note.id)}/>
                            <img className='w-5 h-5 cursor-pointer' src={deleteIcon} alt='deleteIcon' onClick={() => deleteNote(note.id)}/>
                        </div>
                    </div>
                ))
            )}
            <div className='border mb-5 py-3 px-3 flex justify-between'>
                <input className='w-full h-full' type='text'/>
            </div>
        </div>
    )
}

export default CardsTask