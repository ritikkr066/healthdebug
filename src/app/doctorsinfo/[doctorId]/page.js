import React from 'react';
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import Image from 'next/image';

const page = ({params}) => {
    console.log(params.doctorId)
  return (
    <div className="w-full p-8 bg-white border-8 max-md:p-0 border-r-blue-400 border-l-black border-b-black border-t-blue-600"> 
      <div className="grid grid-cols-5 pb-8 max-sm:grid-cols-1 ">
        <div className="col-span-3 mr-20 border-b-2 border-l-2 border-blue-700 max-md:mr-2 max-sm:mr-0">
          <Image width={1000} height={1000} className='w-full h-full' src='/doc.jpg' alt='doctor loading' />
        </div>
        {/* Profile */}
        <div className="col-span-2 pt-8 pl-2">
          <div className="font-bold text-slate-600">PROFILE</div>
          <div className="flex">
            <div className="mr-2 text-2xl font-bold text-blue-500">Dr. Name</div>
          </div>
          <div className="mb-2 font-bold text-slate-500 ">Specification</div>
          <div className="mb-10 font-bold text-slate-500">Affilation</div>
          <div className="flex flex-col space-y-4 text-1xl max-md:text-sm">
            <div className="grid grid-cols-5 max-md:grid-cols-2">
              <div className="col-span-2 font-semibold  max-md:col-span-1">EXPERIENCE</div>
              <div className="col-span-3 font-semibold text-slate-500 max-md:col-span-1">19 years+</div>
            </div>
            <div className="grid w-full grid-cols-5 max-md:grid-cols-2">
              <div className="col-span-2 font-semibold  max-md:col-span-1">LANGUAGES</div>
              <div className="col-span-3 font-semibold text-slate-500 max-md:col-span-1">English, Hindi</div>
            </div>
            <div className="grid w-full grid-cols-5 max-md:grid-cols-2">
              <div className="col-span-2 font-semibold  max-md:col-span-1">TYPE OF</div>
              <div className="col-span-3 font-semibold text-slate-500 max-md:col-span-1">Surgeon</div>
            </div>
          </div>
          <div className="mt-10">
            <div className="mb-4 font-bold text-slate-500">SPECIALITY</div>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-3">
                <div className="flex justify-center w-40 pt-1 pb-1 pl-4 pr-4 text-sm font-semibold border rounded-3xl text-slate-500">Dentistry</div>
                <div className="flex justify-center w-40 pt-1 pb-1 pl-4 pr-4 text-sm font-semibold border rounded-3xl text-slate-500">Surgery</div>
              </div>
              <div className="flex space-x-3">
                <div className="flex justify-center w-40 pt-1 pb-1 pl-4 pr-4 text-sm font-semibold border rounded-3xl text-slate-500">Implantology</div>
                <div className="flex justify-center w-40 pt-1 pb-1 pl-4 pr-4 text-sm font-semibold border rounded-3xl text-slate-500">Paediatric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-between mb-4">
        <div className="flex justify-start col-span-3 pt-4 pl-8">
          <div className="flex flex-col ">
            <div className="flex justify-start text-3xl font-bold max-sm:text-lg">DR.</div>
            <div className="flex justify-start mb-2 text-3xl max-sm:text-lg text-slate-600">Name</div>
            <div className="flex justify-start text-1xl max-sm:text-sm text-slate-400">Affilation</div>
            <div className="flex justify-start text-1xl max-sm:text-sm text-slate-400">Hospital</div>
          </div>
        </div>
        <div className="flex justify-start col-span-2 pt-4 pl-8 pr-4">
          <div className="flex flex-col">
            <div className="flex justify-end text-3xl font-bold max-sm:text-lg">
              <div className="flex flex-col justify-center">
                <div className="flex justify-center w-8 h-8 mr-3 bg-blue-500">
                  <div className="flex flex-col justify-center text-white">+</div>
                </div>
              </div>
              <div className='max-sm:text-lg'>Hospital</div>
            </div>
            <div className="flex justify-start pl-4 pr-4 mt-2 mb-2 text-2xl text-white bg-blue-500 max-sm:text-sm">
              <div className='flex flex-col justify-center mr-4'><MdOutlinePermPhoneMsg /></div>
              0123 456 789</div>
            <div className="flex">
              <div className="w-1 h-full mr-2 bg-blue-500 rounded-full"></div>
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