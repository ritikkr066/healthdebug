import React from 'react';

async function itemList(){
    try {
        const response=await fetch("http://localhost:3000/api/users"||"https://healthdebug.vercel.app/api/users");
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
        <h2>ItemList</h2>
        
        {
            
            items && items.length>0?(
            items.map((item)=>(
                <div key={item.id}> {item.username}</div>
            ))
            ):<p>no items available</p>
        }
      </div>
    </>
  );
}

export default page;
