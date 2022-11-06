import React from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
const ResponsiveNavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
    <div className="relative flex h-16 items-center justify-around">
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/"}>Home</Link> </button>
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/landing"}>Landing Page</Link></button> 
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/creation"}>Create</Link></button>
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/profile"}>Profile</Link></button>
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/signup"}>Signup</Link></button>
    <button className="inline-flex items-center border border-white-700 text-white hover:bg-green-600 px-4 py-2 ">
    <Link to={"/login"}>Login</Link></button>
    </div>
    </Disclosure>
  )
}

export default ResponsiveNavBar