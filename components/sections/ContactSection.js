import { ContactUsButton } from '../buttons/ContactUsButton'
import Clouds from '../clouds/Clouds'

export const ContactSection = () => (
  <>
    <div id='contact' className='container mx-auto pt-64 -mt-64'>
      <div className='rounded-lg select-none text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden'>
        <div className='flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10'>
          <h4 className='text-5xl text-center md:text-left text-3xl font-extrabold tracking-tight sm:text-4xl text-white md:pb-2'>
            Want to get started?
          </h4>
          <p class='text-center md:text-left text-xl font-semibold text-white md:pb-6'>
            We can provide a quote within <b>36 hours</b> <i className='not-italic fas fa-clock text-xl' />
          </p>
        </div>

        <div className='pt-8 md:pt-0 justify-center lg:ml-auto z-10'>
          <ContactUsButton />
        </div>

      </div>
    </div>
    <Clouds />
  </>
)
