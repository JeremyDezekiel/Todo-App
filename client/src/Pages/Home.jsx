import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import CardsProcess from '../components/CardsProcess/CardsProcess'
import Calendar from '../components/Calendar/Calendar'
import CardsTask from '../components/CardsTask/CardsTask'
import profilePicture from '../assets/ProfilePicture.png'

const Base_URL = 'http://localhost:3000'

function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({
        title: '',
    })

    const fetchNotes = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await axios.get(Base_URL + '/todos?_sort=-datetime')
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

    const addNote = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        try {
            await axios.post(Base_URL + '/todos', {
                title: note.title,
                datetime: new Date()
            })
            setNote({
                title: '',
            })
            fetchNotes()
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteNote = async (id) => {
        try {
            await axios.delete(Base_URL + '/todos/' + id)
            fetchNotes()
        } catch (error) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className='container mx-auto'>
            <Navbar/>
            <div>
                <div className='flex justify-between mb-5'>
                    <div className='flex gap-3'>
                        <img className='w-14' src={profilePicture} alt='profilepicture'/>
                        <div>
                            <h1 className='text-2xl font-semibold'>Hi, JeanneDe</h1>
                            <span className='text-xs'>Your Daily adventure starts now</span>
                        </div>
                    </div>
                    <div>
                        <form>
                            <input type='text' placeholder='Search' className='search w-full border-2 border-transparent bg-no-repeat bg-[10px] py-3 pe-5 ps-11 rounded-full text-base bg-[#C9CACA] text-[#a6a6a6]' />
                        </form>
                    </div>
                </div>
                <div className='grid grid-rows-2 grid-cols-3 gap-3'>
                    <div className='col-span-2 row-span-2'>
                        <CardsProcess/>
                        <h1 className='font-bold text-5xl mb-5 mt-5'>My List</h1>
                        <div>
                            <CardsTask notes={notes} deleteNote={deleteNote}/>
                        </div>
                    </div>
                    <div className='row-span-3'>
                        <Calendar/>
                        <div className='mt-4'>
                            <form className='flex gap-2' onSubmit={(e) => addNote(e)}>
                                <input type='text' placeholder='Write Your New Task' className='border rounded-lg py-3 px-3 w-full' value={note.title} onChange={(e) => setNote({ ...note, title:e.target.value})}/>
                                <button className='font-bold text-[#7d7c7c]' type='submit'>+AddList</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home