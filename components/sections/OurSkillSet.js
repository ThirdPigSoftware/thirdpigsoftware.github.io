import React from 'react'
import Fade from 'react-reveal/Fade'
import techSkills from './techSkills.json'

export const OurSkillSet = () => {
  return (
    <>
      <div id='skillset' className='pt-32 -mt-32' />
      <div className='text-black flex flex-col md:flex-row items-start justify-center flex-wrap md:flex-nowrap mx-auto container pb-12 overflow-x-hidden'>
        <div className='w-full md:w-1/3 p-10 md:p-0'>
          <div className='lg:text-center'>
            <h2 className='text-base text-accent-1 font-semibold tracking-wide uppercase'>
              Our Skillset
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Skilled Software Craftspeople. 🪄
            </p>
            <p className='mt-4 max-w-2xl text-lg text-prose lg:mx-auto'>
              We're polyglots and not precious over using specific tools or
              languages. We adapt our services to you and the needs of the
              project, picking the right technology for the task at hand. We
              have plenty of well-honed skills and are always willing to adopt
              more.
            </p>
          </div>
        </div>
        <div className='md:ml-12 w-full md:w-1/2'>
          <div className='flex grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-0'>
            {techSkills.slice(0, techSkills.length).map(techSkill => (
              <Fade left>
                <div className='text-center md:h-32 w-1/2 ml-4 select-none md:w-32 flex flex-col items-center justify-center'>
                  <img
                    className='buzz-out-on-hover'
                    width={40}
                    src={`/static/images/${techSkill.url}`}
                  />
                  <p className={`text-sm m-2 w-full font-brand text-prose`}>
                    {techSkill.name}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
         
        </div>
      </div>
    </>
  )
}
