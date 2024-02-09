'use client'
import { useState, useEffect } from "react";

export default function HomePage() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [additionResult, setAdditionResult] = useState("");
  const [subtractionResult, setSubtractionResult] = useState("");

  const handleAddition = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setValue1(formData.get("val1"));
    setValue2(formData.get("val2"));
  };

  function handleSubtraction(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setValue3(formData.get("val3"));
    setValue4(formData.get("val4"));
  };


  useEffect(() => {
    if (value1 !== "" && value2 !== "") {
      setSubtractionResult("")
      setAdditionResult("Addition Result is: " + (parseInt(value1) + parseInt(value2)));
    }
  }, [value1, value2]);

  useEffect(() => {
    if (value3 !== "" && value4 !== "") {
      setAdditionResult("")
      setSubtractionResult("Subtraction Result is: " + (parseInt(value3) - parseInt(value4)));
    }
  }, [value3, value4]);
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center gap-5">
      <div>
        <form className="flex flex-col w-full items-center gap-3" onSubmit={handleAddition}>
          <h1 className="text-xl font-semibold">Addition Form</h1>
          <div className="flex gap-3">
            <input type="number" name="val1" className="border-2 border-black px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            <input type="number" name="val2" className="border-2 border-black px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            <button type="submit" className="bg-blue-500 px-5 py-2 rounded text-white hover:bg-blue-300">Calculate</button>
          </div>
        </form>
      </div>
      <div>
        <form className="flex flex-col w-full items-center gap-3" onSubmit={handleSubtraction}>
          <h1 className="text-xl font-semibold">Subtraction Form</h1>
          <div className="flex gap-3">
            <input type="number" name="val3" className="border-2 border-black px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            <input type="number" name="val4" className="border-2 border-black px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
            <button type="submit" className="bg-blue-500 px-5 py-2 rounded text-white hover:bg-blue-300">Calculate</button>
          </div>
        </form>
      </div>
      <p className="text-xl font-semibold">{additionResult}</p>
      <p className="text-xl font-semibold">{subtractionResult}</p>
    </div>
  );
}
