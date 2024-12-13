import React, { useEffect, useState } from 'react'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'
import axios from 'axios'

function CardsTask({ fetchNotes, notes, deleteNote, editNote, editValue, setEditValue, isLoading, error, filteredNotes }) {
    const [editMode, setEditMode] = useState('')
    const [editStatusMode, setEditStatusMode] = useState('')

    const handleEdit = (note) => {
        setEditMode(note.id)
        setEditValue({ title: note.title, status: note.status })
    }

    const handleEditStatusMode = (note) => {
        setEditStatusMode(note.id)
    }

    // const handleEditStatus = async (note) => {
    //     // setEditStatusMode(note.id)
    //     // setEditStatusProgress({ title: note.title, status: note.status})
    //     if (note.status === 'On Going') {
    //         await axios.patch('http://localhost:3000/todos/' + note.id, {
    //             title: note.title,
    //             datetime: new Date(),
    //             status: "Completed"
    //         })
    //     } else if (note.status === 'Completed') {
    //         await axios.patch('http://localhost:3000/todos/' + note.id, {
    //             title: note.title,
    //             datetime: new Date(),
    //             status: "On Going"
    //         })
    //     }
    //     fetchNotes()
    // }

    const buttonOnGoing = async (note) => {
        if (note.status !== 'On Going') {
            await axios.patch('http://localhost:3000/todos/' + note.id, {
                title: note.title,
                datetime: new Date(),
                status: "On Going"
        })
        fetchNotes()
        }
    }

    const buttonScheduled = async (note) => {
        if (note.status !== 'Scheduled') {
            await axios.patch('http://localhost:3000/todos/' + note.id, {
                title: note.title,
                datetime: new Date(),
                status: "Scheduled"
        })
        fetchNotes()
        }
    }

    const buttonCompleted = async (note) => {
        if (note.status !== 'Completed') {
            await axios.patch('http://localhost:3000/todos/' + note.id, {
                title: note.title,
                datetime: new Date(),
                status: "Completed"
        })
        fetchNotes()
        }
    }

    const buttonCanceled = async (note) => {
        if (note.status !== 'Canceled') {
            await axios.patch('http://localhost:3000/todos/' + note.id, {
                title: note.title,
                datetime: new Date(),
                status: "Canceled"
        })
        fetchNotes()
        }
    }

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
                filteredNotes?.map((note) => (
                    <div key={note.id} className='cardlist border mb-5 py-3 px-3 flex justify-between'>
                        {editMode === note.id ? (
                                <form className='w-full' onSubmit={(e) => {
                                    editNote(e, note.id)
                                    setEditMode('')
                                }}>
                                    <input className='w-full h-full text-xl' type='text' value={editValue.title} onChange={(e) => setEditValue({ ...editValue, title: e.target.value })} />
                                </form>
                            ) : editStatusMode === note.id ? (
                                <>
                                    <div className='flex items-center gap-2'>
                                            <button className='border w-5 h-5 rounded-full bg-[#5694F2]' onClick={() => buttonOnGoing(note)}></button>
                                            <button className='border w-5 h-5 rounded-full bg-[#FEC347]' onClick={() => buttonScheduled(note)}></button>
                                            <button className='border w-5 h-5 rounded-full bg-[#53C2C5]' onClick={() => buttonCompleted(note)}></button>
                                            <button className='border w-5 h-5 rounded-full bg-[#F26E56]' onClick={() => buttonCanceled(note)}></button>
                                        <p className='text-xl'>{note.title}</p>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <img className='w-5 h-5 cursor-pointer' src={editIcon} alt='editIcon' onClick={() => handleEdit(note)} />
                                        <img className='w-5 h-5 cursor-pointer' src={deleteIcon} alt='deleteIcon' onClick={() => deleteNote(note.id)} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex items-center gap-2'>
                                        <button className={`border w-5 h-5 rounded-full
                                                        ${note.status === 'Completed' ? 'bg-[#53C2C5]' :
                                                            note.status === 'On Going' ? 'bg-[#5694F2]' :
                                                            note.status === 'Scheduled' ? 'bg-[#FEC347]' :
                                                            note.status === 'Canceled' ? 'bg-[#F26E56]' :
                                                            'bg-[#F0F0F0]'}`} onClick={() => handleEditStatusMode(note)}></button>
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