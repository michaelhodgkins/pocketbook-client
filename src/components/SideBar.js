import React from 'react'

const SideBar = () => {
  return (
    <div className='fixed right-0 h-screen'>
      <div className="bg-gray-700 text-white w-64 h-1/3 text-center">
        Friends List
      </div>
      <div className="bg-green-700 text-white w-64 h-1/3 text-center"> Recent Activity
      </div>
      <div className="bg-purple-700 text-white w-64 h-1/3 text-center"> Friend Suggestion
      </div>
    </div>
  );
}

export default SideBar