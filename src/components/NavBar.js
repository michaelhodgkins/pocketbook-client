import React from 'react'
import { Link } from 'react-router-dom'
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

const ResponsiveNavBar = () => {
  return (
    <div className="bg-gray-800 h-screen w-16 flex flex-col m-0 fixed top-0 items-center justify-around">
    <button className="group bg-gray-600 border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/"}><BookOpenIcon className='text-white w-4 h-8'></BookOpenIcon></Link> 
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Landing Page
        </div>
    </button>
    <button className="group bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/home"}><HomeIcon className='text-white w-4 h-8'/></Link>
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Home Page
        </div></button> 
    <button className="group bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/creation"}><PlusIcon className='text-white w-4 h-8'/></Link>
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Creation Page
        </div>
    </button>
    <button className="group bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/profile"}><UserIcon className='text-white w-4 h-8'></UserIcon></Link>
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Profile Page
        </div>
    </button>
    <button className="group bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/signup"}><ArrowRightOnRectangleIcon className='text-white w-4 h-8'></ArrowRightOnRectangleIcon></Link>
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Signup
        </div>
    </button>
    <button className="group bg-gray-600 items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 mt-2 mb-2 rounded-3xl hover:scale-125 transition-all duration-200 ease-linear">
    <Link to={"/login"}><ArrowLeftOnRectangleIcon className='text-whhite w-4 h-8'></ArrowLeftOnRectangleIcon></Link>
        <div className='inline-block absolute invisible group-hover:visible text-black shadow-md bg-gray-300 text-center  text-sm rounded-md w-28 mx-6'> Login
        </div>
    </button>
    <SunIcon className='h-6 w-6 text-yellow-500' />
    <MoonIcon className='h-6 w-6 text-white' />
    </div>
  )
}

export default ResponsiveNavBar