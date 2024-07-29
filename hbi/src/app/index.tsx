import React from "react";
import { Li } from "@/components/Li";

<main className="w-screen h-screen bg-red-50 flex flex-col">
      <header className="w-full flex justify-between items-center  bg-sky-950 min-h-16 ">
        <div className="h-14 w-14  bg-sky-500 mx-auto flex justify-center items-center m-2  mb-3 text-sky-950 text-2xl font-extrabold rounded-md">
          <a href="">HBI</a>
        </div>

        <nav className="mx-auto text-lg text-sky-200 font-semibold">
          <ul className="flex space-x-4">
            <Li text="Home" href="" />
            <Li text="About" href="" />
            <Li text="Contact" href="" />
            <Li text="Sign Up" href=""/>
          </ul>
        </nav>

        

      </header>

</main>      