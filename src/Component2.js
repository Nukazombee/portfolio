export default function Component2() {
  return (
    <div>
      <div
        className="w-[90%] lg:w-[1000px] mx-auto mt-4 h-full auto-w lg:h-[1300px] 2xl:h-[890px]
         2xl:w-[1500px]  "
      >
        <div className="bg-neutral-300 shadow-xl p-4 pb-0 m-2 lg:m-0 rounded-3xl mx-auto w-[420px] md:w-[480px] lg:w-full lg:h-full overflow-hidden">
          <h2 className="text-3xl font-extrabold text-white 2xl:w-full">
            MY SKILLS
          </h2>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center lg:items-center content-center h-full gap-4 -translate-y-10">
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-red-700 to-orange-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  HTML
                </h1>
                <p className="text-center mb-1">
                  HTML is a markup language used to create the structure and
                  content of web pages
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px] ">
                <div
                  className=" bg-primary text-center w-[75%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-orange-400 
                overflow-hidden flex items-center justify-center relative rounded-r-xl "
                >
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-orange-500 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 z-10 rounded-r-xl"
                  ></div>
                  <p className="text-white text-center z-20">75%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[26%]"
                src="../photos/html5.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-color11 to-blue-500
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  CSS
                </h1>
                <p className="text-center mb-1">
                  CSS is a style sheet language used to describe the
                  presentation of HTML documents
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className=" rounded-r-xl relative overflow-hidden bg-primary text-center w-[75%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-blue-400 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-blue-500 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">75%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/css3.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-orange-400 to-yellow-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  JAVASCRIPT
                </h1>
                <p className="text-center mb-1">
                  JavaScript is a high-level programming language used to create
                  interactive and dynamic web pages
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[52%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-yellow-300 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-yellow-400 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">52%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/js.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-sky-600 to-cyan-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  REACT
                </h1>
                <p className="text-center mb-1">
                  JS library for building user interfaces, focused on the
                  component-based approach
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[34%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-sky-300 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-sky-400 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">34%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/react.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-emerald-500 to-teal-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  TAILWIND
                </h1>
                <p className="text-center mb-1">
                  CSS utility framework that provides pre-defined classes for
                  designing customizable UI
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[80%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-teal-300 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-emerald-400 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">80%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/tw.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-indigo-600 to-violet-300
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  BOOTSTRAP
                </h1>
                <p className="text-center mb-1">
                  Bootstrap is a popular front-end web development framework
                  used to design websites
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[25%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-violet-300 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-violet-400 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">25%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/bs.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-red-700 to-red-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  GIT
                </h1>
                <p className="text-center mb-1">
                  Version control system that helps devs track changes in code
                  and collaborate on projects
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[50%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-red-400 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-red-500 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">50%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/gitt.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-indigo-600 to-violet-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  REDUX
                </h1>
                <p className="text-center mb-1">
                  Predictable state container for JS, which helps manage the
                  state in a more organized way
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[18%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-violet-400 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-violet-500 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">18%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/redux.png"
                alt="ter"
              />
            </div>
            <div
              className="w-[250px] h-[360px] bg-white rounded-2xl border-white border-solid border-[6px] overflow-hidden text-color7 shadow-2xl 
              cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 will-change-transform group"
            >
              <div
                className="h-[280px] w-full bg-red-500 rounded-full transform 
              scale-[170%] -translate-x-[66px] -translate-y-[220px] rotate-[-25deg] grid place-items-center bg-gradient-to-bl from-color11 to-blue-400
              group-hover:skew-x-12 group-hover:-rotate-[18deg] transition-all ease-in-out duration-500 will-change-transform"
              ></div>
              <div className="flex flex-col items-center w-[80%] my-0 mx-auto -translate-y-[127px]">
                <h1 className="text-center mt-1 mb-2 text-2xl font-bold">
                  TYPESCRIPT
                </h1>
                <p className="text-center mb-1">
                  TypeScript: a statically typed superset of JavaScript that
                  adds optional type annotations
                </p>
              </div>
              <div class="w-80% h-8 bg-neutral-300 dark:bg-neutral-600 m-3 rounded-md mb-4 -translate-y-[127px]">
                <div className="rounded-r-xl relative overflow-hidden bg-primary text-center w-[15%] h-full font-medium leading-none text-primary-100 bg-gradient-to-bl bg-blue-400 flex items-center justify-center">
                  <div
                    className="absolute -translate-x-[100%] opacity-0 origin-left bg-blue-500 transition ease-out duration-500  w-full h-full  
                  group-hover:translate-x-[0%] group-hover:opacity-100 rounded-r-xl z-10"
                  ></div>
                  <p className="text-white text-center z-20">15%</p>
                </div>
              </div>
              <img
                className="absolute scale-[30%] -top-[24%]"
                src="../photos/ts.png"
                alt="ter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
