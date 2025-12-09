import { ReactNode } from "react";

export function Heading({children,className}:{children:ReactNode,className?:string}){
    return(
        <div className={` w-fit border-gray-300
         rounded-lg m-0 text-center px-1 ${className}`} >
            {children}
        </div>
    )
}