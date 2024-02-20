import React from "react";

export default function Newsletter() {
  return (
    <div className="pt-50 md:py-64 px-4 md:px-20 bg-stone-400 text-white h-screen w-full">
      <h1 className="text-center text-3xl md:text-6xl ">
        Get The Latest Information About{" "}
      </h1>
      <div>
        <h1 className="text-center font-bold text-4xl md:text-5xl pt-5">
          Subscribe Our News Letter
        </h1>                 
        <div className="flex flex-col md:flex-row items-center justify-center pt-5 gap-5">
          <input 
            type="text"
            className="text-white md:px-20 py-1 bg-stone-600 border-4 border-zinc-800 px-2 text-xl md:text-2xl "
            placeholder="Enter Your Email !"
          />
         
          <button className="mb-5 bg-[#22324D] border-2 border-solid mt-5 flex items-center justify-center px-8 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
