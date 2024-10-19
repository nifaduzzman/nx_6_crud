import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='mt-8 py-4 px-8 border items-center border-slate-300 flex justify-between'>
      <h1 className='text-3xl'>nCRUD</h1>
      <Link  href='/create' className='p-3 bg-slate-500 '>Add New</Link>
    </div>
  )
}

export default Navbar
