import React from "react";
export const Landing = () => {
  return (
    <>
      <div className="spacing">
        <header className="bg-white-300 shadow w-full">
          <div className="max-w-7xl py-2 px-2 text-center">
            <h1 className="text-2xl text-black-700">PocketBook</h1>
          </div>
        </header>
        <div className="flex justify-center">
          <div className="max-w-7xl py-2 opacity-90 relative flex justify-center">
            <img src="./images/library.jpg" alt="library"></img>
            <h2 className="absolute top-1 text-white p-4">
              What will your next read be?
            </h2>
          </div>
        </div>
        <div className="max-w-7xl py-2 ">
          <div className=" bg-black px-2 py-2 flex items-center">
            <div className="h-96 rounded-lg border-4 border-dashed border-blue-200 w-1/3" />
            <div className="h-96 rounded-lg border-4 border-dashed border-green-200 w-1/3" />
            <div className="h-96 rounded-lg border-4 border-dashed border-yellow-200 w-1/3" />
          </div>
        </div>
      </div>
    </>
  );
};
