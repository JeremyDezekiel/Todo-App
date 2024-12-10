import React from 'react'
import profilePicture from '../../assets/ProfilePicture.png'
import LiveTime from '../LiveTime/LiveTime'

function Navbar() {
    return (
        <div className='flex justify-between mt-4'>
            <div className='flex gap-3'>
                <img className='w-14' src={profilePicture} alt='profilepicture' />
                <div>
                    <h1 className='text-2xl font-semibold'>Hi, JeanneDe</h1>
                    <span className='text-xs'>Your Daily adventure starts now</span>
                </div>
            </div>
            <LiveTime/>
        </div>
    )
}

export default Navbar