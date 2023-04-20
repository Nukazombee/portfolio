import { useState } from "react";

export default function Component2() {
  return (
    <div>
      <div
        className="w-[90%] lg:w-[1000px] mx-auto mt-5 lg:h-[1940px] auto-w
         2xl:w-[1500px] 2xl:h-full "
      >
        <div
          className="bg-neutral-300 shadow-xl p-4 pb-0 m-2 lg:m-0 rounded-3xl mx-auto w-[420px] md:w-[480px] lg:w-full flex flex-col
            items-center lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-start"
        >
          <div
            className="w-[280px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[122px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-orange-500 to-color9
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 "
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">HTML</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl from-color9 to-orange-500 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[40%] -top-[14%]"
              src="../photos/html5.png"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
