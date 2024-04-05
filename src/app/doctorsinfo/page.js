
import Card from "../components/Card"
const page=()=>{
    return (
        <>
            <div className="w-full  flex justify-center items-center">
                <div className="flex flex-wrap mt-9 w-[100vw] md:w-[700px] lg:w-[1000px] xl:w-[1300px] justify-center md:justify-normal items-center">
                    <Card name={"shiva"} speciality={"kidney"}/>
                    <Card name={"shiva"} speciality={"kidney"}/>
                    <Card name={"shiva"} speciality={"kidney"}/>
                    <Card name={"shiva"} speciality={"kidney"}/>
                    <Card name={"shiva"} speciality={"kidney"}/>
                    <Card name={"shiva"} speciality={"kidney"}/>
                </div>
            </div>
        </>
    )
}
export default page