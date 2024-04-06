import Image from "next/image";

export const metadata={
  title:"HealthDebug"
}
export default function Home() {
  return (
    <main className="pt-10">
        <div className="max-sm:block max-md:hidden md:hidden">
          sm
        </div>
        <div className="max-sm:hidden max-md:block md:block">
          md
        </div>
    </main>
  );
}
