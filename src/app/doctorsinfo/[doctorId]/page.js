import React from 'react';
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const page = ({params}) => {
    console.log(params.doctorId)
  return (
    <div className="p-8 max-md:p-0 w-full bg-white border-8  border-r-blue-400 border-l-black border-b-black border-t-blue-600"> 
      <div className="grid grid-cols-5 max-sm:grid-cols-1 pb-8 ">
        <div className="border-b-2 border-l-2 mr-20 max-md:mr-2 max-sm:mr-0 border-blue-700 col-span-3">
          <img className=' h-full' src='/doc.jpg' alt='doctor loading' />
        </div>
        {/* Profile */}
        <div className="col-span-2 pt-8 pl-2">
          <div className="font-bold text-slate-600">PROFILE</div>
          <div className="flex">
            <div className="text-blue-500 text-2xl font-bold mr-2">Dr. Name</div>
          </div>
          <div className="font-bold text-slate-500 mb-2 ">Specification</div>
          <div className="font-bold text-slate-500 mb-10">Affilation</div>
          <div className="flex flex-col space-y-4 text-1xl max-md:text-sm">
            <div className="grid grid-cols-5 max-md:grid-cols-2">
              <div className=" font-semibold col-span-2 max-md:col-span-1">EXPERIENCE</div>
              <div className="text-slate-500 font-semibold col-span-3 max-md:col-span-1">19 years+</div>
            </div>
            <div className="grid grid-cols-5 max-md:grid-cols-2 w-full">
              <div className=" font-semibold col-span-2 max-md:col-span-1">LANGUAGES</div>
              <div className="text-slate-500 font-semibold col-span-3 max-md:col-span-1">English, Hindi</div>
            </div>
            <div className="grid grid-cols-5 max-md:grid-cols-2 w-full">
              <div className=" font-semibold col-span-2 max-md:col-span-1">TYPE OF</div>
              <div className="text-slate-500 font-semibold col-span-3 max-md:col-span-1">Surgeon</div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-slate-500 font-bold mb-4">SPECIALITY</div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-3">
                <div className="border flex justify-center pl-4 pr-4  pt-1 pb-1 rounded-3xl w-40 text-slate-500 text-sm font-semibold">Dentistry</div>
                <div className="border flex justify-center pl-4 pr-4  pt-1 pb-1 rounded-3xl w-40 text-slate-500 text-sm font-semibold">Surgery</div>
              </div>
              <div className="flex space-x-3">
                <div className="border flex justify-center pl-4 pr-4 pt-1 pb-1 rounded-3xl w-40 text-slate-500 text-sm font-semibold">Implantology</div>
                <div className="border flex justify-center pl-4 pr-4 pt-1 pb-1 rounded-3xl w-40 text-slate-500 text-sm font-semibold">Paediatric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between  mb-4">
        <div className="col-span-3 flex justify-start pl-8 pt-4">
          <div className="flex flex-col ">
            <div className="flex justify-start text-3xl max-sm:text-lg font-bold">DR.</div>
            <div className="flex justify-start text-3xl max-sm:text-lg text-slate-600 mb-2">Name</div>
            <div className="flex justify-start text-1xl max-sm:text-sm text-slate-400">Affilation</div>
            <div className="flex justify-start text-1xl max-sm:text-sm text-slate-400">Hospital</div>
          </div>
        </div>
        <div className="col-span-2 flex justify-start pl-8 pt-4 pr-4">
          <div className="flex flex-col">
            <div className="flex justify-end text-3xl max-sm:text-lg font-bold">
              <div className="flex flex-col justify-center">
                <div className="h-8 w-8 bg-blue-500 mr-3 flex justify-center">
                  <div className="flex flex-col justify-center text-white">+</div>
                </div>
              </div>
              <div className='max-sm:text-lg'>Hospital</div>
            </div>
            <div className="flex justify-start text-2xl max-sm:text-sm text-white  bg-blue-500 pl-4 pr-4 mb-2 mt-2">
              <div className='flex flex-col justify-center mr-4'><MdOutlinePermPhoneMsg /></div>
              0123 456 789</div>
            <div className="flex">
              <div className="h-full w-1 bg-blue-500 rounded-full mr-2"></div>
              <div className="flex flex-col text-1xl max-sm:text-sm">
                <div className="flex justify-start text-slate-400">Mail</div>
                <div className="flex justify-start text-slate-400">Your Address</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;