"use client"
import React, { useState ,useEffect} from 'react';

async function itemList(){
    try {
        const response=await fetch("");
        // const response=await fetch("http://localhost:3000/api/users");
        const data=await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return []
    }
}

const page = async() => {
    let items=await itemList();
  return (
    <>
      <div>
        <h2>UserList</h2>
        
        {
            
            items && items.length>0?(
            items.map((item)=>(
                <div key={item._id}> {item.username}</div>
            ))
            ):<p>no items available</p>
        }
      </div>
    </>
  );
}

export default page;