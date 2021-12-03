import techSkills from './techSkills.json'
import Fade from 'react-reveal/Fade'
import React from 'react'
import { StandardButton } from '../buttons/StandardButton'

export const OurSkillSet = () => {
  const [showAll, setShowAll] = React.useState(false)
  return (
    <div className='text-black flex flex-col items-center  font-paragraph'>
      <div id='skillset' className='pt-48 -mt-48' />
      <div className='mx-5 text-prose'>
        <p className='text-center px-10 pb-2 text-lg'>
          We're polyglots and not precious over using specific tools or
          languages. We adapt our services to you and the needs of the project,
          picking the right technology for the task at hand.
        </p>
        <p className='text-center text-lg'>
          We have plenty of well-honed skills and are always willing to adopt
          more:
        </p>
      </div>
      <div className='md:pt-2 md:px-12 pb-0 flex flex-row flex-wrap justify-center items-center'>
        {techSkills
          .slice(0, showAll ? techSkills.length : 15)
          .map(techSkill => (
            <Fade left>
              <div className='text-center md:h-36 w-1/2 select-none p-10 md:w-1/5 flex flex-col items-center justify-center'>
                <img
                  className='buzz-out-on-hover'
                  width={50}
                  src={`/static/images/${techSkill.url}`}
                />
                <p
                  className={`text-sm m-2 w-full text-prose font-semibold`}
                >
                  {techSkill.name}
                </p>
              </div>
            </Fade>
          ))}
      </div>
      <StandardButton
        onClick={() => {
          setShowAll(!showAll)
          if (showAll) {
            const violation = document.getElementById('skillset')
            window.scrollTo({
              top: violation.offsetTop,
              behavior: 'smooth'
            })
          }
        }}
        text={showAll ? 'Show less' : 'Show more'}
      />
    </div>
  )
}
