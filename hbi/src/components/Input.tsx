import { ChangeEventHandler, Dispatch, SetStateAction } from "react"

interface InputProps {
        width: string,
        label?: string,
        type?: "text" | "email" | "password" | "date",
        placeholder?: string,
        value?: string,
        onChange?: ChangeEventHandler<HTMLInputElement>,
        onBlur?: ChangeEventHandler<HTMLInputElement>,
   }
   
   export function Input({ width, label, type = "text", onChange, value, onBlur, placeholder }: InputProps) {
        return (
             <div className={`${width} flex flex-col`}>
                  {
                       label &&
                       <label htmlFor={label}>{label}</label>
                  }
                  <input className=" text-black bg-sky-200" type={type} id={label} 
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  required
                  />
             </div>
        )
   }