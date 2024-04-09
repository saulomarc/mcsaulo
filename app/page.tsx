'use client'

import Image from "next/image";
import Landing from "@/app/ui/landing";
import About from "@/app/ui/about";
import Work from "@/app/ui/work";
import Freelance from "@/app/ui/freelance";
import { Scroll } from 'next-animation';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      <Landing />
      <Scroll>
        <About />
        <Work />
        <Freelance />
        <div className="text-white text-center h-96 overflow-x-hidden">
          Contact
        </div>
      </Scroll>
    </main>
  );
}
