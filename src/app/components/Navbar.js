"use client"
import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const [click, setclick] = useState(false)
    const location=usePathname()
    let savedtoken=""
    useEffect(() => {
      savedtoken=localStorage.getItem("token")
    }, [])
    
    return (
        <div>
            {/* mobile view */}
            <div className='max-sm:block max-md:hidden md:hidden'>
                <div className='w-[100vw] h-[50px] bg-stone-700 flex justify-between px-3 fixed z-10 items-center'>
                    <span className='text-white font-bold'>Photogram</span>
                    <span className='ham-cross text-white  mt-1 text-xl' onClick={() => setclick(!click)}>
                        {
                            click ?
                                <RxCross2></RxCross2>
                                :
                                <RxHamburgerMenu></RxHamburgerMenu>
                        }
                    </span>
                </div>
                <div className={`fixed z-20 bg-black h-[100vh] w-[100vw] max-h-[100vh] overflow-hidden text-white ${click ? "visible" : "hidden"}`}>
                    <RxCross2 className='absolute text-white right-3 top-5 text-3xl' onClick={() => { setclick(!click) }}></RxCross2>
                    <div className='flex flex-col justify-center items-center '>
                        <Link className='mt-8 text-2xl' href="/" onClick={() => setclick(!click)}>Home</Link>
                        <Link className='mt-8 text-2xl' href="/myposts" onClick={() => setclick(!click)}>My Posts</Link>
                        {/* <Link className='mt-8 text-2xl' href="/allposts" onClick={() => setclick(!click)}>All posts</Link> */}
                        {
                            !savedtoken?
                            <>
                            <Link className='mt-8 text-2xl' href="/login" onClick={() => setclick(!click)}>Login</Link>
                            <Link className='mt-8 text-2xl' href="/signup" onClick={() => setclick(!click)}>Signup</Link>
                            </>
                            :
                            <Link className='mt-8 text-2xl' href="/login" onClick={()=>{localStorage.removeItem("token");location.startsWith("/");window.location.reload();setclick(!click)} }>logout</Link>
                        }
                        
                    </div>
                </div>
            </div>
            {/* laptop view */}
            <div className='max-sm:hidden max-md:block md:block'>
                <div className='w-[100vw] h-[50px] bg-stone-700 flex justify-between px-3 fixed z-10 items-center'>
                    <span className='text-white font-bold text-md md:text-xl'>Photogram</span>
                    <div className='flex text-white '>
                        <Link className='text-md md:text-lg px-2' href="/" >Home</Link>
                        <Link className='text-md md:text-lg px-2' href="/myposts" >My Posts</Link>
                    </div>
                    <div className='flex text-white '>
                        <Link className={`text-md md:text-xl px-2 bg-white text-black rounded-full font-bold ${savedtoken?"block":"hidden"} `} href="/login" onClick={() => { localStorage.removeItem("token");localStorage.removeItem("id");location.startsWith("/login");window.location.reload() }} >Logout</Link>
                        <Link className={`text-md md:text-xl px-2 bg-white text-black rounded-full font-bold ${!savedtoken?"block":"hidden"} `} href="/login" >Login</Link>
                        <Link className={`text-md md:text-xl px-2 bg-white text-black rounded-full font-bold ${!savedtoken?"block":"hidden"} ml-3`} href="/signup" >Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar