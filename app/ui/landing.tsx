import Image from "next/image";

export default function Landing() {
  return (
    <div className="text-white w-full flex justify-center items-center min-h-screen px-24 bg-gray-950">
        <div className="flex w-3/4">
            <div className="w-1/2 pt-4 font-palatino">
                <div className="text-gray-500 text-xl">
                    Hi <span className="wave ml-1">👋</span>
                </div>
                <div className="text-6xl font-bold">
                    I'm Marc Saulo
                </div>
                <div className="text-3xl">
                    Full-Stack Web Developer
                </div>
            </div>
            <div className="w-1/2 flex justify-center mb-4">
                <div>
                    <Image src="/images/profile_pic.jpg" alt="profile_pic" className="rounded-full" width={208} height={208}/>
                </div>
            </div>
        </div>
    </div>
  )
}