import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
function TopicCard() {
  return (
    <div className='w-full flex items-center justify-between px-6 py-2'>
      <div>
        <h1 className='text-2xl font-bold'>Title of this post</h1>
        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, officiis?</p>
      </div>
      <div className='text-2xl flex gap-4 *:cursor-pointer '>

      <FaRegEdit/>
      <MdDeleteSweep className='text-red-500'/>

      </div>
      
    </div>
  )
}

export default TopicCard
