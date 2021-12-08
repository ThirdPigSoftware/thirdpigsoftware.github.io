import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactUsButton } from '../buttons/ContactUsButton'

export const ContactSection = () => (
  <div className='select-none overflow-hidden md:mx-48 p-10 pb-0 flex flex-col items-center text-center justify-center md:rounded-2xl'>
    <div className='pt-64 -mt-64' id='contact' />
    <p
      className={`text-2xl font-brand text-center md:text-center md:text-5xl transform transition-all text-white`}
    >
      Looking for a solution for your project?
    </p>
    <p
      className={`p-5 text-lg text-center font-paragraph font-semibold md:text-center transform transition-all text-white`}
    >
      We can provide you a quote within 36 hours.
    </p>
    <div>
      <ContactUsButton />
    </div>
    <p
      className={`p-5 text-2xl text-center md:text-center transform transition-all text-white`}
    >
      ...more ways to contact us below:
    </p>
    <div className='text-3xl animate-bounce'>
      <a href='#details'>
        <i className={`fas fa-chevron-circle-down`}></i>
      </a>
    </div>
  </div>
)
