import { ContactUsButton } from '../buttons/ContactUsButton'

export const ContactSection = () => (
  <>
    <div id='contact' className='container mx-auto'>
      <div className='rounded-lg select-none text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden'>
        <div className='flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10'>
          <h4 className='text-5xl text-center md:text-left font-bold font-alegreya text-white md:pb-2'>
            Want to get started?
          </h4>
          <p class='text-center md:text-left font-alegreya text-lg  font-semibold text-white opacity-70 md:pb-6'>
            We can provide a quote within <b>36 hours</b>.
          </p>
        </div>

        <div className='pt-8 md:pt-0 justify-center lg:ml-auto z-10'>
          <ContactUsButton />
        </div>

        <div className='absolute bg-purple-400 opacity-60 w-96 h-96 -top-12 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full z-0'></div>
      </div>
    </div>
  </>
)
