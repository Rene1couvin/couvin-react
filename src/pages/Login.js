import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isLogin, onSwitchForm, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className='py-20'>
      <div className="auth-form items-center">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLogin ? "Login" : "Signup"}
        </button>
        <button
          type="button"
          onClick={onSwitchForm}
          className="mt-4 text-sm underline focus:outline-none"
        >
          Switch to {isLogin ? "Signup" : "Login"}
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleAuth = (data) => {
    // Handle authentication logic, you can use 'data' to send to the server
    console.log(isLoginForm ? 'Login data:' : 'Signup data:', data);

    // Example: Sending data to Django server using axios
    const apiUrl = isLoginForm ? 'http://your-django-server-url/api/login' : 'http://your-django-server-url/api/signup';
    axios.post(apiUrl, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="auth-page">
      <AuthForm
        isLogin={isLoginForm}
        onSwitchForm={handleSwitchForm}
        onSubmit={handleAuth}
      />
    </div>
  );

};

export default AuthPage;
