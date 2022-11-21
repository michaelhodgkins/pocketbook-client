import React from "react";

const Create = () => {
  return (
    <div className="mt-5 border max-w-7xl flex justify-center text-center ">
      <form className="bg-white shadow-md w-1/2 flex-col border py-4">
        <label className="block text-gray-600 text-md">Name of Book</label>
        <input type="text" placeholder="" className="border w-1/2"></input>
        <label className="block text-gray-600 text-md">Author/s</label>
        <input type="text" placeholder="" className="border w-1/2"></input>
        <label className="block text-gray-600 text-md">Rating</label>
        <input
          type="range"
          min="0"
          max="5"
          placeholder=""
          className="border w-1/2"
        />
        <label className="block text-gray-600 text-md">Date read</label>
        <input type="date" placeholder="Please enter DOB" className="border" />
        <label className="block text-gray-600 text-md">
          Would you recommend?
        </label>

        <input
          type="radio"
          name="recommend"
          value="Yes"
          className="border w-1/2"
        />
        {"Yes "}
        <input
          type="radio"
          name="recommend"
          value="No"
          className="border w-1/2"
        />
        {"No "}
        <br />
        <textarea className="border max-w-md"rows={2} cols={30} placeholder='Please write your book review here...'/>
        <div className="flex justify-center p-10">
          <br />
          <button className="bg-grey-400 border w-20 hover:bg-green-500">
            {" "}
            Submit
          </button>
          <button className="bg-grey-400 border w-20 hover:bg-green-200">
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
