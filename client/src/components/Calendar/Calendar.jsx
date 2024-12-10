import React, { useEffect, useState } from 'react'

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [daysInMonth, setDaysInMonth] = useState([])

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    const dayNames = [
        'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'
    ]

    useEffect(() => {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        const days = []

        const firstDay = date.getDay()
        const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

        for (let i = 0; i < firstDay; i++) {
            days.push(null)
        }

        for (let i = 1; i <= totalDays; i++) {
            days.push(i)
        }
        setDaysInMonth(days)
    }, [currentDate])

    const changeMonth = (direction) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1))
    }

    const monthName = monthNames[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    const today = new Date()
    const todayDate = today.getDate()
    const todayMonth = today.getMonth()
    const todayYear = today.getFullYear()
    return (
        <div className='text-center'>
            <div className='bg-[#02B8FF] rounded-t-[5px] grid grid-flow-col grid-cols-5 items-center'>
                <button className='m-[5px] py-[5px] cursor-pointer bg-[#007BFF] text-white rounded-[5px] hover:bg-[#0056b3]' onClick={() => changeMonth(-1)}>Prev</button>
                <h1 className='col-span-3 text-2xl'>{`${monthName} ${year}`}</h1>
                <button className='m-[5px] py-[5px] px-[10px] cursor-pointer bg-[#007BFF] text-white rounded-[5px] hover:bg-[#0056b3]' onClick={() => changeMonth(1)}>Next</button>
            </div>
            <div>
                <div className='bg-[#95E1FF] grid grid-cols-7 gap-2'>
                    {dayNames.map((day, index) => (
                        <div key={index} className='p-3 text-center text-sm font-bold'>{day}</div>
                    ))}
                </div>
                <div className='grid grid-cols-7 gap-2'>
                    {daysInMonth.map((day, index) => {
                        if (day === null) {
                            return <div key={index} className='bg-transparent'></div>
                        } else {
                            const isToday = day === todayDate && currentDate.getMonth() === todayMonth && currentDate.getFullYear() === todayYear
                            return (
                                <div key={index} className={`p-3 text-center text-sm ${isToday ? 'bg-[#007BFF] text-white rounded-[5px] font-bold' : 'bg-[#f0f0f0] rounded-[5px]'}`}>
                                    {day}
                                </div>
                            )
                        }
                    })}
                </div>

            </div>
        </div>
    )
}

export default Calendar