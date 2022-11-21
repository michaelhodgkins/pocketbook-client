import React from "react";
import { ArrowsPointingInIcon } from '@heroicons/react/24/solid'
const SideBar = () => {
  return (
    <>
    <button className=' bg-black fixed z-10 right-0 '><ArrowsPointingInIcon className=' h-6 w-6 text-green-600'/></button>
    <div className="fixed right-0 h-screen">
      <header className="text-white w-64 text-center overscroll-auto">
        <h1 className="bg-gray-800">Friends List</h1>
      </header>
      <div className="bg-gray-400 text-white w-64 h-1/3 text-center relative overflow-auto">
        <div className="">
          <button className="bg-orange-600 rounded-full w-14 h-14">
            Picture
          </button>
          <p className="text-white text-sm bg-black">Friend 1</p>
          <button className="bg-orange-600 rounded-full w-14 h-14">
            Picture
          </button>
          <p className="text-white text-sm bg-black">Friend 2</p>
          <button className="bg-orange-600 rounded-full w-14 h-14">
            Picture
          </button>
          <p className="text-white text-sm bg-black">Friend 3</p>
          <button className="bg-orange-600 rounded-full w-14 h-14">
            Picture
          </button>
          <p className="text-white text-sm bg-black">Friend 4</p>
        </div>
      </div>
      <header className="text-white w-64 text-center">
        <h1 className="bg-gray-800">Recent Activity</h1>
      </header>
      <div className="bg-green-700 text-white w-64 h-1/3 text-center relative overflow-auto">
        <main className="">
          <article> Friend 1 is 50% way through a new book by author</article>
          <article>
            Friend 2 has just started a co op read with another friend
          </article>
          <article>
            Friend 3 has left a 5* review on a new book they just finished
            recently
          </article>
          {/** Test to add scroll bar */}
          <article>
            Friend 1 has left a 5* review on a new book they just finished
            recently
          </article>
          <article>
            Friend 2 has left a 5* review on a new book they just finished
            recently
          </article>
        </main>
      </div>
      <header className="text-white w-64 text-center">
        <h1 className="bg-gray-800">Friends Suggestion</h1>
      </header>
      <div className="bg-purple-700 text-white w-64 h-1/3 text-center relative">
        <br />
          <p className="text-white text-sm bg-black">Friend 1</p>
          <br />
          <p className="text-white text-sm bg-black">Friend 2</p>
          <br />
          <p className="text-white text-sm bg-black">Friend 3</p>
          <br />
          <p className="text-white text-sm bg-black">Friend 4</p>
      </div>
      </div>
    </>
  );
};

export default SideBar;
