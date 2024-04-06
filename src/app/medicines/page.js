"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import MediCard from "../components/MediCard";

const Page = () => {
    const [medicines , setMedicines] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/medi')
        // axios.get('https://healthdebug.vercel.app/api/medi')
          .then(function (response) {
            setMedicines(response.data);
          })
    },[])
    return (
        <div className="border">
            <div className="flex flex-wrap">
                {medicines.map(medicine => {
                    return(
                        <MediCard key={medicine._id} id={medicine._id} name={medicine.medi} price={medicine.price}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Page