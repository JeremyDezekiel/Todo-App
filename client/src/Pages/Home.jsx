import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar'
import CardsProcess from '../components/CardsProcess/CardsProcess'
import Calendar from '../components/Calendar/Calendar'
import CardsTask from '../components/CardsTask/CardsTask'
import profilePicture from '../assets/ProfilePicture.png'
import Swal from 'sweetalert2'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Base_URL = 'http://localhost:3000'

function Home() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [filteredNotes, setFilteredNotes] = useState([])
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({
        title: '',
    })
    const [editValue, setEditValue] = useState({
        title: '',
    })
    const [editStatusMode, setEditStatusMode] = useState('')
    

    const fetchNotes = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const { data } = await axios.get(Base_URL + '/todos?_sort=-datetime')
            setNotes(data)
            setFilteredNotes(data)
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
                datetime: new Date(),
                status: ''
            })
            setNote({
                title: '',
            })
            fetchNotes()
            toast.success('Note has been added!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const editNote = async (e, id) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        try {
            await axios.put(Base_URL + '/todos/' + id, {
                title: editValue.title,
                datetime: new Date(),
                status: editValue.status
            })
            setEditValue({
                title: '',
            })
            fetchNotes()
            toast.info('Note has been edited!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteNote = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(Base_URL + '/todos/' + id)
                    fetchNotes()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your note has been deleted.",
                        icon: "success"
                    })
                }
            })    
        } catch (error) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const buttonChangeStatus = async (note, status) => {
        await axios.patch(Base_URL + '/todos/' + note.id, {
            title: note.title,
            datetime: new Date(),
            status
        })
        fetchNotes()
        setEditStatusMode('')
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    useEffect(() => {
        const filterData = () => {
            const newNote = notes.filter(notes => notes.title.toLowerCase().includes(search.toLowerCase()))
            setFilteredNotes(newNote)
        }
        filterData()
    }, [search])

    return (
        <div className='container mx-auto'>
            <Navbar />
            <div>
                <div className='flex justify-between mb-5'>
                    <div className='flex gap-3'>
                        <img className='w-14' src={profilePicture} alt='profilepicture' />
                        <div>
                            <h1 className='text-2xl font-semibold'>Hi, JeanneDe</h1>
                            <span className='text-xs'>Your daily adventure starts now !</span>
                        </div>
                    </div>
                    <div>
                        <form>
                            <input type='text' placeholder='Search' className='search w-full border-2 border-transparent bg-no-repeat bg-[10px] py-3 pe-5 ps-11 rounded-full text-base bg-[#C9CACA] text-[#a6a6a6]' onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>
                </div>
                <div className='grid grid-rows-2 grid-cols-3 gap-3'>
                    <div className='col-span-2 row-span-2'>
                        <CardsProcess notes={notes}/>
                        <h1 className='font-bold text-3xl mb-5 mt-5'>My List</h1>
                        <div>
                            <CardsTask notes={notes} deleteNote={deleteNote} editNote={editNote} editValue={editValue} setEditValue={setEditValue} isLoading={isLoading} error={error} filteredNotes={filteredNotes} setEditStatusMode={setEditStatusMode} editStatusMode={editStatusMode} buttonChangeStatus={buttonChangeStatus}/>
                        </div>
                    </div>
                    <div className='row-span-3'>
                        <Calendar />
                        <div className='mt-4'>
                            <form className='flex gap-2' onSubmit={(e) => addNote(e)}>
                                <input type='text' placeholder='Write Your New Task' className='border rounded-lg py-3 px-3 w-full' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
                                <button className='font-bold text-[#7d7c7c]' type='submit'>+AddList</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home