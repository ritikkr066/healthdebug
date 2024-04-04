// components/RegistrationForm.js
"use client"
import { useState } from 'react';
import url from '../../env';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    userid: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Perform API integration here, using fetch or Axios
//       console.log('Form submitted with data:', formData);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.BASE_API_URL)
      const response = await fetch(`https://healthdebug.vercel.app/api/users`, {
        // const response = await fetch('https://healthdebug-c9i38oh7l-ritikkr066s-projects.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
     
      if (response.ok) {
        console.log('Registration successful');
        // Handle success, redirect user, etc.
      } else {
        console.error('Registration failed');
        // Handle failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      ></textarea>
      <input
        type="userid"
        name="userid"
        value={formData.userid}
        onChange={handleChange}
        placeholder="userid"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
