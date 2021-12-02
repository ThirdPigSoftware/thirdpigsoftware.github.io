import Clouds from '../components/clouds/Clouds'
import { ContactSection } from '../components/sections/ContactSection'
import { OurMission } from '../components/sections/OurMission'
import { OurSkillSet } from '../components/sections/OurSkillSet'
import { WhatWeDo } from '../components/sections/WhatWeDo'
import Zoom from 'react-reveal/Zoom'

export const CloudSection = ({ id, children, header }) => (
  <div id={id}>
    <Clouds />
    <div className='bg-white'>
      <div className='pb-12 container mx-auto'>
        <Zoom>{header}</Zoom>
        <div>{children}</div>
      </div>
    </div>
    <Clouds flip />
  </div>
)

const OurHeading = ({ title }) => (
  <div className='select-none flex flex-row items-center justify-center'>
    <h3
      className={`text-2xl pr-2 pt-4  md:text-5xl uppercase font-brand text-center text-accent-1`}
    >
      Our
    </h3>
    <h3
      className={`text-6xl font-brand pt-4 md:text-8xl uppercase text-center text-accent-1`}
    >
      {title}
    </h3>
  </div>
)

export default function IndexPage () {
  return (
    <div className='text-white dark:text-white overflow-x-hidden'>
      <div>
        <div
          className={`transition-all transform transform transition-all duration-500`}
          style={{ zIndex: -999 }}
        >
          <CloudSection header={<OurHeading title={'Services'} />}>
            <WhatWeDo />
          </CloudSection>
        </div>

        <CloudSection header={<OurHeading title={'Mission'} />}>
          <OurMission />
        </CloudSection>
        <div>
          <div className='py-20 px-20 md:px-96 container'>
            <h3
              style={{
                zIndex: 9999999,
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: 'white'
              }}
              className='text-4xl font-bold uppercase text-center md:text-left'
            >
              More than just another piggin' consultancy.
            </h3>
            <p className='mt-5 text-accent-2 text-center md:text-left text-2xl font-paragraph'>
              <b>Not just bums on seats</b>. We'll work to thoroughly understand
              your business goals and act like a partner, not an outsourcer.
            </p>
          </div>
        </div>
        {/* <CloudSection
          id='process'
          header={<OurHeading title={'Process'} />}
        ></CloudSection> */}
        <CloudSection header={<OurHeading title={'Skillset'} />}>
          <OurSkillSet />
        </CloudSection>
        <div className='pt-72 -mt-72' id='contact'>
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
