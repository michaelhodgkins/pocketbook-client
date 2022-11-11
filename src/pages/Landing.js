import React from 'react'

export const Landing = () => {
  return (
    <div>
    <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-2 px-2 text-center'>
            <h1 className='text-2xl text-black-700'>PocketBook</h1>
        </div>
    </header>
    <main>
        <div className='mx-auto max-w-8xl py-2'>
            <div className='bg-gray-300 px-2 py-2'>
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
        </div>
        <div className= 'mx-auto max-w-8xl py-2'>
        <div className='bg-gray-300 px-2 py-2'>
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
        </div>
    </main>
    </div>
  )
}