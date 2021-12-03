import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const OurMission = () => {
  return (
    <>
      <div id='mission' className='pt-48 -mt-48 mb-5' />
      <div className='mt-2 text-black select-none flex flex-row flex-wrap items-center justify-center font-paragraph'>
        <Zoom>
          <div className='p-10 md:p-0 leading-7 md:text-right text-prose w-full md:w-2/3 md:pr-10'>
            <p className='font-bold text-3xl'>
              Hi I'm Andy 👋, founder of Third Pig Software.
            </p>
            <p className='mt-2'>
              It happens too often:{' '}
              <b>software teams promise a dream, but deliver a nightmare.</b>
            </p>
            <p className='md:text-right mt-2'>
              You handover the reigns of your idea to a team of technical
              experts, who build and build and build, but miss the mark because
              they failed to understand your business and the project
              requirements right at the beginning.
            </p>
            <p className='md:text-right mt-2'>
              I founded Third Pig because I believe things simply don't have to
              be this way.
            </p>
          </div>
        </Zoom>
        <Fade left>
          <img
            style={{ borderWidth: 5 }}
            src='/static/images/andy.jpeg'
            className='rounded-full shadow-xl border-white h-32 w-32 mb-10 md:mb-0 md:-mt-2 md:h-48 md:w-48'
          />
        </Fade>
        <div className='flex flex-row flex-wrap items-center justify-center leading-7 md:text-right text-prose'>
          <Fade left>
            <div
              style={{ borderWidth: 5 }}
              className='bg-gray-200 shadow-xl border-white w-48 h-48 rounded-full flex items-center justify-center'
            >
              <img
                className={`select-none buzz-out-on-hover w-48`}
                src={'/static/logo.png'}
              />
            </div>
          </Fade>
          <Fade right>
            <div className='md:ml-10 px-10 md:px-0 my-5 text-left w-full md:w-2/3'>
              <p>
                <b className='text-lg'>
                  We believe in getting to know your business at a deep level
                </b>{' '}
                - we want to know how things currently tick, your future goals
                and your aspirations; then to help you quickly deliver the value
                you need to achieve them 🚀.
              </p>
              <p className='mt-3'>
                <b className='text-lg'>We aren't yes people</b> - we'll
                challenge you as much as you challenge us. When you work with
                us, we'll try to do what's best for you as a customer and for
                the project, regardless of how that would impact our revenue.
              </p>
              <p className='mt-3'>
                <b className='text-lg'>
                  We'll always highlight the simplest solution available
                </b>{' '}
                - we will always try to suggest something small over something
                that will allow us to invoice more.
              </p>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className='flex flex-col items-center justify-center py-2'>
            <p className='text-3xl px-10 text-left text-prose font-semibold'>
              Above all else we believe in making our customers successful.
            </p>
            <p className='mt-2 text-lg py-4 text-accent-1 font-bold'>
              - Andy Macdonald, Founder
            </p>
          </div>
        </Fade>
      </div>
    </>
  )
}
