import React from "react";

const Blogs = () => {
  return (
    <section className="mt-5 p-10">
      <div className="flex justify-between md:mx-auto max-w-7xl">
        <div>
          <p className="text-xl text-blue-500 font-sans my-3">Blog</p>
          <h3 className="text-2xl mx-3 md:text-3xl">Latest News</h3>
        </div>
        <div className="mt-8">
          <button className="border px-10 py-3 rounded-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white text-center">
            View All Posts
          </button>
        </div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto gap-7 md:flex-row mt-10">
        {/* Blog Cards */}
        {[
          { category: "Academics", title: "Couple Of Happy College Students Graduated", image: "images/blog-image-1@2x.jpg" },
          { category: "Government", title: "Tips to Developing a Quality Discussion", image: "images/blog-image-2@2x.jpg" },
          { category: "Design", title: "Reflections for the Season of Advent", image: "images/blog-image-3@2x.jpg" },
          { category: "Business", title: "It’s Wonderful to see the Friendships that Develop", image: "images/blog-image-4@2x.jpg" }
        ].map((blog, index) => (
          <div key={index} className="flex flex-col bg-white rounded-sm border border-gray-100 shadow-sm">
            <img className="w-full md:w-[278px] md:h-[199px]" src={blog.image} alt={blog.title} />
            <span className="mt-5 text-2xl mx-7">{blog.category}</span>
            <h3 className="text-xl mx-5 my-3 md:max-w-60 hover:text-blue-500">{blog.title}</h3>
            <div className="flex items-center mx-4 mb-4 text-gray-500">
              <i className="fa-regular fa-clock text-xl mr-2"></i>
              <span>Jun 13, 2030</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
