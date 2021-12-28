import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Clouds from '../components/clouds/Clouds'
import { ContactSection } from '../components/sections/ContactSection'
import { OurMission } from '../components/sections/OurMission'
import { OurSkillSet } from '../components/sections/OurSkillSet'
import { WhatWeDo } from '../components/sections/WhatWeDo'

export const CloudSection = ({
  id,
  children,
  header,
  withContainer = true
}) => (
  <div id={id}>
    <Clouds />
    <div className='bg-white'>
      <div className={`${withContainer ? 'pb-12 container mx-auto' : ''}`}>
        {header}
        <div>{children}</div>
      </div>
    </div>
    <Clouds flip />
  </div>
)

const OurHeading = ({ title }) => (
  <div className='select-none transform flex font-brand flex-row items-center justify-center'>
    <Zoom>
      <span
        className={`text-2xl pr-2 md:text-xl uppercase text-center text-accent-1`}
      >
        Our
      </span>
    </Zoom>
    <Zoom delay={500}>
      <span
        className={`text-6xl md:text-4xl uppercase text-center text-accent-1`}
      >
        {title}
      </span>
    </Zoom>
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
          <CloudSection header={<div className='pt-2' />}>
            <WhatWeDo />
          </CloudSection>
        </div>

        <CloudSection header={<div className='pt-2' />}>
          <OurMission />
        </CloudSection>
        <div>
          <Fade bottom>
            <div className='py-20 px-20 md:px-96 container'>
              <h3
                style={{
                  zIndex: 9999999,
                  WebkitTextStrokeWidth: '2px',
                  WebkitTextStrokeColor: 'white'
                }}
                className='text-3xl font-bold uppercase text-center md:text-left'
              >
                More than just another piggin' consultancy.
              </h3>
              <p className='mt-5 text-accent-2 text-center md:text-left text-xl font-paragraph'>
                <b>Not just bums on seats</b>. We'll work to thoroughly
                understand your business goals and act like a partner, not an
                outsourcer.
              </p>
            </div>
          </Fade>
        </div>
        <CloudSection withContainer={false} header={<div className='pt-2' />}>
          <OurSkillSet />
        </CloudSection>
        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
