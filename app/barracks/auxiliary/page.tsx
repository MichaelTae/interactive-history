'use client';
import CustomButton from "@/app/components/button/customButton";
import Modal from "@/app/components/modal/modal";
import { useState } from "react";



const AuxilaryPage = () => {
    const [highlighted, setHighlighted] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
  
    const handleOpenModal = (title:string) => {
      setModalTitle(title);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return (
        <div className='flex flex-col relative w-screen  '>
      <h1 className='flex self-center mb-1 text-3xl'>Auxiliary</h1>
      {/* Div below will be extra buttons to switch between different soldiers/items */}
      <div className='flex gap-2 self-center border w-3/4 justify-center '><div>PlaceHolder</div></div> 

      <div className="flex  w-3/4 self-center border h-[70vh] ">
      
      
      <div className='flex justify-center flex-col items-center gap-12 basis-1/4 '>
      <CustomButton title='Sagittariorum'sethighlighted={setHighlighted} openModal={handleOpenModal} />
      
      </div>
        {/* This div is for the image/svg of the soldier/item */}
      <div className='flex border justify-center items-center flex-col  gap-12 basis-2/4'>
        <div className="flex relative w-full h-full pt-12 justify-center overflow-hidden">
          
          
          
        
       
       
       </div>
      </div>

    <Modal title={modalTitle} isOpen={isModalOpen} onClose={handleCloseModal} type={'Auxiliary'} />  
      <div className='flex justify-center items-center flex-col gap-12  basis-1/4'>
      
      </div>
      </div>


    </div>
    );
};

export default AuxilaryPage;