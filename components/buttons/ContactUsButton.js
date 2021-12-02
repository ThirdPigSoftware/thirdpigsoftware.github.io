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
    <>
      <Confetti active={isClicked} />
      <StandardButton
        alt={alt}
        text={"Let's talk"}
        onClick={() => {
          setIsClicked(true)
          setTimeout(
            () =>
              window.open(
                'https://share-eu1.hsforms.com/1Tk0yABENQ4uXugEOhJ4NUQezsvg'
              ),
            1000
          )
        }}
      />
    </>
  )
}
