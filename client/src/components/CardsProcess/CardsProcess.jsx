import React from 'react'
import TaskCompleted from '../../assets/TaskCompleted.png'

function CardsProcess() {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-[#5694F2] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img src={TaskCompleted} alt=''/>
                </div>
                <div>
                    <h1 className='font-medium'>On going</h1>
                    <span className='text-xs'>24 task</span>
                </div>
            </div>
            <div className='bg-[#FEC347] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img src={TaskCompleted} alt=''/>
                </div>
                <div>
                    <h1 className='font-medium'>In Process</h1>
                    <span className='text-xs'>12 task</span>
                </div>
            </div>
            <div className='bg-[#53C2C5] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img src={TaskCompleted} alt=''/>
                </div>
                <div>
                    <h1 className='font-medium'>Completed</h1>
                    <span className='text-xs'>42 task</span>
                </div>
            </div>
            <div className='bg-[#F26E56] p-3 flex gap-3 rounded-2xl'>
                <div>
                    <img src={TaskCompleted} alt=''/>
                </div>
                <div>
                    <h1 className='font-medium'>Canceled</h1>
                    <span className='text-xs'>8 task</span>
                </div>
            </div>
        </div>
    )
}

export default CardsProcess