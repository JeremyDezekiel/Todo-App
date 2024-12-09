import React from 'react'

function Home() {
    return (
        <div className='flex justify-center place-items-center min-h-screen'>
            <div className='border border-black min-w-80 p-6'>
                <div className='grid grid-flow-col justify-between'>
                    <div>
                        <img src='' alt='' />
                        <span>Logo</span>
                    </div>
                    <div>
                        <span>09/12/2024</span>
                    </div>
                </div>
                <div className=''>
                    <div>
                        <h1>My List</h1>
                    </div>
                    <div className=''>
                        <form>
                            <input type='text' placeholder='TITTLE' className='border'/>
                            <button type='submit' className='border rounded-lg py-1 px-5 border-transparent font-medium bg-[#1a1a1a] cursor-pointer text-white hover:bg-[#646cff] ml-10'>+</button>
                        </form>
                    </div>
                    <div>
                        <h4 className='text-4xl font-semibold'>Title</h4>
                        <ul className='list-disc'>
                            <li>Title 1</li>
                            <li>Title 2</li>
                            <li>Title 3</li>
                            <li>Title 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home