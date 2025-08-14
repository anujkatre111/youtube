import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  //early return
  if(!isMenuOpen){
    return null;
  }
  
  return (
    <div className='w-[200pz] px-[32px] shadow-lg'>
      <div className='w-full'>
        <p>Home</p>
        <p>Shorts</p>
        <p>Videos</p>
        <p>Live</p>
      </div>

      <div className='w-full'>
        <p className='font-bold text-[14px]'>Watch Later</p>
        <p className='text-[14px]'>Music</p>
        <p className='text-[14px]'>Sports</p>
        <p className='text-[14px]'>Gaming</p>
        <p className='text-[14px]'>Movies</p> 
      </div>

      <div className='w-full'>
        <p className='font-bold text-[14px]'>Watch Later</p>
        <p className='text-[14px]'>Music</p>
        <p className='text-[14px]'>Sports</p>
        <p className='text-[14px]'>Gaming</p>
        <p className='text-[14px]'>Movies</p> 
      </div>

    </div>
  )
}

export default Sidebar
