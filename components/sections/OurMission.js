import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

export const OurMission = () => {
  return (
    <div className='mt-2 text-black select-none flex flex-row flex-wrap justify-center items-start font-paragraph'>
      <div id='mission' className='pt-48 -mt-48' />
      <div className='mt-2 m-10 mb-2 md:mb-0 md:m-0 md:pr-12'>
        <Fade left>
          <img
            style={{ borderWidth: 10 }}
            src='/static/images/andy.jpeg'
            className='rounded-full shadow-lg border-white'
            width={200}
          />
        </Fade>
      </div>
      <Zoom>
        <div className='p-10 md:p-0 text-prose w-full md:w-1/2'>
          <p className='text-xl'>
            "Hi I'm Andy 👋, founder of Third Pig Software.
          </p>
          <p className='mt-2'>
            It happens too often: software teams promise a dream, but deliver a
            nightmare.
          </p>
          <p className='mt-2'>
            You handover the reigns of your idea or concept to a team of
            technical experts, who build and build and build 🔨, but miss the
            mark because they failed to understand your business or the project
            requirements right at the beginning.
          </p>
          <p className='mt-2'>
            I started Third Pig because I believe that things simply don't have
            to be this way.
          </p>
          <p className='mt-2'>
            <b>We believe in getting to know your business on a deep level</b>,
            knowing how things tick, knowing your goals and your ambitions; then
            helping you deliver the value you need to achieve them. 🚀
          </p>
          <p className='mt-2'>
            <b>We aren't yes people</b> - we'll challenge you as much as you
            challenge us. When you work with us, we'll try to do what's best for
            you as a customer and for the project, regardless of how that would
            impact our revenue.
          </p>
          <p className='mt-2'>
            We'll always highlight to you the simplest available solution and
            will always try to suggest something small over something that will
            allow us to invoice more.
          </p>
          <p className='mt-2'>
            Above all else we believe in making our customers successful."
          </p>
          <p className='mt-2 text-accent-1 font-bold'>
            - Andy Macdonald, Founder
          </p>
        </div>
      </Zoom>
    </div>
  )
}
