import { ContactUsButton } from '../buttons/ContactUsButton'
import Clouds from '../clouds/Clouds'

export default function Footer () {
  return (
    <footer className='text-gray-600 font-paragraph'>
      <div className='container px-5 py-24 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'></div>
        </div>
        <div className='w-64 font-paragraph flex-shrink-0 md:mx-0 mx-auto text-center md:text-right'></div>
      </div>

      <Clouds />
      <div className='bg-white font-paragraph'>
        <div className='container mx-auto py-4 px-5 flex items-center justify-center flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center'>
            <div className='mt-2 text-xs'>
              <p className='font-brand text-lg'>Third Pig Software Ltd</p>
              71-75 Shelton Street
              <br />
              LONDON
              <br />
              WC2H 9JQ
            </div>
            <div>
              <div className='mt-2 text-2xl flex flex-row justify-evenly items-center'>
                <div>
                  <a href='mailto:hello@thirdpigsoftware.com'>
                    <i className='fa fa-envelope ml-2'></i>
                  </a>
                </div>
                <div>
                  <a href='tel:07956000356'>
                    <i className='fa fa-phone ml-2'></i>
                  </a>
                </div>
                <div>
                  <a href='https://twitter.com/ThirdPigTech'>
                    <i className='fab fa-twitter ml-2'></i>
                  </a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/company/third-pig-software/'>
                    <i className='fab fa-linkedin-in ml-2'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <p className='text-xs font-paragraph'>
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
