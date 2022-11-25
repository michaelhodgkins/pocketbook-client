import React from 'react'

export const Login = () => {
  return (
    <div className='spacing format'>
    <form className='bg-white shadow-md w-1/2 flex-col border'>
        <br />
    <label className='form-label text-md'>Email</label>
        <input type="email" placeholder="Please enter username" className='border w-1/2'></input>
    <label className='form-label text-md'>Password</label>
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