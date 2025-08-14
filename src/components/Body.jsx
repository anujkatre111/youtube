import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex flex-row gap-[10px]'>
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body
