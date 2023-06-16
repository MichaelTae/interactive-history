import {  motion } from 'framer-motion';
import { container, arr, variants } from './navigationItem';

export const BorderAnimation=()=> {
    
    return <motion.div  variants={container(0.5)} initial='hidden' animate="visible"  className='group-hover:scale-110'>
        {arr.map((_, i) => (
            <motion.div
                variants={variants}
                key={i}
                className='absolute w-[1px] h-[10px] border border-emerald-400/30 ml-[3px] mt-[2.5px] bg-emerald-400/30 '
                style={{
                    left: "0%",
                    top: `${i * 9.4}%`,
                }} />
        ))}

        {arr.map((_, i) => (
            <motion.div
                variants={variants}
                key={i}
                className='absolute w-[1px] h-[10px]  border border-emerald-400/30  ml-[9px]  bg-emerald-400/30  '
                style={{
                    bottom: "0%",
                    left: `${i * 9.2}%`,
                    rotate: "90deg",
                }} />
        ))}
        {arr.map((_, i) => (
            <motion.div
                variants={variants}
                key={i}
                className='absolute w-[1px] h-[10px] border border-emerald-400/30 mr-[4px] mb-[4.3px] bg-emerald-400/30 backdrop-filter backdrop-blur-sm  '
                style={{
                    right: "0%",
                    bottom: `${i * 9.45}%`,
                }} />
        ))}
        {arr.map((_, i) => (
            <motion.div
                variants={variants}
                key={i}
                className='absolute w-[1px] h-[10px]  border border-emerald-400/30  mr-[9px] -mt-[2px] bg-emerald-400/30  '
                style={{
                    top: "0%",
                    right: `${i * 9.2}%`,
                    rotate: "90deg",
                }} />
        ))}
    </motion.div>;
}
