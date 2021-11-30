import React from 'react'

export const OurProcess = () => {
  return (
    <div id='skillset' className='text-black flex flex-col items-center'>
      <div className='mx-2 text-prose'>
        <p className='text-center p-10 pb-2 text-lg'>
          We've developed a foolproof process to make the most out of your
          investment with us.
        </p>
      </div>
      <div className='text-accent-1 grid font-brand lg:grid-cols-4 gap-24 text-xl'>
        <div>Find the value</div>
        <div>Deliver it</div>
        <div>Validate it</div>
        <div>Repeat</div>
      </div>
    </div>
  )
}
