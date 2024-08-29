import Image from "next/image";

export default function Landing() {
  return (
    <div className="text-white w-full flex justify-center items-center min-h-screen bg-gray-950">
        <div className="w-full flex justify-center bg-gray-800 md:px-24">
            <div className="flex flex-wrap md:flex-no-wrap w-3/4 justify-center my-16">
                <div className="w-full md:w-1/2 pt-4 font-palatino order-2 md:order-1 text-center md:text-left">
                    <div className="text-gray-500 text-xl">
                        Hi <span className="wave ml-1">👋</span>
                    </div>
                    <div className="text-5xl md:text-6xl font-bold">
                        I'm Marc Saulo
                    </div>
                    <div className="text-3xl">
                        Full-Stack Web Developer
                    </div>
                    <button className="rounded-lg px-2 py-1 bg-palette-red mt-2">
                        Download CV
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mb-4 order-1 md:order-2">
                    <div>
                        <Image src="/images/profile_pic.jpg" alt="profile_pic" className="rounded-full border-4 border-palette-red" width={208} height={208}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}