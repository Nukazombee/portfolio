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
            items-center lg:flex-row lg:flex-wrap lg:justify-center lg:items-center content-center lg:h-[960px] gap-4"
        >
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-red-700 to-color9
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">HTML</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-color9 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[26%]"
              src="../photos/html5.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-color11 to-blue-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">CSS</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-blue-400 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/css3.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-color9 to-yellow-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">JAVASCRIPT</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-yellow-400 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/js.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-sky-600 to-cyan-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">REACT</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-sky-400 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/react.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-emerald-500 to-teal-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">TAILWIND</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-emerald-400 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/tw.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-indigo-600 to-violet-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">BOOTSTRAP</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-violet-500 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/bs.png"
            />
          </div>
          <div
            className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
          >
            <div
              className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-red-700 to-red-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-200 will-change-transform"
            ></div>
            <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
              <h1 className="text-center mt-1 mb-2 text-2xl font-bold">GIT</h1>
              <p className="text-center mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
              <div className=" bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-red-500 flex items-center justify-center">
                <p className="text-white text-center">25%</p>
              </div>
            </div>
            <img
              className="absolute scale-[30%] -top-[24%]"
              src="../photos/gitt.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
