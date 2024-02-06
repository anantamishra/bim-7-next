'use client'
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  const updateValue = () => {
    setCount(count + 1)
  }
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center gap-5">

      <div className="text-2xl font-semibold text-blue-500 ">{count}</div>
      <button onClick={updateValue} className="bg-blue-500 px-5 py-2 text-white hover:bg-blue-400">Increment</button>
      <button onClick={reset} className="bg-blue-500 px-5 py-2 text-white hover:bg-blue-400">Reset</button>

    </div>

  );
}
