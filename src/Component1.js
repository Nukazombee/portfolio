import { useState } from "react";

function ImageGallery({ currentPhotoIndex, setCurrentPhotoIndex }) {
  const photos = [
    "../photos/photo1.jpg",
    "../photos/photo2.jpg",
    "../photos/photo3.jpg",
    "../photos/photo4.jpg",
    "../photos/photo5.jpg",
    "../photos/photo6.jpg",
    "../photos/photo7.jpg",
    "../photos/photo8.jpg",
    "../photos/photo9.jpg",
    "../photos/photo10.jpg",
  ];

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(
      currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1
    );
  };

  return (
    <div className="w-full h-[400px] lg:h-full">
      <div className="relative h-full ">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            className={`absolute rounded-3xl top-0 left-0 w-full h-full transition-opacity 
            duration-500 ${
              index === currentPhotoIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        ))}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3"
          onClick={goToPrevPhoto}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3"
          onClick={goToNextPhoto}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Component1() {
  

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div>
      <div
        className="grid w-[90%] lg:w-[1000px] mx-auto mt-5 grid-cols-1 lg:grid-cols-2 lg:auto-rows-max lg:h-[1940px] auto-w
       lg:gap-4 2xl:grid-cols-[330px_minmax(400px,_1fr)_660px] 2xl:w-[1500px] 2xl:h-full 2xl:grid-rows-[315px_335px_279px]"
      >
        <div
          className="bg-white shadow-xl p-4 m-2 lg:m-0 rounded-3xl mx-auto w-[420px] md:w-[480px] flex flex-col
          items-start lg:w-full lg:p-[32px] lg:pt-[50px] lg:h-[full] lg:mx-0 lg:ml-auto border-x-8  border-x-color11
          lg:order-first 2xl:col-start-1 2xl:col-end-2 2xl:row-start-1 2xl:row-end-2 2xl:h-full 2xl:p-[34px]"
        >
          <p className="font-semibold">Hello! My name is</p>
          <h1
            className=" text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-color11 to-color13 2xl:text-left
          2xl:leading-[42px] 2xl:my-4 2xl:text-[50px]"
          >
            Denis <p className="text-color9 inline font-extrabold">Kurdiukov</p>
          </h1>
          <article className="text-left lg:mt-[30px] 2xl:mt-0">
            Passionate junior front-end developer skilled in creating visually
            appealing, responsive websites and apps using latest technologies.
          </article>
        </div>

        <div
          className=" m-2 lg:m-0 rounded-3xl shadow-xl mx-auto w-[420px] md:w-[480px]
        lg:w-full lg:h-[620px] lg:mx-0 lg:ml-auto lg:order-3 2xl:order-4 2xl:h-full"
        >
          <ImageGallery
            currentPhotoIndex={currentPhotoIndex}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
          />
        </div>

        <div
          className=" bg-color13 border-[8px] border-white border-solid p-4 m-2 lg:m-0 rounded-3xl mx-auto w-[420px] md:w-[480px] 
          shadow-xl lg:w-full lg:h-full lg:p-[32px] lg:pt-[50px] lg:mx-0 lg:mr-auto 2xl:pt-4
          lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:order-2 2xl:order-2 2xl:col-start-2 2xl:col-end-3 2xl:row-start-1 2xl:row-end-3 2xl:h-[960px]"
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">
            MY ROAD TO CODING
          </h2>

          <article className="text-justify text-white">
            <span
              className="bg-white text-color13 font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px] rounded-xl"
            >
              2012
            </span>
            Although I always enjoyed programming, I never considered it as a
            potential career path. However, my interest led me to experiment
            with the <b className="text-color11">Scirra Construct 2 engine</b>, where I learned how to
            effectively combine
            <b className="text-color11"> virtual objects, user interfaces, and data</b> to create
            functional applications and games.
          </article>
          <hr class="border-4 border-t border-color11 mt-6 mb-6"></hr>
          <article className="text-justify text-white">
            <span
              className="bg-white text-color13 font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px] rounded-xl"
            >
              2016
            </span>
            Later on, I expanded my skills to web development by using website
            builders such as <b className="text-color11">WIX</b> and editing websites using{" "}
            <b className="text-color11">WordPress</b>. Specifically, I helped my wife with her business
            website by making edits and updates using the WordPress platform.
          </article>
          <hr class="border-4 border-t border-color11 mt-6 mb-6"></hr>
          <article className="text-justify text-white">
            <span
              className="bg-white text-color13 font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px] rounded-xl"
            >
              2020
            </span>
            During the lockdown, I dedicated my free time to learning the basics
            of <b className="text-color11">Object-Oriented Programming, C#, and the Unity</b> engine. I
            applied my newfound knowledge to develop a <b className="text-color11">mobile game</b> called
            Microorganic 2, which I proudly published on <b className="text-color11">Google Play</b>.
            Despite not receiving many downloads due to lack of marketing, the
            project was a success in terms of allowing me to gain valuable
            coding skills and experience.
          </article>
          <hr class="border-4 border-t border-color11 mt-6 mb-6"></hr>
          <article className="text-justify text-white">
            <span
              className="bg-white text-color13 font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px] rounded-xl "
            >
              2023
            </span>
            I worked in various industries, found success, but my passion for
            coding persisted. Initially, I thought IT demanded excessive hard
            skills, but as I gained experience, I realized it wasn't as
            intimidating. After researching, I created a roadmap
            to learn modern front-end technologies, studied this whole year, and
            now I'm excited to join the tech industry.
          </article>
        </div>

        <div
          className="bg-color11 p-4 m-2 shadow-xl rounded-3xl mx-auto w-[420px]
         md:w-[480px] lg:w-full lg:order-4 lg:col-start-1 lg:col-end-3 lg:m-0 lg:row-start-3 lg:row-end-5 lg:flex lg:flex-wrap
         lg:justify-evenly 2xl:order-3 2xl:col-start-3 2xl:col-end-4 2xl:row-start-1 2xl:row-end-3 2xl:h-[960px] gap-2"
        >
          <p className="text-3xl font-extrabold text-white mb-5 lg:w-full 2xl:mb-0 2xl:h-[36px]">
            PERSONALITY
          </p>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px] transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center  ">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  ERUDITION
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
                <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700  w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>

                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              I'm a knowledge hoarder - I collect and keep everything I learn.
              Who knows when it might come in handy, right?
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center ">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  PATIENCE
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Coding can be challenging and sometimes frustrating, so having
              patience is one of my key skills
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  CREATIVITY
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 opacity-0 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Creativity for me is an ability to use appropriate pieces of
              knowledge and arrange them in new patterns
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  TEAMWORK
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 opacity-0 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Teamwork amplifies effort and elevates skills. I value independent
              work but am eager to join a team of true professionals
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]   transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  ACCURACY
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 opacity-0 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              As a coder, I find that paying attention to detail can be one of
              the most challenging aspects of the job
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px] 2xl:relative 2xl:left-3">
                  TROUBLESHOOT
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-[6px] 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Mistakes happen. But I'm able to identify issues, research
              solutions, and implement fixes
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 font-bold group-hover:text-amber-600 transition ease-in-out duration-300 text-[22px] leading-[22px] 2xl:relative 2xl:left-3">
                  PRIORITIZATION
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-[6px] 2xl:bottom-1 overflow-hidden ">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Pareto principle: 80% of the results can be achieved with 20% of
              the effort. I always do those 20% first
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px] 2xl:text-[20px] 2xl:relative 2xl:left-3">
                  COMMUNICATION
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-[6px] 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 opacity-0 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              I am a straightforward communicator who prioritizes clear and
              concise dialogue
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:cursor-pointer will-change-transform
          hover:-translate-y-1 rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px]  ">
                  DISCIPLINE
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 opacity-0 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Discipline involves consistent effort towards achieving goals
               leading to sustained progress and
              success. My credo
            </div>
          </div>

          <div
            className="bg-white m-1 mb-3 shadow-lg lg:w-[450px]  transition ease-in-out duration-300 hover:-translate-y-1 hover:cursor-pointer will-change-transform
          rounded-2xl 2xl:w-[290px] 2xl:hover:scale-105 2xl:mb-0 2xl:flex-grow  bg-opacity-70 hover:bg-opacity-100 2xl:p-2 2xl:h-[165px] group"
          >
            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto 2xl:w-full 2xl:h-[38px]">
              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-color11 group-hover:text-amber-600 transition ease-in-out duration-300 font-bold text-[22px] leading-[22px] ">
                  ADAPTABILITY
                </p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center 2xl:ml-3">
              <span>
                  <div className="absolute  bg-color13  transition ease-in-out duration-300 w-[94px] h-[26px] rounded-3xl left-[23px] bottom-[13px] 2xl:left-2 2xl:bottom-1 overflow-hidden">
                    <div
                      className="absolute scale-x-0 origin-left bg-amber-600 transition ease-in-out duration-700 w-[94px] h-[28px]  
                  group-hover:scale-x-100 "
                    ></div>
                  </div>
                  <div className="flex ">
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce2"
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce3 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce4 "
                      src="../photos/star.png"
                    />
                    <img
                      className="w-[16px] transform group-hover:animate-star-bounce5 "
                      src="../photos/star.png"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              As I'm searching for my first IT job, my mind is still flexible
              and I'm able to adapt easily
            </div>
          </div>
        </div>

        <div
          className="bg-neutral-300  p-4 m-2 shadow-xl rounded-3xl mx-auto w-[420px] 2xl:h-full border-8  border-white
         md:w-[480px] lg:order-5 lg:col-start-1 lg:m-0 lg:col-end-3 lg:w-full lg:h-[130px] 2xl:order-5 2xl:col-start-1 2xl:col-end-2 2xl:flex 2xl:items-center"
        >
          <div className="flex justify-center items-center 2xl:flex-wrap 2xl:justify-evenly 2xl:items-center ">
            <img className="scale-90 hover:scale-100 hover:-rotate-6 transition-all duration-200 ease-in-out will-change-transform hover:cursor-pointer" src="../photos/igex2.png" />
            <img className="scale-90 hover:scale-100 hover:-rotate-6 transition-all duration-200 ease-in-out will-change-transform hover:cursor-pointer" src="../photos/fbex2.png" />
            <img className="scale-90 hover:scale-100 hover:-rotate-6 transition-all duration-200 ease-in-out will-change-transform hover:cursor-pointer" src="../photos/gitex2.png" />
            <img className="scale-90 hover:scale-100 hover:-rotate-6 transition-all duration-200 ease-in-out will-change-transform hover:cursor-pointer" src="../photos/gpex2.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
