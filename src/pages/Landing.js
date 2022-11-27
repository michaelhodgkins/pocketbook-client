import React from "react";
import { ImBook } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImStatsDots} from "react-icons/im";
import { ImUser } from "react-icons/im"
import { ImBubbles3 } from "react-icons/im"

export const Landing = () => {
  return (
    <>
      <div className="spacing bg-green-600 h-screen">
        <header className="bg-white-300 shadow w-screen ">
          <div className="py-2 px-2 ">
            <h1 className="text-3xl text-black-700">PocketBook</h1>
          </div>
        </header>
        <div className="flex justify-center py-2">
          <div className=" w-6/12 opacity-90 relative flex justify-center">
            <img src="./images/library.jpg" alt="library"></img>
            <h2 className="absolute text-white p-4">
              What will your next read be?
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-2 flex justify-around w-full ">
            <div className="box-model grid items-center">
            <p className="text-white text-xl justify-self-center">Store all your books in one place</p>
            <ImBook className="text-white w-1/2 h-1/2 justify-self-center" />
            </div>
            <div className="box-model grid items-center">
              <p className="text-white text-xl justify-self-center">Keep track of your reading habits</p>
              <ImCalendar className="text-white w-1/2 h-1/2 justify-self-center" />
            </div>
            <div className="box-model grid items-center">
              <p className="text-white text-xl justify-self-center">See statistics about your reading</p>
              <ImStatsDots className="text-white w-1/2 h-1/2 justify-self-center" />
            </div>
            <div className="box-model grid items-center">
              <p className="text-white text-xl justify-self-center">Have your own profile to customise</p>
              <ImUser className="text-white w-1/2 h-1/2 justify-self-center" />
            </div>
            <div className="box-model grid items-center">
              <p className="text-white text-xl justify-self-center">Chat with friends!</p>
              <ImBubbles3 className="text-white w-1/2 h-1/2 justify-self-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
