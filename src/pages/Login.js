import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='form-position bg-blue-600'>
    <div className='spacing format'>
    <form className='form'>
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
    <p>Don't have an account? Click</p><Link to={"/signup"}>here</Link>
    </form>
    </div>
    </div>
  )
}