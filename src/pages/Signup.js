import React from 'react'

export const Signup = () => {
  return (
    <div className='ml-20 mt-5 flex justify-center'>
    <form className='bg-white shadow-md w-1/2 flex-col'>
    <label className='block text-gray-600 text-md'>First Name</label>
        <input type="text" placeholder="Please enter your first name" className='border placeholder:'></input>
    <label className='block text-gray-600 text-md'>Last Name</label>
        <input type="text" placeholder="Please enter your last name" className='border placeholder:'></input>
    <label className='block text-gray-600 text-md'>Username</label>
        <input type="text" placeholder="Please enter username" className='border placeholder:'></input>
    <label className='block text-gray-600 text-md'>Email</label>
        <input type="email" placeholder="Please enter username" className='border placeholder:'></input>
    <label className='block text-gray-600 text-md'>DOB</label>
        <input type="date" placeholder="Please enter DOB" className='border placeholder:'></input>
    <label className='block text-gray-600 text-md'>Password</label>
        <input type="password" placeholder="Please enter password" className='border placeholder:'></input>
    <div className='flex justify-center p-10'>
        <br />
        <button className='bg-grey-400 border w-20'> Sign Up</button>
        <button className='bg-grey-400 border w-20'> Reset</button>
    </div>
    </form>
    </div>
  )
}