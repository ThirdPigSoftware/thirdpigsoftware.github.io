import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import { useScroll } from '../../hooks/useScroll'
import Clouds from '../clouds/Clouds'

export const Header = () => {
  const { scrollY } = useScroll()
  return (
    <>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed top-0 bg-white z-50 w-full px-5 py-4 flex justify-between items-center duration-500 transform transition-all`}
      >
        <div className='flex flex-start items-center'>
          <img className={`w-12 ml-4 mr-2`} src={'/static/logo.png'} />
          <h3
            style={{
              fontFamily: 'nickname',
              zIndex: 9999999,
              color: '#663399'
            }}
            className={`select-none text-2xl`}
          >
            Third Pig <i className='not-italic'>Software</i>{' '}
            <i className='not-italic text-sm'>Ltd</i>
          </h3>
        </div>
        <div className='flex flex-row justify-center items-center opacity-0 w-0 h-0 md:w-auto transition-all md:opacity-100'>
          <FontAwesomeIcon
            className='buzz-out-on-hover w-10 h-10 p-2 hover:text-accent-1 text-gray-700'
            icon={faPhoneAlt}
          />
          <h3
            style={{
              fontFamily: 'nickname',
              zIndex: 9999999
            }}
            className={`select-none text-gray-700 text-lg mr-4`}
          >
            Contact Us:
          </h3>
          <h3
            style={{
              fontFamily: 'nickname',
              zIndex: 9999999,
              color: '#663399'
            }}
            className={`select-none text-xl mr-4`}
          >
            07956 000 356
          </h3>
        </div>
      </header>
      <div className='fixed transition-all top-5 md:top-0 w-full'>
        <Clouds flip />
      </div>
      <div
        style={{ zIndex: 9999999 }}
        className={`mt-24 w-full md:mt-12 transition-all text-2xl relative md:text-4xl text-center items-center flex flex-col transition-all transform`}
      >
        <div
          className={`flex mt-12 md:mt-auto transition-all transform md:h-screen flex-row flex-wrap items-center`}
        >
          <div
            className={`buzz-out-on-hover flex items-center flex-col justify-center`}
          >
            <img
              style={{ zIndex: 9999999 }}
              className={`w-1/2 md:-mt-12 buzz-out-on-hover md:w-1/4 mb-10 md:mb-0`}
              src={'/static/logo.png'}
            />
            <Fade delay={200}>
              <h3
                style={{
                  zIndex: 9999999
                }}
                className={`select-none font-brand text-accent-3 text-5xl md:text-7xl`}
              >
                Third Pig <i className='not-italic'>Software</i>
              </h3>
            </Fade>
            <Fade delay={700}>
              <p
                style={{
                  zIndex: 9999999,
                  color: '#1a0041'
                }}
                className='p-2 md:p-0 text-xl font-brand transition-all duration-500 opacity-80 select-none'
              >
                Experts in the delivery of high quality, high-impact, software
                solutions.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className={`fixed md:-bottom-12 w-full transition-all ${scrollY > 500 ? 'opacity-0' : 'md:opacity-100'} `}>
        <Clouds />
      </div>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed ${scrollY > 500 ? 'opacity-0' : 'opacity-100'} 
        bottom-0 bg-white z-50 w-full px-5 py-4 flex justify-end items-center duration-500 transform transition-all`}
      >
        <p className='font-paragraph font-semibold text-accent-3 text-right'>
          See how we can help you with your project:
        </p>
        <button
          className='p-10 py-2 ml-2 bg-accent-1 font-brand rounded-lg border-white buzz-out-on-hover text-white'
          onClick={() =>
            window.open(
              'https://share-eu1.hsforms.com/1Tk0yABENQ4uXugEOhJ4NUQezsvg'
            )
          }
        >
          Contact Us!
        </button>
      </header>
    </>
  )
}