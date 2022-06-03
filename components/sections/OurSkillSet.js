import React from 'react'
import Fade from 'react-reveal/Fade'
import techSkills from './techSkills.json'

const SkillBox = ({ techSkill }) => (
  <>
    <Fade left>
      <div
        key={techSkill.email}
        className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
      >
        <div className='flex-shrink-0'>
          <img
            className='h-10 w-10 rounded-full'
            src={`/static/images/${techSkill.url}`}
            alt=''
          />
        </div>
        <div className='flex-1 min-w-0'>
          <a className='focus:outline-none'>
            <span className='absolute inset-0' aria-hidden='true' />
            <p className='text-sm font-medium text-gray-900 truncate'>
              {techSkill.name}
            </p>
            <p className='text-sm text-gray-500 truncate'>{techSkill.type}</p>
          </a>
        </div>
      </div>
    </Fade>
  </>
)

export const OurSkillSet = () => {
  return (
    <>
      <div id='skillset' className='pt-32 -mt-32' />
      <div className='text-black flex flex-col md:flex-row items-start justify-center flex-wrap md:flex-nowrap pb-12'>
        <div className='w-full md:w-1/3 max-w-7xl px-4 sm:px-6 md:px-0'>
          <div className='lg:text-center md:mt-7'>
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
          <div className='mt-5'>
            <div className='mt-10 md:mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-3'>
              {techSkills.slice(0, techSkills.length / 3).map(techSkill => (
                <SkillBox techSkill={techSkill} />
              ))}
            </div>
          </div>
        </div>
        <div className='md:ml-0 w-full md:w-1/2 px-4 md:px-10'>
          <div className='mt-5 md:mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 md:gap-3'>
            {techSkills
              .slice(techSkills.length / 3 + 1, techSkills.length)
              .map(techSkill => (
                <SkillBox techSkill={techSkill} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
