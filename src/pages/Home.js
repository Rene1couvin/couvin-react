// import React, { useState } from "react";
import m0 from '../images/00b.jpeg';

import m1 from '../images/1.jpeg';
import m2 from '../images/2.jpeg';
import m3 from '../images/3.jpeg';
import m4 from '../images/4.jpeg';
import a1 from '../images/a0.jpeg';
import a2 from '../images/a1.jpeg';
import a3 from '../images/a2.jpeg';
import a4 from '../images/a3.jpeg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function BackgroundSwitcher() {
  const [currentImage, setCurrentImage] = useState(a1);
  const images = [a1, a2, a3, a4];

  useEffect(() => {
    // Switch images every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div
      className="w-full "
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 'full',
        height: '500px', // Adjust the height as needed
      }}
    >
      {/* Content goes here */}
    </div>
  );
}





function ServicesFunc() {
  const productData = [
    {
      title: 'Healthy Charcuterie Boards',
      description: 'These healthy charcuterie boards are packed with flavor and can be tailored to fit any dietary restriction or preference!',
      photo: m1
    },
    {
      title: 'Yeast Pizza',
      description: 'Recipe video above. Meet your new best friend - a no yeast pizza dough that makes a quick and easy homemade pizza, fresh out of the oven in 20 minutes flat! Recipe video above.',
      photo: m2
    },
    {
      title: 'Crispy Fried Chicken',
      description: 'If you have wanted to learn how to make crispy fried chicken, this is the recipe for you.If you have wanted to learn how to make crispy fried chicken, this is the recipe for you.',
      photo: m3
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    },

  ];



  // const [name] = useState('');
  // const [description, SetName, setDescription] = useState('');
  // const [setDescription] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const submitData = [
  //     {
  //       title: name,
  //       description: description
  //     }
  //   ];
  //   console.log(submitData);
  // };

  // const [username, setUserName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');

  // const handleSubmitUser = (event) => {
  //   event.preventDefault();
  //   // Your form submission logic
  // };

  return (
    <div className='pt-8'>
      <div className='pt-6'>
          <BackgroundSwitcher />
        
          <div className="bg-gray-400 px-12 flex flex-wrap">
            

            <div className="w-full md:w-1/2">
              
            </div>
          </div>


          <div className="w-full pt-8 pb-6">
            <h1 className="text-gray-900 text-2xl  text-center">Product</h1>
            <div className="flex flex-wrap px-8 ">
              {productData.map((data, index) => (
                <div key={index} className="w-full md:w-1/4 mb-4 pt-10 ">
                  <div className=" m-2 p-4 bg-gray-200 rounded-xl h-full flex flex-col">
                    <img src={data.photo} className="w-full h-72 rounded-xl mb-4" alt={`Product ${index + 3}`} />
                    <h1 className="text-2xl pb-3 font-bold">{data.title}</h1>
                    <p>{data.description}</p>
                    <button className="p-0 w-20 h-10 text-center rounded-full bg-gray-800 text-white font-bold ml-2 mt-4 hover:bg-[#156290]">
                      Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          

      <div className="bg-gray-400 px-24 flex flex-wrap">
        {/* <div className="w-full md:w-1/2">
        <h1 className="text-gray-900 text-2xl mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block mb-2">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border-2 border-gray-900 p-2 mb-4"
          />
          <label className="block mb-2">Product Description</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full border-2 border-gray-900 p-2 mb-4"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 rounded-full px-6 py-2 text-white"
          >
            Save Data
          </button>
        </form>
        </div> */}

          {/* <div className="w-full">
        {username} {phone} {email}
        <div className="w-full md:w-1/2 pt-6">
          <h1 className="text-gray-900 text-2xl mb-4">User Registration</h1>
          <form onSubmit={handleSubmitUser}>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              className="w-full p-2 border-2 border-green-800 mb-4"
            />
            <label className="block mb-2">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full p-2 border-2 border-green-800 mb-4"
            />
            <label className="block mb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-2 border-2 border-green-800 mb-4"
            />
            <button type="submit" className="bg-green-400 px-6 py-2">
              Submit
            </button>
          </form>
        </div>
        </div> */}
        </div>
        

        <footer
          className="w-full">
          <div style={{
            backgroundImage: `url(${m0})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div class="w-full flex">
              <div className="w-1/2 p-4">
                <p className="background-blue-600 font-bold" >Couvin</p>
                <p>v </p>

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
                    <li>  <Link to="/DMCA">DMCA</Link></li>
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
}
export default ServicesFunc;
