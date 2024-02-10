import React from 'react'

const NotFound = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col gap-5 items-center justify-center">
        <p className='text-3xl font-semibold text-red-600'>404</p>
        <p className='text-slate-800'>Page not found</p>
    </div>
  )
}

export default NotFound;