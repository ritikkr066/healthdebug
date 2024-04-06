
import Card from "../components/Card"
async function itemList(){
    try {
        const response=await fetch("http://localhost:3000/api/doctors");
        // const response=await fetch("http://localhost:3000/api/users");
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
            <div className="w-full  flex justify-center items-center">
                <div className="flex flex-wrap mt-20 w-[100vw] md:w-[700px] lg:w-[1000px] xl:w-[1300px] justify-center md:justify-normal items-center">
                    {
                        items.map((item)=>{
                            return(
                                <Card name={item.name} speciality={item.speciality} click={item._id} key={item._id}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}
export default page