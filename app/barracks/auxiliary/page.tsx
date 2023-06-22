'use client';
import CustomButton from "@/app/components/button/customButton";
import Modal from "@/app/components/modal/modal";
import content from "@/app/utils/constants/constants";
import Image from "next/image";
import { useState } from "react";
import bgAuxilia from '../../../public/bgAuxilia.jpg'
import { TitleText } from "@/app/components/text/titleText";
import { ImageContainer } from "@/app/components/containers/imageContainer";
import { ButtonContainer } from "@/app/components/containers/buttonContainer";
import { MainContainer } from "@/app/components/containers/mainContainer";


const AuxilaryPage = () => {
    const [highlighted, setHighlighted] = useState('Sagittarii');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
     const { image } = content?.Auxiliary[highlighted] || { image: '' };
 
    const handleOpenModal = (title:string) => {
      setModalTitle(title);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
     
    return (
        <>
      <TitleText title='Auxilia'/>
      <Image src={bgAuxilia} fill placeholder='blur' className="absolute h-screen z-[1] object-cover" alt='Background picture of roman army on the march'/>
      {/* Div below will be extra buttons to switch between different soldiers/items */}
      <div className='flex gap-2 self-center border w-3/4 justify-center z-10'><div>PlaceHolder</div></div> 

      <MainContainer>
      
      
      <ButtonContainer>
      <CustomButton title='Sagittarii'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={false} />
      <CustomButton title='Alae'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={false}/>
        <CustomButton title='Cohortes'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={false} />
        </ButtonContainer>
        
     
        <ImageContainer>
          
        {<p className="absolute z-10  backdrop-blur-2xl border border-teal-700/50 px-2 rounded-md top-2 text-2xl text-slate-200 font-cinzel font-bold">{highlighted}</p>}
        <Image src={image} placeholder="blur" fill alt={highlighted}/>
        </ImageContainer>
       
       
   

     
      <ButtonContainer>
      <CustomButton title='Exploratores'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={false} />
      </ButtonContainer>
      
      </MainContainer>
      <Modal title={modalTitle} isOpen={isModalOpen} onClose={handleCloseModal} type={'Auxiliary'} /> 

    </>
    );
};

export default AuxilaryPage;