import techSkills from './techSkills.json'
import Fade from 'react-reveal/Fade'

export const OurSkillSet = () => (
  <div id='skillset' className='text-black'>
    <div className='text-prose'>
      <p className='text-center p-10 pb-2 text-lg'>
        We're not precious over tools or languages. We adapt our services to you
        and the needs of the project, picking the right technology for the task
        at hand.
      </p>
      <p className='text-center text-lg'>
        We already have plenty of well-honed skills but are always willing to adopt more:
      </p>
    </div>
    <div className='p-12 flex flex-row flex-wrap justify-center items-center'>
      {techSkills.map((techSkill, index) => (
        <Fade>
          <div className='md:h-48 buzz-out-on-hover w-1/2 md:w-1/6 flex flex-row justify-center text-center p-10  mx-auto flex justify-center'>
            <img
              className='mx-auto'
              width={60}
              src={`/static/images/${techSkill.url}`}
            />
            <p className='mt-1 text-lg font-semibold'>{techSkill.name}</p>
          </div>
        </Fade>
      ))}
    </div>
  </div>
)
