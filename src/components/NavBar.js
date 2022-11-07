import React from 'react'
import { Link } from 'react-router-dom'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
const ResponsiveNavBar = () => {
  return (
    <div className="bg-gray-800 h-screen w-16 flex flex-col m-0 fixed top-0 items-center justify-around">
    <button className="bg-gray-600 border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/"}>H</Link> </button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/landing"}>L</Link></button> 
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/creation"}>C</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/profile"}>P</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/signup"}>S</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear">
    <Link to={"/login"}>L</Link></button>
    <SunIcon className='h-6 w-6 text-yellow-500' />
    <MoonIcon className='h-6 w-6 text-white' />
    </div>
  )
}

export default ResponsiveNavBar