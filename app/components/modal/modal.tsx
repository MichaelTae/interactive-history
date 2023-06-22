
import ModalContent from "./modalContent";
import {  motion } from "framer-motion";

const Modal = ({ title, isOpen, onClose,type }:{title:string,isOpen:boolean,onClose:any,type:string}) => {
  if (!isOpen) {
    return null;
  }

  const handleOutsideClick = (e: { target: any; currentTarget: any; }) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const container ={
    hidden:{opacity:0,
    },
    show:{
      opacity:1,

      transition:{
        ease:'easeInOut',
        duration:0.5
      }
    },
    exit:{
      opacity:0,
      

    }
  }

  return (
    
    <motion.div variants={container} initial='hidden' animate='show' exit='exit' onClick={handleOutsideClick} className="fixed z-50  overflow-auto w-screen left-0 top-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-700 rounded-lg p-8 m-2 w-full  min-h-[500px] shadow-[10px_10px_16px_0px_rgba(0,0,0,0.9)]   max-w-4xl">
        <h1 className="text-4xl text-slate-300 font-bold pt-2 rounded-xl pb-12 text-center shadow-[10px_-5px_16px_-10px_rgba(0,0,0,0.9)] font-cinzel ">{title}</h1>
        <ModalContent title={title} type={type} />
        <button onClick={onClose} className="mt-4 bg-slate-900 border hover:text-lime-500 hover:border-lime-500 border-slate-600 shadow-inner shadow-slate-700 hover:scale-105 transition-all duration-300  px-4 py-1 rounded">
          Close 
        </button>
      </div>
    </motion.div>
   
  );
};

  export default Modal;