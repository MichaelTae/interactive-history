




const NavigationItem = ({title,link}:{title:string,link:string}) => {
    return (
       
        <a className="border w-14 h-7 rotate-45 p-10  items-center flex justify-center" href={link}>
           <div className='-rotate-45  relative'>{title}</div> 
        </a>
        
    );
};

export default NavigationItem;




