
import ModalContent from "./modalContent";


const Modal = ({ title, isOpen, onClose,type }:{title:string,isOpen:boolean,onClose:any,type:string}) => {
  if (!isOpen) {
    return null;
  }

  const handleOutsideClick = (e: { target: any; currentTarget: any; }) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleOutsideClick} className="fixed z-50 overflow-auto w-screen left-0 top-0 right-0 bottom-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-700 rounded-lg p-8 m-2 w-full min-h-[500px]   max-w-4xl">
        <h1 className="text-2xl text-slate-300 font-bold mb-10 text-center">{title}</h1>
        <ModalContent title={title} type={type} />
        <button onClick={onClose} className="mt-4 bg-slate-900 border border-slate-600 shadow-inner shadow-slate-700 hover:scale-105 transition-all duration-200  px-4 py-1 rounded">
          Close 
        </button>
      </div>
    </div>
  );
};

  export default Modal;