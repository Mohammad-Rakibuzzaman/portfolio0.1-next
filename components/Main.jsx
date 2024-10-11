import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FaX } from 'react-icons/fa6'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Empowering Innovation with Custom Web Solutions</p>
                <h1 className='py-4 text-gray-600'>Hi, I'm <span className='text-[#25886f]'>Rakib</span></h1>
                <h1 className='py-2 text-gray-600'>A Full Stack Developer</h1>
                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-11'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />  
                </div> 
                
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />  
                </div> 
                 
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />  
                </div>  
                 
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaX />  
                </div>  

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
