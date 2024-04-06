import Image from "next/image";

export const metadata={
  title:"HealthDebug"
}
export default function Home() {
  return (
    <main className="border border-red-600 h-screen">
        <div className={`mt-2 mb-2 border h-[90%] bg-[url('/appointmentDoc.jpg')] bg-cover`}>
            <div className="border border-yellow-600 flex flex-col justify-center pl-48 h-full">
              <div>We are hare for your care.</div>
              <div>Best care &</div>
              <div>Better Doctor.</div>
              <div>In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider </div>
              <div>hii</div>
              <div>hii</div>
            </div>
        </div>
    </main>
  );
}
