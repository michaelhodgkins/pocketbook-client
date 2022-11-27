import React from 'react'
import Create from '../components/Create'
import SideBar from '../components/SideBar'
import Update from '../components/Update'
export const Creation = () => {
  return (
    <div className=''>
    <SideBar />
    <div className='flex-col w-screen spacing h-screen bg-red-600'>
    <Create />
    <Update />
    </div>
    </div>
  )
}