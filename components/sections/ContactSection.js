import { ContactUsButton } from '../buttons/ContactUsButton'
import { ContactOptions } from '../contact/ContactOptions'

export const ContactSection = () => (
  <div className='text-black select-none md:mx-48 p-10 flex flex-col items-center text-center justify-center md:rounded-2xl'>
    <p
      className={`text-2xl font-brand text-center md:text-center md:text-4xl transform transition-all text-white`}
    >
      Looking for a solution for your project?
    </p>
    <p
      className={`p-5 text-lg text-center font-paragraph font-semibold md:text-center transform transition-all text-white`}
    >
      We can provide you a quote within 36 hours.
    </p>
    <div className='w-full mt-5 mb-5 text-2xl text-accent-2'>
      <div className='flex flex-row items-center justify-around flex-wrap'>
        <ContactOptions />
      </div>
    </div>
    <div>
      <ContactUsButton alt />
    </div>
  </div>
)
