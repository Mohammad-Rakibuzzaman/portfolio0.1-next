import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/navLogo.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-center items-center w-full h-full px-2 2xl:px-16'>
        {/* <Image src={logo} alt="/" width='50' height='10' /> */}


        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>Blog</li>
            </Link>
            <Link href='/'>
              <li className='ml-7 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>

          <div className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
          <div className='flex w-full items-end justify-end'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>

        </div>



      </div>



    </div>
  )
}

export default Navbar
