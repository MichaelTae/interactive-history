'use client';
import Image from 'next/image';
import { useState } from 'react';
import content from '@/app/utils/constants/constants';

const ModalContent = ({ title,type }: { title: string,type:string }) => {

const getCategoryContent = (category: string | number, title: string | number) => {
    const categoryContent = content[category];
    if (!categoryContent) return undefined;
    
    return categoryContent[title];
  }
  const selectedContent = getCategoryContent(type, title);
  const [activeSection, setActiveSection] = useState('Summary');
  const { image, description, history, usage, name } = selectedContent || {
    image: '',
    description: '',
    history: '',
    usage: '',
    name: '',
  };
 
  return (
    <div className='flex text-black relative  w-full h-3/4'>
      <div className='w-1/2  absolute flex -top-7 text-slate-400 text-xl justify-center '>
      <div
          onClick={() => setActiveSection('Summary')}
          className={`${
            activeSection === 'Summary'
              ? ' border-r scale-95 text-slate-300'
              : ''
          } cursor-pointer border-t border-l px-1 rounded-t-lg bg-slate-700/50   border-lime-500`}
        >
          Summary
        </div>
        <div
          onClick={() => setActiveSection('History')}
          className={`${
            activeSection === 'History'
              ? ' border-r border-l scale-95 text-slate-300'
              : ''
          } cursor-pointer border-t  px-1 rounded-t-lg bg-slate-700/50   border-lime-500`}
        >
          History
        </div>
        <div
          onClick={() => setActiveSection('Name')}
          className={`${
            activeSection === 'Name'
              ? 'border-l border-r scale-95 text-slate-300'
              : ''
          } cursor-pointer border-t  px-1 rounded-t-lg bg-slate-700/50   border-lime-500`}
        >
          Name
        </div>
        <div
          onClick={() => setActiveSection('Usage')}
          className={`${
            activeSection === 'Usage' ? 'border-l scale-95 text-slate-300' : ''
          } cursor-pointer border-t border-r px-1 rounded-t-lg bg-slate-700/50   border-lime-500`}
        >
          Usage
        </div>
      </div>
      <div className='w-1/2 min-h-[500px] max-h-[500px] text-lg border-lime-500 border-b border-r border-l border-t px-2 bg-slate-700 text-slate-300 overflow-y-auto'>
        <p>{activeSection === "History" ? history : activeSection === "Usage" ? usage : activeSection === "Name" ? name : description}</p>
      </div>
      <div className='w-1/2 min-h-[500px] max-h-[500px] relative'>{image && <Image src={image} className=' object-contain  w-full h-full border' placeholder='blur' width={400} height={400} alt={title} />} </div>
    </div>
  );
};

export default ModalContent;
