// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="min-h-screen font-inter text-white relative overflow-hidden">
      
      {/* //stars */}
      {/* <img
        src="/images/Stars.png"
        alt="Stars Background"
        className="absolute  inset-0 object-cover w-full h-full opacity-50 animate-fadeIn"
        style={{ animationDelay: '0.2s' }}
      /> */}
      {/* some more gradient  */}
      <img
        src="/images/Gradient.png"
        alt="gradient"
        className="absolute bottom-[-90%] left-[-60%] z-4 h-[2000px] w-[2000px]"
        style={{ animationDelay: '0.4s' }}
      />
      {/* some more for text  */}
      <img
        src="/images/Text Glow.png"
        alt="text glow"
        className="absolute top-[15%] left-[10%] z-4 h-[600px] w-[600px]"
        style={{ animationDelay: '0.4s' }}
      />
      {/*after face Ai glow */}
      <img
        src="/images/Model Glow.png"
        alt="AI Model Glow"
        className="absolute z-4 h-[1000px] w-[1000px] top-[-10%] left-[47%]"
        style={{ animationDelay: '0.4s' }}
      />
      {/* ai model */}
      <img
        src="/images/AI Model (1).png"
        alt="AI Human Illustration"
        className="absolute z-5 h-[950px] top-[8%] left-[45%] "
        style={{ animationDelay: '0.6s' }}
      />
      {/* elements  */}
      <img
        src="/images/Elements.png"
        alt="Decorative Elements"
        className="absolute top-[16%] left-[27%] object-contain w-full h-full opacity-70 animate-fadeIn"
        style={{ animationDelay: '0.8s' }}
      />
       <main className="relative z-30 flex flex-col lg:flex-row min-h-screen pt-24 pb-8 md:pt-32 md:pb-12 px-6 md:px-12 lg:px-24 items-center justify-center">

        {/* Left Section - Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center mb-12 lg:mb-0 min-h-[400px] lg:min-h-[600px] animate-fadeIn absolute top-[25%] left-[10%]">

          <h1 className="text-heading">
            AI that talks <span className='special-word'>Health</span> <br/> a Platform that listens.
          </h1>

          <p className=" subTitleOfTest-heading ">
            Experience cutting-edge solutions designed to elevate<br/> productivity and deliver results like never before.
          </p>

        </div>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-0 relative min-h-[300px] lg:min-h-[600px] w-full lg:w-1/2">
        </div>
      </main>
    </div>
  );
}

export default Home;