import React from 'react'

export const Signup = () => {
  return (
    <div className='ml-20 mt-5 border max-w-7xl flex justify-center text-center'>
    <form className='bg-white shadow-md w-1/2 flex-col border'>
    <label className='block text-gray-600 text-md'>First Name</label>
        <input type="text" placeholder="Please enter your first name" className='border w-1/2'></input>
    <label className='block text-gray-600 text-md'>Last Name</label>
        <input type="text" placeholder="Please enter your last name" className='border w-1/2'></input>
    <label className='block text-gray-600 text-md'>Username</label>
        <input type="text" placeholder="Please enter username" className='border w-1/2'></input>
    <label className='block text-gray-600 text-md'>Email</label>
        <input type="email" placeholder="Please enter username" className='border w-1/2'></input>
    <label className='block text-gray-600 text-md'>DOB</label>
        <input type="date" placeholder="Please enter DOB" className='border'></input>
    <label className='block text-gray-600 text-md'>Password</label>
        <input type="password" placeholder="Please enter password" className='border w-1/2'></input>
    <div className='flex justify-center p-10'>
        <br />
        <button className='bg-grey-400 border w-20 hover:bg-green-500'> Sign Up</button>
        <button className='bg-grey-400 border w-20 hover:bg-green-200'> Reset</button>
    </div>
    </form>
    </div>
  )
}