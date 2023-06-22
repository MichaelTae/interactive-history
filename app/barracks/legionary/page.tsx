'use client';

import CustomButton from "@/app/components/button/customButton";
import LegionarySvg from "../../components/LegionarySVG";
import { useState } from "react";
import Modal from '../../components/modal/modal'
import Image from "next/image";
import bgLegionary from '../../../public/bgLegionary.jpg'
import { TitleText } from "@/app/components/text/titleText";
import { ImageContainer } from "@/app/components/containers/imageContainer";
import { ButtonContainer } from "@/app/components/containers/buttonContainer";
import { MainContainer } from "@/app/components/containers/mainContainer";




const LegionaryPage = () => {
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
    < >
      <Image src={bgLegionary} fill placeholder='blur' className="absolute h-screen z-[1] object-cover" alt='Background picture of roman archways and buildings'/>
      <TitleText title='Legionary'/>
      {/* Div below will be extra buttons to switch between different soldiers/items */}
      <div className='flex gap-2 self-center border w-3/4 justify-center z-10 '><div>PlaceHolder</div></div> 

      <MainContainer>
      
     
      <ButtonContainer>
      <CustomButton title='Lorica Segmentata'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={true} />
      <CustomButton title='Caligae'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={true} />
      <CustomButton title='Galea'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={true} />
      
      </ButtonContainer>
        {/* This div is for the image/svg of the soldier/item */}
      
          
          <ImageContainer>
          <LegionarySvg highlighted={highlighted}/> 
          </ImageContainer>
       
     
      
    
    
      <ButtonContainer>
      <CustomButton title='Cingulum Militare'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={true} /> 
      <CustomButton title='Scutum'sethighlighted={setHighlighted}  openModal={handleOpenModal} mouseLeave={true}/> 
      <CustomButton title='Weaponry'sethighlighted={setHighlighted} openModal={handleOpenModal} mouseLeave={true} />
      </ButtonContainer>
      </MainContainer>
      <Modal title={modalTitle} isOpen={isModalOpen} onClose={handleCloseModal} type={'Legionary'} />  

    </>
  );
};

export default LegionaryPage;
