import { ContactUsButton } from '../buttons/ContactUsButton'
import { ContactOptions } from '../contact/ContactOptions'

export const ContactSection = () => (
  <div className='text-black md:mx-48 p-10 flex flex-col font-paragraph items-center text-center justify-center md:rounded-2xl'>
    <p
      className={`text-2xl font-paragraph font-semibold font-sans text-center md:text-center md:text-4xl transform transition-all text-white`}
    >
      Looking for a solution for your project?
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
