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
    <div className='flex shadow-[10px_10px_16px_0px_rgba(0,0,0,0.9)]  relative rounded-xl w-full h-3/4'>
      <div className='w-1/2  absolute flex -top-[30.5px]  text-slate-400 text-2xl justify-center '>
      <div
          onClick={() => setActiveSection('Summary')}
          className={`${
            activeSection === 'Summary'
              ? ' border-r scale-95 text-slate-300 !bg-slate-700/100 rounded-t-md   shadow-[inset_3px_2px_2px_0px_rgba(0,0,0,0.4)]'
              : ''
          } cursor-pointer border-t border-l px-1 rounded-bl-sm bg-slate-700/80    border-lime-500/60 hover:text-slate-300 transition-all duration-300`}
        >
          Summary
        </div>
        <div
          onClick={() => setActiveSection('History')}
          className={`${
            activeSection === 'History'
              ? ' border-r border-l scale-95 !bg-slate-700/100   text-slate-300 rounded-t-md shadow-[inset_-3px_2px_2px_0px_rgba(0,0,0,0.4)]'
              : ''
          } cursor-pointer border-t  px-1  bg-slate-700/80   border-lime-500/60 hover:text-slate-300 transition-all duration-300`}
        >
          History
        </div>
        <div
          onClick={() => setActiveSection('Name')}
          className={`${
            activeSection === 'Name'
              ? 'border-l border-r scale-95 !bg-slate-700/100 text-slate-300 rounded-t-md shadow-[inset_-3px_2px_2px_0px_rgba(0,0,0,0.4)]'
              : ''
          } cursor-pointer border-t  px-1  bg-slate-700/80   border-lime-500/60 hover:text-slate-300 transition-all duration-300`}
        >
          Name
        </div>
        <div
          onClick={() => setActiveSection('Usage')}
          className={`${
            activeSection === 'Usage' ? 'border-l scale-95 !bg-slate-700/100  text-slate-300 rounded-t-md shadow-[inset_-3px_2px_2px_0px_rgba(0,0,0,0.4)]' : ''
          } cursor-pointer border-t border-r px-1  bg-slate-700/80 rounded-br-sm  border-lime-500/60 hover:text-slate-300 transition-all duration-300`}
        >
          Usage
        </div>
      </div>
      <div className='w-1/2 min-h-[500px] max-h-[500px] text-lg rounded-xl  border-lime-500/60 border-b  border-l border-t px-2 bg-slate-700 text-slate-300 overflow-y-auto'>
        <p>{activeSection === "History" ? history : activeSection === "Usage" ? usage : activeSection === "Name" ? name : description}</p>
      </div>
      <div className='w-1/2 min-h-[500px] max-h-[500px]  relative'>{image && <Image src={image} className=' object-contain  w-full h-full border border-lime-500/60 rounded-xl' placeholder='blur' width={400} height={400} alt={title} />} </div>
    </div>
  );
};

export default ModalContent;
