import { ReactElement } from "react";


export const ImageContainer = ({children}:{children:any}) => {

    return (
        <div className='flex border justify-center items-center flex-col  gap-12 basis-2/4 z-10'>
        <div className="flex relative w-full h-full pt-12 justify-center overflow-hidden ">
            {children}
        </div>
    </div>
    )
};