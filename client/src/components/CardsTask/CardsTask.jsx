import React, { useEffect, useState } from 'react'
import axios from 'axios'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'

const Base_URL = 'http://localhost:3000'

function CardsTask({note}) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [notes, setNotes] = useState([])

    const fetchNotes = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await axios.get(Base_URL + '/todos')
            setNotes(data)
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])
    return (
        <div>
            {JSON.stringify(note)}
            {error && (
                <div className='border mb-5 py-3 px-3 w-full'>
                    <span>Error</span>
                </div>
            )}
            {isLoading && (
                <div className='border mb-5 py-3 px-3 w-full'>
                    <span>Loading...</span>
                </div>
            )}
            {notes.length === 0 && (
                <div className='border mb-5 py-3 px-3 w-full'>
                    <span>No List</span>
                </div>
            )}
            {notes?.map(note => {
                return (
                    <div key={note.id} className='border mb-5 py-3 px-3 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <button className='border w-5 h-5 rounded-full bg-[#FFDE59]'></button>
                            <p className='text-xl'>{note.title}</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img className='w-5 h-5 cursor-pointer' src={editIcon} alt='editIcon' />
                            <img className='w-5 h-5 cursor-pointer' src={deleteIcon} alt='deleteIcon' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardsTask