"use client"
import React, { useState ,useEffect} from 'react';

// async function itemList(){
//     try {
//         const response=await fetch("https://healthdebug.vercel.app/api/users");
//         const data=await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         return []
//     }
// }
// async function itemList(){
//     try {
//         const response=await fetch("https://healthdebug.vercel.app/api/users");
//         const data=await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         return []
//     }
// }

const Page = () => {
  const [dataa,setdataa]=useState([])
  useEffect(()=>{
    fetch("https://healthdebug.vercel.app/api/users").then(res=>res.json()).then((data)=>{
      // setdataa(data)
      console.log(data)
      setdataa(data)
    })
  },[])
  return (
    <>
      <div>
        <h2>ItemList</h2>
        
        {
            
            dataa && dataa.length>0?(
            dataa.map((item)=>(
                <div key={item._id}> {item.username}</div>
            ))
            ):<p>no items available</p>
        }
      </div>
    </>
  );
}

export default Page;