import techSkills from './techSkills.json'
import Fade from 'react-reveal/Fade'
import React from 'react'
import { StandardButton } from '../buttons/StandardButton'

export const OurSkillSet = () => {
  const [showAll, setShowAll] = React.useState(false)
  return (
    <div id='skillset' className='text-black flex flex-col items-center'>
      <div className='mx-2 text-prose'>
        <p className='text-center p-10 pb-2 text-lg'>
          We're not precious over tools or languages. We adapt our services to
          you and the needs of the project, picking the right technology for the
          task at hand.
        </p>
        <p className='text-center text-lg'>
          We have plenty of well-honed skills and are always willing to
          adopt more:
        </p>
      </div>
      <div className='pt-0 md:p-12 pb-0 flex flex-row flex-wrap justify-center items-center'>
        {techSkills
          .slice(0, showAll ? techSkills.length : 12)
          .map(techSkill => (
            <Fade>
              <div className='md:h-48 buzz-out-on-hover md:w-1/6 flex flex-row items-center justify-center text-center p-10  mx-auto flex justify-center'>
                <img
                  className='mx-auto'
                  width={60}
                  src={`/static/images/${techSkill.url}`}
                />
                <p className='mt-1 text-sm md:text-lg font-semibold'>{techSkill.name}</p>
              </div>
            </Fade>
          ))}
      </div>
      <StandardButton
        onClick={() => {
            setShowAll(!showAll)
        }}
        text={showAll ? 'Show less' : 'Show more'}
      />
    </div>
  )
}
