"use client"
import { Header } from "@/components/Header";



export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center  bg-gradient-to-r from-sky-600 to-blue-900 p-5">
        <h1 className="text-6xl sm:text-9xl font-bold  text-slate-300 uppercase ">Welcome</h1>
        <span className="text-lg font-semibold  text-slate-300">Form project made for the hbi test July 2024.</span>
        <a href="http://localhost:3000/register" className="p-3 text-slate-400 font-bold uppercase mt-10 bg-sky-950 shadow hover:bg-sky-900 rounded-lg">Register</a>

      </div>
      
    </section>
  );
}

