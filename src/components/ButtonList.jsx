import React from 'react'
import Button from './Button';

const ButtonName = ["All","Anuj","Movies","Shows","Web Series","Documentaries","News","Sports","Music","Kids"];

const ButtonList = () => {
  return (
    <div className='w-full'>
      <ul className='flex gap-4'>
      {ButtonName.map((name, index)=>(
        <Button key={index} name={name}/>
      ))}
      </ul>
      
    </div>
  )
}

export default ButtonList
 