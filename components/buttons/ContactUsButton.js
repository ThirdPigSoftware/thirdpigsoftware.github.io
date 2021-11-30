import { StandardButton } from './StandardButton'

export const ContactUsButton = () => (
  <StandardButton
    text={'Talk to Us'}
    onClick={() =>
      window.open('https://share-eu1.hsforms.com/1Tk0yABENQ4uXugEOhJ4NUQezsvg')
    }
  />
)
