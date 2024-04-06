
// import Card from "../components/Card"
// const page=()=>{
//     return (
//         <>
//             <div className="flex items-center justify-center w-full">
//                 <div className="flex flex-wrap mt-20 w-[100vw] md:w-[700px] lg:w-[1000px] xl:w-[1300px] justify-center md:justify-normal items-center">
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                     <Card name={"shiva"} speciality={"kidney"}/>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default page

import Card from "../components/Card"
async function itemList(){
    try {
        // const response=await fetch("http://localhost:3000/api/doctor2");
        // https://healthdebug.vercel.app/api/login

        const response=await fetch("https://healthdebug.vercel.app/api/users");
       
        const data=await response.json();
        return data;
        
    } catch (error) {
        console.error(error);
        return []
    }
}
const page=async()=>{
    
    let items=await itemList();
    console.log(items)
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-wrap xl:grid xl:grid-cols-4  mt-20 w-[100vw] md:w-[700px] lg:w-[90vw] xl:w-[1300px] justify-center md:justify-start md:items-center items-center">
                    {/* {
                        items.map((item)=>{
                            return(
                                <Card name={item.name} speciality={item.speciality} click={item._id} key={item._id}/>
                            )
                        })
                    } */}
                    {
            
                    items && items.length>0?(
                        items.map((item)=>(
                            <div key={item._id}>
                                 {/* {item.username}\ */}
                                 <Card name={item.name} speciality={item.speciality} click={item._id} />
                                 </div>
                        ))
                     ):<p>no items available</p>
        }
                     </div>
            </div>
        </>
    )
}
export default page