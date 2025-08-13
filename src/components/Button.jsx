import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-stone-200 px-2 rounded'>
      <button>{name}</button>
    </div>
  )
}

export default Button
