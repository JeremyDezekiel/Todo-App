import React from 'react'
import LiveTime from '../LiveTime/LiveTime'

function Navbar() {
    return (
        <div className='flex justify-between mt-4 mb-5'>
            <h1 className='league-spartan font-bold text-5xl text-[#80476f]'>memoire.</h1>
            <LiveTime />
        </div>
    )
}

export default Navbar