


const CustomButton = ({title, sethighlighted,openModal }:{title:string, sethighlighted?:any,openModal:any}) => {


    return(
        
        <button onClick={() => openModal(title)} onMouseOver={() =>sethighlighted(title)} onMouseLeave={() => sethighlighted('')} className=" flex justify-center items-center w-24 h-24 shadow-[7px_7px_6px_0px_rgba(0,0,0,0.4)] border bg-slate-900 rounded-sm border-lime-600 relative group z-10" >
        <div className=" w-full h-full bg-slate-900 border shadow-[7px_7px_6px_0px_rgba(0,0,0,0.7)]  border-lime-600 absolute rotate-45 group-hover:scale-95 group-hover:rotate-180 transition-all duration-500 group-hover:border-lime-600/40 group-hover:shadow-none"  ></div>
        <div className=" w-full h-full bg-slate-900 border shadow-[7px_7px_6px_0px_rgba(0,0,0,0.5)]  border-lime-600 absolute  group-hover:scale-0 group-hover:rotate-180 transition-all duration-500 group-hover:border-none group-hover:shadow-none" ></div>
        <p  className=" relative container text-[1.7cqh]  font-mono text-slate-300 group-hover:scale-105 transition-all duration-500 group-hover:text-slate-200">{title}</p>
        </button>
        
        
     
    )
};


export default CustomButton;