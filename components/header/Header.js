import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { useScroll } from '../../hooks/useScroll'
import { ContactUsButton } from '../buttons/ContactUsButton'
import Clouds from '../clouds/Clouds'

const FADE_OUT_THRESHOLD = 480
const HIDE_THRESHOLD = 520

const links = [
  {
    name: 'What we do',
    href: '#wedo'
  },
  {
    name: 'Our Skillset',
    href: '#skillset'
  },
  {
    name: 'Contact Us',
    href: '#contact'
  }
]

const Navigation = ({ isMobileHeaderOpen, setIsMobileHeaderOpen }) =>
  links.map(link => (
    <div
      className={`${
        isMobileHeaderOpen ? 'h-auto w-auto opacity-100' : 'h-0 w-0 opacity-0'
      } md:opacity-100 md:h-auto md:w-auto select-none rounded-2xl transition-all`}
    >
      <a onClick={() => setIsMobileHeaderOpen(false)} href={link.href}>
        <p className='hover:bg-gray-100 hover:text-accent-1 transition-all text-3xl md:text-lg duration-500 ml-2 mr-2 p-2 pl-4 pr-4 rounded-xl'>
          {link.name}
        </p>
      </a>
    </div>
  ))

export const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const clutchWidget =
    '<div class="clutch-widget" style="overflow-y:hidden;" data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-clutchcompany-id="1884678"></div>'
  return (
    <>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed top-0 bg-white z-50 w-full px-5 py-4 flex flex-col md:flex-row justify-between items-center duration-500 transform transition-all`}
      >
        <div className='flex flex-row w-full md:w-auto justify-between items-center'>
          <div>
            <a
              onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
              href='#top'
            >
              <img
                className={`buzz-out-on-hover w-12 md:w-14 ml-4 mr-2`}
                src={'/static/logo.png'}
              />
            </a>
          </div>
          <div className='flex md:hidden'>
            <button
              className='bg-gray-200 p-3 rounded-lg'
              onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
            >
              <FontAwesomeIcon
                className='buzz-out-on-hover w-5 h-5 hover:text-accent-1 text-accent-1'
                icon={faBars}
              />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col ${
            isMobileHeaderOpen ? 'h-screen' : 'h-auto'
          } md:h-auto md:flex-row items-center text-center justify-evenly text-accent-3 font-semibold`}
        >
          <Navigation
            setIsMobileHeaderOpen={setIsMobileHeaderOpen}
            isMobileHeaderOpen={isMobileHeaderOpen}
          />
          <div className='hidden md:block'>
            <ContactUsButton />
          </div>
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
                className='p-2 md:p-0 text-xl transition-all duration-500 opacity-80 select-none'
              >
                Experts in the delivery of high quality, high-impact software
                solutions.
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div
        className={`fixed  ${
          scrollY > HIDE_THRESHOLD ? 'hidden' : ''
        } md:-bottom-12 w-full transition-all ${
          scrollY > FADE_OUT_THRESHOLD ? 'opacity-0' : 'md:opacity-100'
        } `}
      >
        <Clouds />
      </div>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed ${scrollY > HIDE_THRESHOLD ? 'hidden' : ''} ${
          scrollY > FADE_OUT_THRESHOLD ? 'opacity-0' : 'opacity-100'
        } 
        bottom-0 bg-white z-50 w-full px-5 py-4 flex justify-between items-center duration-500 transform transition-all`}
      >
        <div dangerouslySetInnerHTML={{ __html: clutchWidget }}></div>
        <div className='flex justify-end items-center'>
          <p className='hidden md:block transition-all opacity-0 md:opacity-100 font-paragraph font-semibold text-accent-3 text-right'>
            See how we can help you with your project:
          </p>
          <ContactUsButton />
        </div>
      </header>
    </>
  )
}
