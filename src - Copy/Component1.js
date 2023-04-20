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

export default function Component1 (){
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap w-[90%] mx-auto mt-12">

        <div className="bg-white shadow-xl p-4 m-2 rounded-3xl w-[100%] flex flex-col
        items-start">
          <p className="font-semibold">Hello! My name is</p>
          <h1 className="font-bold text-[40px] text-color9">Denis Kurdiukov</h1>
          <article className="text-left">Passionate junior front-end developer skilled in creating visually 
          appealing, responsive websites and apps using latest technologies.
          </article>
          
        </div>



        <div className=" m-2  rounded-3xl w-[100%] shadow-xl">
          <ImageGallery currentPhotoIndex={currentPhotoIndex} setCurrentPhotoIndex={setCurrentPhotoIndex} />
          
         
        </div>



        <div className="bg-white p-4 m-2  rounded-3xl w-[100%] shadow-xl">
        <h2 className="text-3xl font-semibold ">My Road to Coding</h2>
        <hr class="border-1 border-t border-black mt-6 mb-6"></hr>        
        <article className="text-justify">
        <span className="bg-color3 text-white font-bold text-[32px]  
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
        <span className="bg-color3 text-white font-bold text-[32px]  
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
        <span className="bg-color3 text-white font-bold text-[32px]  
        px-[7px] float-left mr-2 relative top-[-5px]" >
          2020
          </span> 
        During the lockdown, I dedicated my free time to learning the
         basics of <b>Object-Oriented Programming, C#, and the Unity</b> engine. 
         I applied my newfound knowledge to develop a mobile game called Microorganic 2, 
          which I proudly published on <b>Google Play</b>. Despite not receiving many 
          downloads due to lack of marketing, the project was a success in terms 
          of allowing me to gain valuable coding skills and experience.
        </article>
        <hr class="border-1 border-t border-black mt-6 mb-6"></hr>
        <article className="text-justify">
        <span className="bg-color3 text-white font-bold text-[32px]  
        px-[7px] float-left mr-2 relative top-[-5px]" >
          2023
          </span> 
          I worked in various industries, found success, but my passion
           for coding persisted. Initially, I thought IT demanded excessive
            hard skills, but as I gained experience, I realized it wasn't as 
            intimidating. After researching, I created a plan to learn modern front-end 
            technologies, studied this whole year, and now I'm excited to join the tech
             industry.
        </article>
         </div>



        <div className="bg-yellow-400 p-4 m-2  rounded-3xl w-[100%]
        animate-bounce">
          sgsd
          </div>



        <div className="bg-amber-600 p-4 m-2  rounded-3xl w-[100%]">
          sdgsg
          </div>



        
      </div>
      
    </div>
  )
}