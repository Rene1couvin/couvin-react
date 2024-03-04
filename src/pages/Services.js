import React, { useState } from "react";
import axios from 'axios';

import m1 from '../images/1.jpeg';
import m2 from '../images/2.jpeg';
import m3 from '../images/3.jpeg';
import m4 from '../images/4.jpeg';
import { Link } from 'react-router-dom';
import m0 from '../images/00b.jpeg';

function ServicesFunc() {
  const productData = [
    {
      title: 'Healthy Charcuterie Boards',
      description: 'These healthy charcuterie boards are packed with flavor and can be tailored to fit any dietary restriction or preference!',
      photo: m1
    },
    {
      title: 'Yeast Pizza',
      description: 'Recipe video above. Meet your new best friend - a no yeast pizza dough that makes a quick and easy homemade pizza, fresh out of the oven in 20 minutes flat!',
      photo: m2
    },
    {
      title: 'Crispy Fried Chicken',
      description: 'If you have wanted to learn how to make crispy fried chicken, this is the recipe for you. Always a picnic favorite, this deep-fried chicken recipe is delicious either hot or cold. Kids call it my Kentucky Fried Chicken! ',
      photo: m3
    },
    {
      title: 'Crispy Fried chicken ',
      description: 'Air Fryer Korean Fried Chicken is marinated and coated in a cornstarch mixture to give it maximum crunch in the air fryer before being coated in a sweet and spicy Korean sauce.',
      photo: m4
    }
  ];

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitData = [
      {
        title: name,
        description: description
      }
    ];
    console.log(submitData);
  };

  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tableData, setTableData] = useState([]);


  const handleSubmitUser = (event) => {
    
    event.preventDefault();
  
    axios.post('http://127.0.0.1:8000/restt1/', {
      "name": username,
      "phone": phone,
      "email": email
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
    axios.get('http://127.0.0.1:8000/restt1/')
      .then(function (response) {
        setTableData(response.data); // Assuming the response is an array
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="bg-gray-400 p-12 flex flex-wrap">
      <div className="w-full md:w-1/2">
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
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-gray-900 text-2xl bg-gray-500 bg-length-15 text-center">Product</h1>
        <div className="flex flex-wrap ">
          {productData.map((data, index) => (
            <div key={index} className="w-full md:w-1/2 mb-4 pt-10 ">
              <button className="p-0 w-20 h-10 text-center rounded-full bg-gray-800 text-white font-bold ml-2 mt-4 hover:bg-[#156290]">
                For Rent
              </button>

              <div className="m-2 p-6 bg-gray-200 rounded-xl h-full flex flex-col">
              <img src={data.photo} className="w-full rounded-xl mb-4" alt={`Product ${index + 1}`} />
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
       
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
        <div>
        <h1>Data Table</h1>
      <table className="p-2">
        <thead className="px-4">
          <tr >
            <th>Name</th>
            <th>Email</th>
            {/* Add more headers based on your API response */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.name}</td>
              <td>{rowData.email}</td>
              {/* Add more cells based on your API response */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
