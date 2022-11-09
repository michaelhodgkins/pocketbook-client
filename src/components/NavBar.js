import React from 'react'
import { Link } from 'react-router-dom'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
const ResponsiveNavBar = () => {
  return (
    <div className="bg-gray-800 h-screen w-16 flex flex-col m-0 fixed top-0 items-center justify-around">
    <button className="group bg-gray-600 border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/"}>L</Link> 
    <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Landing Page
        </div>
    </button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/home"}>H</Link></button> 
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/creation"}>C</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/profile"}>P</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/signup"}>S</Link></button>
    <button className="bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/login"}>L</Link></button>
    <SunIcon className='h-6 w-6 text-yellow-500' />
    <MoonIcon className='h-6 w-6 text-white' />
    </div>
  )
}

export default ResponsiveNavBar