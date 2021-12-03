import { ContactUsButton } from '../buttons/ContactUsButton'
import Clouds from '../clouds/Clouds'
import { ContactOptions } from '../contact/ContactOptions'

export default function Footer () {
  return (
    <footer className='text-gray-600 font-paragraph'>
      <div className='container px-5 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
        </div>
        <div className='w-64 font-paragraph flex-shrink-0 md:mx-0 mx-auto text-center md:text-right'></div>
      </div>

      <Clouds />
      <div className='bg-white font-paragraph'>
        <div className='container mx-auto px-5 flex items-center justify-center flex-wrap flex-row sm:flex-row'>
          <p className='text-prose text-sm text-center'>
            <div className='mt-4 text-xs flex items-center flex-col'>
              <p className='font-brand text-lg'>Third Pig Software Ltd</p>
              71-75 Shelton Street
              <br />
              LONDON
              <br />
              WC2H 9JQ
            </div>
            <div>
              <div className='mt-2 text-2xl flex flex-row justify-evenly items-center'>
                <ContactOptions />
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xs font-paragraph mb-24'>
                © Third Pig Software Ltd. Registered in England &amp; Wales No.
                13536155. VAT No. GB387162177.
              </p>
            </div>
          </p>
        </div>
      </div>
    </footer>
  )
}
