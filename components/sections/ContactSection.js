import { ContactUsButton } from '../buttons/ContactUsButton'

export const ContactSection = () => (
  <div className='text-black shadow-lg border-2 md:mx-48 border-white p-10 flex flex-col font-paragraph items-center text-center justify-center md:rounded-2xl'>
    <p
      className={`text-2xl font-paragraph font-semibold font-sans text-center md:text-center md:text-4xl transform transition-all text-white`}
    >
      Looking for a solution for your project?
    </p>
    <div className='w-1/2 mt-10 text-2xl text-accent-2 flex flex-row justify-around items-center'>
      <div>
        <ContactUsButton alt />
      </div>
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
)
