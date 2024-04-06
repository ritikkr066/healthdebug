// "use client"
// import { useState } from 'react';
// // import url from '../../env';
// import { toast } from 'react-toastify';
// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//       });
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };
//       const handleSubmit=(e)=>{
//         console.log(formData);
//         e.preventDefault()
//             toast.success("clicked")
//       }
//     return (
//         <div className='w-[100vw] h-[90vh]  justify-center flex items-center rounded-md p-3 mt-3'>
//             <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-black p-4 flex flex-col justify-center items-center w-[90vw] md:w-[60vw] rounded-md absolute z-2"> 
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     className="w-full px-3 py-2 mb-3 border rounded-md"
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Password"
//                     className="w-full px-3 py-2 mb-3 border rounded-md"
//                 />
//                 <button type="submit" className="px-4 py-2 text-black bg-red-200 rounded-md">
//                     Login
//                 </button>
//             </form>
//         </div>
//     )
// }
// export default Login

"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import url from '../../env';
import { toast } from 'react-toastify';
const Login = () => {
    const router=useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const handleChange = (e) => {
        // const { name, value } = e.target;
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit=(e)=>{
        e.preventDefault()
        fetch("http://localhost:3000/api/login",{
            // fetch("https://healthdebug.vercel.app/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
            if(data.success){
                toast.success(data.message)
                router.push("/")
            }else{
                toast.error(data.message)
            }
        })
            
      }
    return (
        <div className='w-[100vw] h-[90vh]  justify-center flex items-center rounded-md p-3 mt-3'>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-black p-4 flex flex-col justify-center items-center w-[90vw] md:w-[60vw] rounded-md absolute z-2"> 
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
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
                <button type="submit" className="px-4 py-2 text-black bg-red-200 rounded-md">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login