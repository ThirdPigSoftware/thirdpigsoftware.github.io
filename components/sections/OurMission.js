import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const OurMission = () => {
  return (
    <>
      <div id='mission' className='pt-48 -mt-48' />
      <div className='select-none flex flex-row flex-wrap items-center justify-center font-paragraph'>
        <Zoom>
          <div className='p-10 md:p-0 text-sm leading-7 md:text-left text-prose w-full md:w-1/2 md:pr-16'>
            <p className='font-bold text-2xl'>
              Hi I'm Andy 👋, founder of Third Pig Software.
            </p>
            <p>
              It happens too often:{' '}
              <b>software teams promise a dream, but deliver a nightmare.</b>
            </p>
            <p>
              You handover the reigns of your idea to a team of technical
              experts, who build and build and build, but miss the mark because
              they failed to understand your business right from the start.
            </p>
            <p>
              Third Pig was founded because I believe it doesn't have to be like
              this.
            </p>
          </div>
        </Zoom>
        <Fade left>
          <img
            src='/static/images/andy.jpeg'
            className='rounded-full shadow-lg md:mb-10 md:mt-0 md:h-36 md:w-36 hidden md:block'
          />
        </Fade>
        <div className='flex flex-row flex-wrap md:m-8 items-start justify-center text-sm leading-7 md:text-right text-prose'>
          <Fade left>
            <div className='bg-gray-200 shadow-lg border-white w-48 h-48 rounded-full items-center justify-center hidden md:flex'>
              <img
                className={`select-none buzz-out-on-hover w-48`}
                src={'/static/logo.png'}
              />
            </div>
          </Fade>
          <Fade right>
            <div className='md:ml-16 px-10 md:px-0 mb-10 text-left w-full md:w-1/2'>
              <p>
                <b className='text-lg text-accent-2'>
                  We believe in getting to know your business at a deep level
                </b>{' '}
                - we want to know how things currently tick, your future goals
                and your aspirations; then to help you quickly deliver the value
                you need to achieve them 🚀.
              </p>
              <p className='mt-2'>
                <b className='text-lg text-accent-2'>We aren't yes people</b> -
                we'll challenge you as much as you challenge us. When you work
                with us, we'll try to do what's best for you as a customer and
                for the project, regardless of how that would impact our
                revenue.
              </p>
              <p className='mt-2'>
                <b className='text-lg text-accent-2'>
                  We'll always highlight the simplest solution available
                </b>{' '}
                - we will always try to suggest something small over something
                that will allow us to invoice more.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-xl px-10 text-left text-prose'>
                Above all else{' '}
                <i className='not-italic font-semibold'>
                  we believe in making our customers successful.
                </i>
              </p>
              <p className='mt-2 text-lg text-accent-1 font-bold'>
                - Andy Macdonald, Founder
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
