// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import m0 from '../images/00b.jpeg';

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          We'd love to hear from you! If you have any questions, suggestions, or inquiries, please feel free to contact us using the form below.
        </p>

        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full border-2 border-gray-400 p-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full border-2 border-gray-400 p-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full border-2 border-gray-400 p-2 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <footer
        className="w-full ">
        <div style={{
          backgroundImage: `url(${m0})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div class="w-full flex">
            <div className="w-1/2 px-8 py-4">
              <p className="background-blue-600 font-bold" >Couvin</p>
              <p>Free movies online, here you can watch movies online in high quality for free without annoying of advertising, just come and enjoy your movies online. fmovie, fmovies, bmovies</p>

            </div>
            <div className="w-1/2 flex py-4" >
              <div className='w-1/4'>
                <p className="font-bold">Movies</p>
                <ul>
                  <li>
                    <Link to="/drama">Drama</Link>
                  </li>
                  <li>
                    <Link to="/comedy">Comedy</Link>
                  </li>
                  <li>
                    <Link to="/music">Music</Link>
                  </li>
                  <li>
                    <Link to="/thriller">Thriller</Link>
                  </li>
                  <li>
                    <Link to="/animation">Animation</Link>
                  </li>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className="font-bold">Country</p>
                <ul>
                  <li>
                    <Link to="/drama">United Kindom</Link>
                  </li>
                  <li>
                    <Link to="/comedy">Canada</Link>
                  </li>
                  <li>
                    <Link to="/music">Portugal</Link>
                  </li>
                  <li>
                    <Link to="/thriller">China</Link>
                  </li>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className="font-bold">Free Movies</p>
                <ul>
                  <li> <Link to="Movies">Movies</Link></li>
                  <li> <Link to="/TV-Series">TV-Series</Link></li>
                  <li> <Link to="/IMDB">Top IMDB </Link></li>
                </ul>
              </div>
              <div className='w-1/4'>
                <p className="font-bold">HELP</p>
                <ul>
                  <li>  <Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
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

export default Contact;