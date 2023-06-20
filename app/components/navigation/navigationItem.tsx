import { BorderAnimation } from './BorderAnimation';

export const container = (delayChildren: number) => ({
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delayChildren,
      staggerChildren: 0.2,
      
    },
   
   
  },
});
export const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 4, ease:'easeInOut',repeat:1,} ,
transitionEnd:{
    opacity:0,
    
    
} },
};

export const arr = new Array(10).fill(0).map((_, i) => i);

const NavigationItem = ({ title, link }: { title: string; link: string }) => {
    
  return (
    <a
      className='border backdrop-blur-sm border-cyan-300  w-28 h-28 rotate-45 p-10  items-center flex justify-center
       bg-blue-900/70 hover:bg-blue-900 transition-all duration-300 group hover:scale-110 shadow-[5px_5px_2px_0px_rgba(109,40,217,0.4)] hover:shadow-inner hover:shadow-black '
      href={link}
    >
      {BorderAnimation()}

     
      <div className='absolute w-full  animate-pulse h-full shadow-[5px_5px_rgba(0,_98,_90,_0.7),_10px_10px_rgba(0,_98,_90,_0.6),_15px_15px_rgba(0,_98,_90,_0.4),_20px_20px_rgba(0,_98,_90,_0.3),_25px_25px_rgba(0,_98,_90,_0.2)]'></div>
      <div className='-rotate-45 text-xl  group-hover:scale-105 relative transition-all duration-300'>
        {title}
      </div>
    </a>
  );
};

export default NavigationItem;

