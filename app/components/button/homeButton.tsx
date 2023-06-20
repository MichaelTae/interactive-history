

const HomeButton = () => {

    return(
        <div className="absolute border text-3xl ml-4 px-2 cursor-pointer z-10 bg-slate-900 text-slate-300 hover:text-lime-500 hover:border-lime-500 transition-all duration-300 border-slate-500 rounded-sm shadow-[7px_7px_6px_0px_rgba(0,0,0,0.5)] shadow-black">
            <a href='/'>
                {'<--'}
            </a>
        </div>
    )
};

export default HomeButton;