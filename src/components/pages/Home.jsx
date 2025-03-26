import React from "react";

const Content = () => {
  return (
    <> 
      <section id="main-section" className="relative">
        <div>
          <img src="/images/background.png" alt="Background" className="w-full" />
          <div className="hidden md:block md:absolute top-48 left-40 mx-auto bg-white max-w-[500px] p-10 rounded-md space-y-3 shadow-lg">
            <h1 className="text-4xl text-gray-700 max-w-80">
              Self-Paced learning courses Online
            </h1>
            <p className="text-2xl text-gray-500">
              We are long past the online courses work training that involves video lectures, unit plans, and quizzes!
            </p>
            <button className="bg-[#459ae5] px-5 py-3 rounded-lg mt-3 text-center text-2xl text-white hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Call the Cards Component */}
      <Cards />
    </>
  );
};

const Cards = () => {
  return (
    <section id="courses" className="mt-10 md:mt-10">
      <div className="flex flex-col md:flex-row max-w-7xl justify-center mx-auto space-x-0 space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex space-x-4 mt-5">
          <div><i className="fa fa-umbrella text-blue-500 text-4xl border mx-5 border-blue-500 rounded-3xl p-4"></i></div>
          <div className="flex-col max-w-4xl">
            <h3 className="text-2xl my-2 f mx-2 font-sans">Online Learn Courses Management</h3>
            <p className="text-lg text-gray-500">Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-5 mx-auto">
          <div><i className="fa fa-id-card text-[#2e3e77] text-4xl mx-5 border border-secondary rounded-3xl p-4"></i></div>
          <div>
            <h3 className="text-2xl my-2 f mx-2 font-sans">Learn from the masters of the field online</h3>
            <p className="text-lg text-gray-500">Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
          </div>
        </div>

        <div className="flex space-x-4 mt-5 mx-auto">
          <div><i className="fa fa-handshake text-4xl mx-5 border border-black rounded-3xl p-4"></i></div>
          <div>
            <h3 className="text-2xl my-2 f mx-2 font-sans">An Introduction-Skills For Learners</h3>
            <p className="text-lg text-gray-500">Analyzing negative materials about your brand and addressing them with sentiment analysis and press.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center border border-b border-gray-100 mx-6 md:mx-auto mt-20 max-w-7xl "></div>
    </section>
  );
};

export default Content;
