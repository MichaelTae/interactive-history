
export const MainContainer = ({children}:{children:any}) => {



    return(
        <div className="flex  w-3/4 self-center border h-[70vh]  z-10 backdrop-blur-sm">
            {children}
        </div>
    )
};