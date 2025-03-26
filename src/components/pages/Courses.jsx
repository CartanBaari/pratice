import React from 'react';

const Courses = () => {
  return (
    <>
      <section className="mt-5 p-10">
        <div className="flex justify-between mx-5 md:mx-auto max-w-7xl">
          <div>
            <p className="text-xl text-blue-500 font-sans my-3">Education</p>
            <h3 className="text-2xl mx-3 md:text-3xl">Popular Courses</h3>
          </div>
          <div className="mt-8">
            <button className="border px-10 py-3 rounded-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white text-center">
              View All Courses
            </button>
          </div>
        </div>

        <div className="flex flex-col max-w-7xl mx-auto gap-7 md:flex-row mt-10">
          {/* Course Card */}
          <CourseCard 
            imgSrc="/images/1@2x.jpg"
            title="Introduction Web Design with HTML"
            votes="5,00"
            author="Duha Samra"
            students="64"
            price="£244"
          />
          
          <CourseCard 
            imgSrc="/images/2@2x.jpg"
            title="Special Education Needs Teaching"
            votes="350"
            author="Leon Reading"
            students="134"
            price="£74.99"
          />
          
          <CourseCard 
            imgSrc="/images/3@2x.jpg"
            title="Environmental Science BTEC Course"
            votes="No votes"
            author="Linda Castello"
            students="0"
            price="£18.99"
          />
          
          <CourseCard 
            imgSrc="/images/4@2x.jpg"
            title="Distance Learning MBA Management"
            votes="450"
            author="Michael Arnett"
            students="263"
            price="£29.99"
          />
        </div>
      </section>
    </>
  );
};

// CourseCard Component
const CourseCard = ({ imgSrc, title, votes, author, students, price }) => {
  return (
    <div className="flex flex-col bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div>
        <img className="w-full md:w-[278px] md:h-[175px]" src={imgSrc} alt={title} />
      </div>
      <h3 className="text-xl my-5 mx-auto md:max-w-60 hover:text-blue-500">{title}</h3>
      <div className="flex flex-row space-x-2">
        <button className="m-3 px-4 bg-green-600 rounded-xl text-center text-white text-sm">
          {votes}
        </button>
        <div className="mx-2 border-r border-r-gray-300 h-6 mt-3"></div>
        <p className="text-xl tracking-wide text-blue-500 mt-2">{author}</p>
      </div>
      <div className="border-b border-gray-300 my-3"></div>
      <div className="flex flex-row justify-between items-center mx-3 my-3">
        <div className="space-x-2">
          <i className="fas fa-user-group text-gray-400"></i>
          <span>{students}</span>
        </div>
        <div>
          <span className="text-blue-500 text-xl">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
