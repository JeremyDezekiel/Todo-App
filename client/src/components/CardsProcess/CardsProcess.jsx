import React from 'react'
import TaskCompleted from '../../assets/TaskCompleted.png'
import TaskOnGoing from '../../assets/TaskOnGoing.png'
import TaskInProgress from '../../assets/TaskInProgress.png'
import TaskCanceled from '../../assets/TaskCanceled.png'

function CardsProcess({ notes }) {

    const countStatuses = (notes) => {
        return notes.reduce((acc, note) => {
            if (note.status === 'On Going') acc.onGoing += 1
            if (note.status === 'In Process') acc.inProcess += 1
            if (note.status === 'Completed') acc.completed += 1
            if (note.status === 'Canceled') acc.canceled += 1
            return acc
        }, { onGoing: 0, inProcess: 0, completed: 0, canceled: 0 })
    }
    const statusCounts = countStatuses(notes)

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-[#5694F2] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img className='w-12' src={TaskOnGoing} alt='taskongoing'/>
                </div>
                <div>
                    <h1 className='font-medium'>On going</h1>
                    <span className='text-xs'>{statusCounts.onGoing} task</span>
                </div>
            </div>
            <div className='bg-[#FEC347] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img className='w-12' src={TaskInProgress} alt='taskinprogress'/>
                </div>
                <div>
                    <h1 className='font-medium'>In Process</h1>
                    <span className='text-xs'>{statusCounts.inProcess} task</span>
                </div>
            </div>
            <div className='bg-[#53C2C5] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img className='w-12' src={TaskCompleted} alt='taskcompleted'/>
                </div>
                <div>
                    <h1 className='font-medium'>Completed</h1>
                    <span className='text-xs'>{statusCounts.completed} task</span>
                </div>
            </div>
            <div className='bg-[#F26E56] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img className='w-12' src={TaskCanceled} alt='taskcanceled'/>
                </div>
                <div>
                    <h1 className='font-medium'>Canceled</h1>
                    <span className='text-xs'>{statusCounts.canceled} task</span>
                </div>
            </div>
        </div>
    )
}

export default CardsProcess