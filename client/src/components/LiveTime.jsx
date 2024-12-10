import React, { useEffect, useState } from 'react'

function LiveTime() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [time, setTime] = useState(currentDate.toLocaleDateString())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    const dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    const dayOfWeek = dayNames[currentDate.getDay()]
    const dayOfMonth = currentDate.getDate()
    const month = monthNames[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    return (
        <div className='text-center'>
            <h2>{`${dayOfWeek}, ${month} ${dayOfMonth} ${year}`}</h2>
            <h3>{time}</h3>   
        </div>
    )
}

export default LiveTime