import React from 'react'

function page() {
  return (
    <form className='w-[80%] flex flex-col gap-4 *:px-2 rounded-md *:rounded-md *:outline-none text-black *:py-4 mx-auto mt-12 border p-12 border-slate-500'>
        <h1 className='text-4xl text-slate-200'>Create new Post.</h1>
      <input type="text"placeholder='Title'spellCheck="false" />
      <input type="text" placeholder='Description' spellCheck="false" className='border w-full '/>

      <div className='w-full flex justify-end'>
        <button className='bg-green-500  font-semibold text-lg p-2 rounded-md'>Create</button>
      </div>

      
    </form>
  )
}

export default page
