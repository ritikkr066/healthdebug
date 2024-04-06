import Image from "next/image";

export const metadata={
  title:"HealthDebug"
}
export default function Home() {
  return (
    <main className="">
        <div className="max-sm:block max-md:hidden md:hidden">
          <div className="w-full h-[90vh]">
            <Image width={300} height={900} className="absolute -z-2 w-full h-[90vh] brightness-50" src="/doctors.jpg" priority alt="blank"></Image>
            <div className="absolute flex  w-full h-[90vh] justify-center items-center">
              <div className="flex flex-col ml-6">
                <span className="mt-3 text-sm font-bold text-white">we are here for your care</span>
                <span className="text-5xl font-bold text-red-500 mt-">Best Care &</span>
                <span className="text-5xl font-bold text-red-500">Better Doctor</span>
                <p className=" font-[6px] text-white">
                The first medical degrees were awarded by the Schola Medica Salernitana around the year 1000, including to women such as Trota of Salerno.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 max-sm:hidden max-md:block md:block">
          <div className="flex justify-between w-full">
            <div className="w-[40vw]">

            </div>
            <div className="w-[60vw] flex justify-center">
            <Image width={300} height={900} className="p-2 w-[90%] lg:w-[500px] h-[60vh]" src="/doctors.jpg" priority alt="blank"></Image>
            </div>
          </div>
        </div>
    </main>
  );
}

