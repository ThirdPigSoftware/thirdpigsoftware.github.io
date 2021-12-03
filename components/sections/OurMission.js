import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const OurMission = () => {
  return (
    <>
      <div id='mission' className='pt-48 -mt-48' />
      <div className='mt-2 text-black select-none flex flex-row flex-wrap items-start justify-center font-paragraph'>
        <Zoom>
          <div className='p-10 md:p-0 leading-7 md:text-right text-prose w-full md:w-1/2'>
            <p className="font-bold text-2xl">Hi I'm Andy 👋, founder of Third Pig Software.</p>
            <p className='mt-2'>
              It happens too often:{' '}
              <b>software teams promise a dream, but deliver a nightmare.</b>
            </p>
            <p className='text-left mt-2'>
              You handover the reigns of your idea to a team of
              technical experts, who build and build and build, but miss the
              mark because they failed to understand your business and the
              project requirements right at the beginning.
            </p>
            <p className='text-left mt-2'>
              I founded Third Pig because I believe things simply don't have to
              be this way.
            </p>
            <div className='md:px-5 md:py-2 text-left'>
              <p className='mt-3'>
                <b className='text-lg'>
                  We believe in getting to know your business at a deep level
                </b>{' '}
                - we want to know how things currently tick, your future goals
                and your aspirations; then help you deliver the value you need
                to achieve them 🚀.
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
            <p className='mt-2'>
              Above all else we believe in making our customers successful.
            </p>
            <p className='mt-2 text-lg text-accent-1 font-bold'>
              - Andy Macdonald, Founder
            </p>
          </div>
        </Zoom>
        <div className='md:pl-12 flex md:flex-col justify-center flex-wrap items-center'>
          <Fade left>
            <img
              style={{ borderWidth: 10 }}
              src='/static/images/andy.jpeg'
              className='rounded-full shadow-xl border-white h-32 w-32 md:h-52 md:w-52'
            />
          </Fade>
          <Fade left>
            <div
              style={{ borderWidth: 10 }}
              className='bg-gray-200 shadow-xl border-white md:mt-20 w-48 h-48 md:h-72 md:w-72 rounded-full flex items-center justify-center'
            >
              <img
                className={`select-none buzz-out-on-hover w-48 md:w-72`}
                src={'/static/logo.png'}
              />
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
