import React from 'react'
import Image from 'next/image'
import PythonLogo from '../public/assets/python.png'
import NextjsLogo from '../public/assets/nextjs-icon.png'
import FlaskLogo from '../public/assets/Flask.png'
import DjangoLogo from '../public/assets/django.png'
import TailwindcssLogo from '../public/assets/TailwindCSS.png'
import PostgresqlLogo from '../public/assets/postgresql.png'
import DockerLogo from '../public/assets/docker.png'
import AwsLogo from '../public/assets/aws.png'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase font-bold text-[#25886f]'>Skills</p>
        <h2 className='py-4'>What Tech Stacks I Can Do</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PythonLogo} alt='Python' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Python
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextjsLogo} alt='Next.js' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Next.js
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={FlaskLogo} alt='Flask' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Flask
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={DjangoLogo} alt='Django' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Django
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={TailwindcssLogo} alt='Tailwind CSS' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Tailwind CSS
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={PostgresqlLogo} alt='PostgreSQL' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                PostgreSQL
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={DockerLogo} alt='Docker' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Docker
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AwsLogo} alt='Amazon Web Services' width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Amazon Web Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills