import { useState } from "react"


function ImageGallery({ currentPhotoIndex, setCurrentPhotoIndex }) {
  const photos = [
    '../photos/photo1.jpg',
    '../photos/photo2.jpg',
    '../photos/photo3.jpg',
    '../photos/photo4.jpg',
  ];

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1);
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex(currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1);
  };

  return (
    <div className="w-full h-[400px]">
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
            style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%'}}
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

export default function Component1 ({ setVisibleComponent }){

  const handleButtonClick = () => {
    setVisibleComponent('Component2');
  };

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap w-[90%] mx-auto mt-12 justify-center ">

        <div className="bg-white shadow-xl p-4 m-2  rounded-3xl mx-auto w-[420px] md:w-[480px] flex flex-col
        items-start lg:w-[400px] lg:p-[32px] lg:pt-[90px] lg:mx-[9px] lg:h-[400px]">
          <p className="font-semibold">Hello! My name is</p>
          <h1 className=" text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">Denis Kurdiukov</h1>
          <article className="text-left lg:mt-[30px]">Passionate junior front-end developer skilled in creating visually 
          appealing, responsive websites and apps using latest technologies.
          </article>
          
        </div>



        <div className=" m-2 rounded-3xl shadow-xl mx-auto w-[420px] md:w-[480px]
        lg:w-[400px] lg:mx-[9px] lg:order-4">
          <ImageGallery currentPhotoIndex={currentPhotoIndex} setCurrentPhotoIndex={setCurrentPhotoIndex} />
          
         
        </div>



        <div className="bg-white p-4 m-2 rounded-3xl mx-auto w-[420px] md:w-[480px] shadow-xl">
          <h2 className="text-3xl font-extrabold text-amber-500">My Road to Coding</h2>
          <hr class="border-1 border-t border-black mt-6 mb-6"></hr>        
          <article className="text-justify">
            <span className="bg-amber-300 text-white font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px]" >
              2012
            </span> 
                Although I always enjoyed programming, I never considered it as a
                potential career path. However, my interest led me to experiment with
                the <b>Scirra Construct 2 engine</b>, where I learned how to effectively combine
                <b> virtual objects, user interfaces, and data</b> to create functional
                  applications and games.
          </article>
          <hr class="border-1 border-t border-black mt-6 mb-6"></hr>
          <article className="text-justify">
            <span className="bg-amber-400 text-white font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px]" >
              2016
            </span> 
                Later on, I expanded my skills to web development by using website
                builders such as <b>WIX</b> and editing websites using <b>WordPress</b>. 
                Specifically, I helped my wife with her business website by making edits
                and updates using the WordPress platform.
          </article>
          <hr class="border-1 border-t border-black mt-6 mb-6"></hr>
          <article className="text-justify">
            <span className="bg-amber-300 text-white font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px]" >
              2020
            </span> 
              During the lockdown, I dedicated my free time to learning the
              basics of <b>Object-Oriented Programming, C#, and the Unity</b> engine. 
              I applied my newfound knowledge to develop a <b>mobile game</b> called Microorganic 2, 
              which I proudly published on <b>Google Play</b>. Despite not receiving many 
              downloads due to lack of marketing, the project was a success in terms 
              of allowing me to gain valuable coding skills and experience.
          </article>
          <hr class="border-1 border-t border-black mt-6 mb-6"></hr>
          <article className="text-justify ">
            <span className="bg-amber-400 text-white font-bold text-[32px]  
              px-[7px] float-left mr-2 relative top-[-5px] " >
              2023
            </span> 
                I worked in various industries, found success, but my passion
                for coding persisted. Initially, I thought IT demanded excessive
                hard skills, but as I gained experience, I realized it wasn't as 
                intimidating. After researching, I created a <span className="bg-amber-500
                text-white font-bold text-[16px] px-[7px] pb-1 hover:cursor-pointer
                " onClick={handleButtonClick}>
                  roadmap</span> to learn modern front-end 
                technologies, studied this whole year, and now I'm excited to join the tech
                industry.
          </article>
         </div>



        <div className="bg-white p-4 m-2 shadow-xl rounded-3xl mx-auto w-[420px] md:w-[480px] ">
          <p className="text-3xl font-extrabold text-amber-500 mb-5">Personality</p>

          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px] mb-1 " >ERUDITION</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[120px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
            I'm a knowledge hoarder - I collect and keep everything I learn. Who knows when it might come in handy, right? 
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >PATIENCE</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[120px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Coding can be challenging and sometimes frustrating, so having patience is one of my key skills
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >CREATIVITY</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[90px] h-[22px] absolute rounded-tl-3xl rounded-bl-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
                Creativity for me is an ability to use appropriate pieces of knowledge and arrange them in new patterns
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >TEAMWORK</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[90px] h-[22px] absolute rounded-tl-3xl rounded-bl-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Teamwork amplifies effort and elevates skills. I value independent work but am eager to join a team of true professionals
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >ACCURACY</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[90px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
            As a coder, I find that paying attention to detail can be one of the most challenging aspects of the job
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >TROUBLESHOOT</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[120px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Mistakes happen. But I'm able to identify issues, research solutions, and implement fixes 
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px] mb-1" >PRIORITIZATION</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[90px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              Pareto principle: 80% of the results can be achieved with 20% of the effort. I always do those 20% first
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >COMMUNICATION</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[90px] h-[22px] absolute rounded-tl-3xl rounded-bl-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              I am a straightforward communicator who prioritizes clear and concise dialogue
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >DISCIPLINE</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[120px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
            Discipline, unlike motivation, involves consistent effort towards achieving goals, even when motivation is lacking, leading to sustained progress and success.
            </div>
          </div>


          <div className=" m-1 mb-3 shadow-lg" >

            <div className="flex justify-between items-center h-[55px] w-[350px] mx-auto">

              <div className="w-[60%] h-[100%] flex justify-end items-center">
                <p className="text-amber-600 font-bold text-[22px] leading-[22px]  mb-1" >ADAPTABILITY</p>
              </div>

              <div className=" relative w-[40%] h-[100%] flex justify-center items-center">
                <span className="bg-yellow-400 w-[120px] h-[22px] absolute rounded-3xl left-4"></span>
                <img className="w-[120px] absolute rounded-3xl left-4" src="../photos/stars2.png"/>              
              </div>
              
            </div>

            <div className="text-left pl-4 pr-4 pb-4">
              As I search for my first IT job, my mind is still really flexible and I'm able to adapt easily
            </div>
          </div>

        </div>



        <div className="bg-white p-4 m-2 shadow-xl rounded-3xl mx-auto w-[420px] md:w-[480px]">
          <div className="flex justify-center items-center">
            <img className="scale-75 " src='../photos/ig.png' />
            <img className="scale-75 " src='../photos/fb.png' />
            <img className="scale-75 " src='../photos/git.png' />
            <img className="scale-75 " src='../photos/gp.png' />
          </div>
        </div>



        
      </div>
      
    </div>
  )
}