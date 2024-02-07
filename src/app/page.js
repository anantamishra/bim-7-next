'use client'
import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState("");

  const updateValue = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };

  const updateName = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    setFullName(firstname + " " + lastname);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen w-full justify-center items-center gap-5">
        <div className="text-2xl font-semibold text-blue-500">{count}</div>
        <button onClick={updateValue} className="bg-blue-500 px-5 py-2 text-white hover:bg-blue-400">
          Increment
        </button>
        <button onClick={reset} className="bg-blue-500 px-5 py-2 text-white hover:bg-blue-400">
          Reset
        </button>
      </div>
      <div className="flex min-h-screen bg-black w-full justify-center items-center flex-col gap-5">
        <h1 className="text-white text-2xl">Input field Form for React</h1>
        <form className="flex flex-col gap-3" onSubmit={updateName}>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl">Enter your name</p>
            <input type="text" name="firstname" placeholder="Enter your name" className="px-6 py-2" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xl">Enter your name</p>
            <input type="text" name="lastname" placeholder="Enter your name" className="px-6 py-2" />
          </div>
          <button type="submit" className="bg-white px-6 py-2 font-semibold hover:bg-white/90">
            Submit
          </button>
        </form>
        <p className="text-white text-2xl">{fullName}</p>
      </div>
    </div>
  );
}
