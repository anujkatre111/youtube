import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appslice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className='grid grid-flow-col py-[24px] shadow-lg'>
      <div className='grid grid-flow-col col-span-1'>
        <img className='h-8 cursor-pointer' onClick={()=>toggleMenuHandler()} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hamburgericon'/>

        <a href="/">
        <img className='h-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' alt='youtubelogo'/></a>

      </div>

      <div className='col-span-10 flex justify-center items-center'>
        <input className='border rounded-l-full p-1' type="search" />
        <button className='border rounded-r-full p-1'>Search</button>
      </div>

      <div className='col-span-1'>
        <img className='h-8' src='https://i.pinimg.com/736x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg' alt='youtube'/>

      </div>
    </div>
  )
}

export default Head
