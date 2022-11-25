import React from "react";
export const Landing = () => {
  return (
    <>
      <div className="spacing bg-green-600">
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
            <div className="box-model grid">
            <p className="text-white text-xl justify-self-center">This will be the first feature</p>
            </div>
            <div className="box-model flex items-center">
              <p className="text-white">This will be the second feature</p>
            </div>
            <div className="box-model">
              <p className="text-white">This will be the third feature</p>
            </div>
            <div className="box-model">
              <p className="text-white">This will be the fourth feature</p>
            </div>
            <div className="box-model">
              <p className="text-white">This will be the fifth feature</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
