// components/RegistrationForm.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import url from '../../env';
import { toast } from 'react-toastify';
// import "./styles.css"
const RegistrationForm = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.BASE_API_URL)
     fetch(`http://localhost:3000/api/users`, {
      // const response = await fetch(`https://healthdebug.vercel.app/api/users`, {
        // const response = await fetch('https://healthdebug-c9i38oh7l-ritikkr066s-projects.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(res=>res.json()).then((data)=>{
        console.log(data)
        if(data.success){
          toast.success(data.message)
          router.push("/login")
        }else{
          toast.error(data.message)
        }
      })
     
      // if (response.ok) {
      //   console.log('Registration successful');
      //   console.log(response)
      //   // toast.success(data.message)
      //   // Handle success, redirect user, etc.
      // } else {
      //   console.error('Registration failed');
      //   // toast.error(data.message)
      //   // Handle failure, show error message, etc.
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.msg)
    }
  };
  

  return (
    <div className='w-[100vw] h-[90vh]  justify-center flex items-center rounded-md p-3 mt-3'>

    
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-black p-4 flex flex-col justify-center items-center w-[90vw] md:w-[60vw] rounded-md absolute z-20">
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
        type="number"
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
        className="w-full px-3 py-2 mb-3 border-2 border-black rounded-md"
      ></textarea>
      {/* <input
        type="number"
        name="userid"
        value={formData.userid}
        onChange={handleChange}
        placeholder="userid"
        className="w-full px-3 py-2 mb-3 border rounded-md"
      /> */}
      <button type="submit" className="px-4 py-2 text-black bg-red-200 rounded-md">
        Register
      </button>
    </form>
    </div>
  );
};

export default RegistrationForm;
