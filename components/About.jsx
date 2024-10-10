import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
               <p className='uppercase text-xl tracking-widest text-[#57c5aa]'>About</p> 
               <h2 className='py-4'>Who I Am</h2> 
               <p className='py-2 text-gray-600'>Full Stack Developer and Backend Engineer</p>
               <p className='py-4 text-gray-600'>
                I'm a Full-Stack Developer with hands-on experience in building dynamic, AI-driven custom web applications. I specialize in developing robust backend systems using Python (Django) and integrating them with responsive, user-friendly frontend frameworks like React, Nextjs. My focus is on creating efficient, scalable solutions tailored to client needs, while continuously exploring emerging technologies like GPT-based AI models to enhance digital experiences.
                </p>
               <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            </div>
        </div>

    </div>
        
    
  )
}

export default About
