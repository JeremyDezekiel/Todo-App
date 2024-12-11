import React, { useEffect, useState } from 'react'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'

function CardsTask({ notes, deleteNote, editNote, editValue, setEditValue, isLoading, error }) {
    const [editMode, setEditMode] = useState('')

    const handleEdit = ((note) => {
        setEditMode(note.id)
        setEditValue({title: note.title})
    })

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
                    <div key={note.id} className='cardlist border mb-5 py-3 px-3 flex justify-between'>
                        {
                            editMode === note.id ? (
                                <form className='w-full' onSubmit={(e) => {
                                    editNote(e, note.id)
                                    setEditMode('')
                                }}>
                                    <input className='w-full h-full text-xl' type='text' value={editValue.title} onChange={(e) => setEditValue({...editValue, title:e.target.value})}/>
                                </form>
                            ) : (
                                <>
                                    <div className='flex items-center gap-2'>
                                        <button className='border w-5 h-5 rounded-full bg-[#FFDE59]' onClick={() => editStatus(note.id)}></button>
                                        <p className='text-xl'>{note.title}</p>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-5 h-5 cursor-pointer' src={editIcon} alt='editIcon' onClick={() => handleEdit(note)} />
                                        <img className='w-5 h-5 cursor-pointer' src={deleteIcon} alt='deleteIcon' onClick={() => deleteNote(note.id)} />
                                    </div>
                                </>
                            )
                        }
                    </div>
                ))
            )}
        </div>
    )
}

export default CardsTask