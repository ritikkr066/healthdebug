import Login from "../components/Login"
import Image from "next/image"
const page = () => {
    return (
        <div className='overflow-hidden h-[100vh]'>
            <Image width={100} height={100} priority className='w-[100vw] h-[100vh] absolute -z-2 bg-contain brightness-50 top-0' src="/bgregister.jpg" alt="" />
            <div className=" pt-12">
                <h1 className=" text-3xl text-center pb-6 font-bold text-yellow-300 absolute w-full z-2">Login</h1>
                <Login/>
            </div>
        </div>
    )
}
export default page