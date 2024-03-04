import React from 'react';
// import { Link } from 'react-router-dom';
import m0 from '../images/00b.jpeg';

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      title: 'Exploring the World of React',
      content: 'In this blog post, we dive deep into the world of React and its various features.',
      author: 'John Doe',
      date: 'February 28, 2023',
    },
    {
      id: 2,
      title: 'JavaScript Best Practices',
      content: 'Learn about the best practices for writing clean and efficient JavaScript code.',
      author: 'Jane Smith',
      date: 'March 15, 2023',
    },
    {
      id: 3,
      title: 'JavaScript Best Practices',
      content: 'Learn about the best practices for writing clean and efficient JavaScript code.',
      author: 'Jane Smith',
      date: 'March 15, 2023',
    },
    {
      id: 4,
      title: 'JavaScript Best Practices',
      content: 'Learn about the best practices for writing clean and efficient JavaScript code.',
      author: 'Jane Smith',
      date: 'March 15, 2023',
    },
    {
      id: 5,
      title: 'JavaScript Best Practices',
      content: 'Learn about the best practices for writing clean and efficient JavaScript code.',
      author: 'Jane Smith',
      date: 'March 15, 2023',
    },
    {
      id: 6,
      title: 'JavaScript Best Practices',
      content: 'Learn about the best practices for writing clean and efficient JavaScript code.',
      author: 'Jane Smith',
      date: 'March 15, 2023',
    },
    
    // Add more blogs as needed
  ];

  return (
    <div>
      <div className="bg-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <div key={blog.id} className="bg-white p-6 rounded-md shadow-md mb-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">{`By ${blog.author} on ${blog.date}`}</p>
                {/* Add a button or link for reading the full blog */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full">
        <div style={{
          backgroundImage: `url(${m0})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="py-8">
          <div className="flex justify-between items-center container mx-auto">
            <div className="w-1/2 pr-8">
              <p className="text-white text-2xl font-bold">Couvin</p>
              <p className="text-white">Free movies online, here you can watch movies online in high quality for free without annoying advertising. Just come and enjoy your movies online. fmovie, fmovies, bmovies</p>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              {/* Add your navigation links here */}
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white p-2">
          <p className="text-center">
            Copyright © 2024 Couvin Ste movies. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
