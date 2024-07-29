import {Logo} from "@/components/Logo"
import { Interface } from "readline";

interface LiProps {
  href: string,
  text: string,

}


export function Li({href, text} : LiProps ) {
      return (
        <li>
          <a 
            href= {href} 
            className='p-2 hover:bg-sky-700 hover:text-sky-950 rounded-sm'
          >
            {text}
          </a>
        </li>
      );
}


export function Header(){

       return(
              <header className="w-full flex justify-between items-center shadow-2xl  bg-sky-950 min-h-16 ">
                <Logo/>
                <nav className="mx-auto text-base text-sky-200">
                  <ul className="flex space-x-4">
                    <Li text="Home" href="" />
                    <Li text="About" href="" />
                    <Li text="Service" href="" />
                    <Li text="Contact" href=""/>
                  </ul>
                </nav>
        
              </header>
        )        
}