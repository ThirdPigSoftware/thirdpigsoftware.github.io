import { ContactUsButton } from '../components/buttons/ContactUsButton'
import Clouds from '../components/clouds/Clouds'
import { Header } from '../components/header/Header'
import { OurSkillSet } from '../components/sections/OurSkillSet'
import { WhatWeDo } from '../components/sections/WhatWeDo'

export const CloudSection = ({ id, children, header }) => (
  <div id={id}>
    <Clouds />
    <div className='bg-white'>
      <div className='pb-12 container mx-auto'>
        {header}
        <div>{children}</div>
      </div>
    </div>
    <Clouds flip />
  </div>
)

export default function IndexPage () {
  return (
    <div id='top' className='text-white dark:text-white overflow-x-hidden'>
      <div>
        <Header />
        <div
          className={`transition-all transform transform transition-all duration-500`}
          style={{ zIndex: -999 }}
        >
          <CloudSection
            id='wedo'
            header={
              <>
                <h3
                  className={`text-2xl font-semibold text-center md:text-left md:text-3xl p-12 pb-10 transform transition-all text-accent-1`}
                >
                  What can we do for you?
                </h3>
              </>
            }
          >
            <WhatWeDo />
          </CloudSection>
        </div>
        <div>
          <div className='py-20 px-20 container mx-auto'>
            <div className='grid grid-cols-1 gap-4 items-center'>
              <h3
                style={{ fontFamily: 'nickname', zIndex: 9999999 }}
                className='text-4xl'
              >
                More than just another consultancy.
              </h3>
              <p className='text-accent-2 text-center md:text-left text-2xl font-semibold font-paragraph'>
                Chums on seats, not bums on seats. We'll work to thoroughly
                understand your business goals and act like a partner, not an
                outsourcer.
              </p>
            </div>
          </div>
        </div>

        <CloudSection
          id='skillset'
          header={
            <>
              <h3
                className={`text-2xl md:text-3xl font-semibold text-center text-accent-1`}
              >
                Our Skillset
              </h3>
            </>
          }
        >
          <OurSkillSet />
        </CloudSection>

        <CloudSection id='contact'>
          <div className='text-black md:ml-48 md:mr-48 p-24 pt-12 pb-12 flex flex-col items-center text-center justify-center md:rounded-2xl bg-white'>
            <p className='text-3xl font-semibold'>Got a project?</p>
            <p className='text-lg text-prose'>Get a quote from us within 36 hours.</p>
            <div className='mt-10'>
              <ContactUsButton />
            </div>
          </div>
        </CloudSection>
      </div>
    </div>
  )
}
