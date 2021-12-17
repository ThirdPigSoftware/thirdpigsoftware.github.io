import { StandardButton } from './StandardButton'
import Confetti from 'react-dom-confetti'
import React from 'react'

export const ContactUsButton = ({ alt }) => {
  const [isClicked, setIsClicked] = React.useState(false)

  React.useEffect(() => {
    if (isClicked) {
      let clickTimer = setTimeout(() => setIsClicked(false), 1 * 1000)

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(clickTimer)
      }
    }
  }, [isClicked])

  return (
    <div className='flex justify-center items-center p-2 rounded-lg'>
      <Confetti active={isClicked} />
      <a
        target='_blank'
        href='https://wa.me/447956000356?text=Hi%20there%2C%20I%27d%20like%20to%20know%20more%20about%20the%20services%20Third%20Pig%20Software%20can%20offer%20my%20project.'
      >
        <StandardButton
          alt={alt}
          textSize={'text-3xl'}
          icon='fab fa-whatsapp'
          text={"Let's talk"}
          onClick={() => {
            setIsClicked(true)
          }}
        />
        <p className='m-2 text-center'>Talk to us over WhatsApp!</p>
      </a>
    </div>
  )
}
