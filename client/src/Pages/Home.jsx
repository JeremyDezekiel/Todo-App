import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='container mx-auto'>
            <div>
                <div className='flex justify-between my-5'>
                    <div className=''>
                        <img src='' alt='' />
                        <span>Logo</span>
                    </div>
                    <div className=''>
                        <span>09/12/2024</span>
                    </div>
                </div>
                <div className='flex justify-between mb-5'>
                    <div>
                        <h1 className='font-bold text-5xl text-[#80476f]'>memoire.</h1>
                    </div>
                    <div>
                        <form>
                            <input type='text' placeholder='Search' className='search w-full border-2 border-transparent bg-no-repeat bg-[10px] py-3 pe-5 ps-11 rounded-full text-base bg-[#C9CACA] text-[#a6a6a6]'/>
                        </form>
                    </div>
                </div>
                <div>
                    <div className='mb-5'>
                        <form>
                            <input type='text' placeholder='TITTLE' className='border'/>
                            <button type='submit' className='border rounded-lg py-1 px-5 border-transparent font-medium bg-[#1a1a1a] cursor-pointer text-white hover:bg-[#646cff] ml-10'>+</button>
                        </form>
                    </div>
                    <div className='mb-5'>
                        <h1 className='font-bold text-5xl'>My List</h1>
                    </div>
                    <div>
                        <ul className='grid grid-flow-row gap-10'>
                            <li className='border py-3 px-10 flex justify-between items-center'>
                                <div>
                                    <input type="checkbox" id="" name="" value=""/>
                                    <label for="vehicle1"> Memo 1</label>
                                </div>
                                <div>
                                    <button className="text-black">
                                        &gt;
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home