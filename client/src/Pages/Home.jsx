import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardsProcess from '../components/CardsProcess/CardsProcess'
import Calendar from '../components/Calendar/Calendar'
import CardsTask from '../components/CardsTask/CardsTask'
import profilePicture from '../assets/ProfilePicture.png'
import Swal from 'sweetalert2'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NoteAPI from '../library/axisos'

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
            const { data } = await NoteAPI.get('/todos?_sort=-datetime')
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
        if (!note.title.trim()) {
            toast.error('Title cannot be empty!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            return
        }
        setIsLoading(true)
        setError(null)
        try {
            await NoteAPI.post('/todos', {
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
                })
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const editNote = async (e, id) => {
        e.preventDefault()
        if (!editValue.title.trim()) {
            toast.error('Title cannot be empty!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            return
        }
        setIsLoading(true)
        setError(null)
        try {
            await NoteAPI.put('/todos/' + id, {
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
                })
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const deleteNote = async (id) => {
        setIsLoading(true)
        setError(null)
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
                    await NoteAPI.delete('/todos/' + id)
                    fetchNotes()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your note has been deleted.",
                        icon: "success"
                    })
                }
            })    
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    const buttonChangeStatus = async (note, status) => {
        if (status === note.status) {
            toast.success('no change in status!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                })
                setEditStatusMode('')
                return
        }
        setIsLoading(true)
        setError(null)
        try {
            await NoteAPI.patch('/todos/' + note.id, {
                title: note.title,
                datetime: new Date(),
                status
            })
            fetchNotes()
            setEditStatusMode('')

            const statusMessages = {
                'On Going': 'Status has been changed to On going!',
                'Scheduled': 'Status has been changed to Scheduled!',
                'Completed': 'Status has been changed to Completed!',
                'Canceled': 'Status has been changed to Canceled!',
            }

            if (statusMessages[status]) {
                toast.success(statusMessages[status], {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                })
            }
        } catch (err) {
            console.error(err)
            setError(err)
        }  
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
            <main>
                <header className='2xl:flex 2xl:justify-between 2xl:mb-3 md:flex md:justify-between md:items-center md:mb-1 mb-3'>
                    <div className='flex gap-3 mb-5'>
                        <img className='w-14' src={profilePicture} alt='profilepicture' />
                        <div>
                            <h1 className='text-2xl font-semibold'>Hi, JeanneDe</h1>
                            <span className='text-sm'>Your daily adventure starts now !</span>
                        </div>
                    </div>
                    <div>
                        <form>
                            <input type='text' placeholder='Search' className='search w-full border-2 border-transparent bg-no-repeat bg-[10px] py-3 pe-5 ps-11 rounded-full text-base bg-[#C9CACA] text-[#a6a6a6]' onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>
                </header>
                <section className='lg:grid lg:grid-cols-3 lg:gap-3'>
                    <div className='lg:col-span-2'>
                        <CardsProcess notes={notes}/>
                        <div className='mt-4 block lg:hidden'>
                            <form className='flex gap-2' onSubmit={(e) => addNote(e)}>
                                <input type='text' placeholder='Write Your New Task' className='border rounded-lg py-3 px-3 w-full' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
                                <button className='font-bold text-[#7d7c7c]' type='submit'>+AddList</button>
                            </form>
                        </div>
                        <h1 className='font-bold text-3xl mb-5 mt-5'>My List</h1>
                        <div>
                            <CardsTask notes={notes} deleteNote={deleteNote} editNote={editNote} editValue={editValue} setEditValue={setEditValue} isLoading={isLoading} error={error} filteredNotes={filteredNotes} setEditStatusMode={setEditStatusMode} editStatusMode={editStatusMode} buttonChangeStatus={buttonChangeStatus}/>
                        </div>
                    </div>
                    <aside className='lg:block hidden'>
                        <Calendar/>
                        <div className='mt-4'>
                            <form className='flex gap-2' onSubmit={(e) => addNote(e)}>
                                <input type='text' placeholder='Write Your New Task' className='border rounded-lg py-3 px-3 w-full' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
                                <button className='font-bold text-[#7d7c7c]' type='submit'>+AddList</button>
                            </form>
                        </div>
                    </aside>
                </section>
            </main>
            <ToastContainer />
        </div>
    )
}

export default Home