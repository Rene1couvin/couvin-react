import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [uploadedData, setUploadedData] = useState([]);
  useEffect(() => {
    // Fetch existing data from the database when the component mounts
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/pics/');
      setUploadedData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpload = async () => {
  
    if (!title || !image || !description) {
      alert('Please fill in all fields.');
      return;
    }

  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);

    try {
  
      const response = await axios.post('http://127.0.0.1:8000/pics/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        // If the request is successful, update the UI with the saved data
        setUploadedData([...uploadedData, response.data]);
      } else {
        // Handle error if the request is not successful
        alert('Failed to upload data. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }

    // Clear the form fields
    setTitle('');
    setImage(null);
    setDescription('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Page</h1>

      <div className="grid grid-cols-4 gap-4">
        {/* Form */}
        <div className="col-span-4 mb-8">
          <label className="block mb-2 text-sm font-bold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />

          <label className="block my-2 text-sm font-bold">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300"
          />

          <label className="block my-2 text-sm font-bold">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300"
          />

          <button
            onClick={handleUpload}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Upload
          </button>
        </div>

        {/* Display uploaded data */}
        {uploadedData.map((data, index) => (
          <div key={index} className="col-span-4 md:col-span-1 p-4 border border-gray-300">
            <h2 className="text-lg font-bold mb-2">{data.title}</h2>
            <img src={data.image} alt={data.title} className="w-full h-32 object-cover mb-2" />
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadForm;
