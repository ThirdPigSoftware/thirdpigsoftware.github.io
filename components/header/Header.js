import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade'
import useMobileDetect from 'use-mobile-detect-hook'
import { useScroll } from '../../hooks/useScroll'
import { useWindowSize } from '../../hooks/useWindowSize'
import { StandardButton } from '../buttons/StandardButton'
import Clouds from '../clouds/Clouds'
import techSkills from '../sections/techSkills.json'

const FADE_OUT_THRESHOLD = 400
const HIDE_THRESHOLD = 520

const links = [
  {
    name: 'Services',
    href: '#wedo',
    icon: 'fas fa-cogs'
  },
  {
    name: 'Mission',
    href: '#mission',
    icon: 'fas fa-rocket'
  },
  // {
  //   name: 'Process',
  //   href: '#process',
  //   icon: 'fas fa-rocket'
  // },
  {
    name: 'Skillset',
    href: '#skillset',
    icon: 'fas fa-hat-wizard'
  }
]

const techSkillsMapped = techSkills.map(skill => ({
  src: `/static/images/${skill.url}`,
  height: 60,
  width: 60
}))

export const Navigation = ({ isMobileHeaderOpen, setIsMobileHeaderOpen }) =>
  links.map(link => (
    <div
      className={`${
        isMobileHeaderOpen ? 'h-auto w-auto opacity-100' : 'h-0 w-0 opacity-0'
      } md:opacity-100 md:h-auto md:w-auto select-none rounded-2xl transition-all`}
    >
      <a onClick={() => setIsMobileHeaderOpen(false)} href={link.href}>
        <div className='hover:bg-gray-100 hover:text-accent-1 transition-all text-center font-brand text-3xl md:text-base duration-500 ml-2 mr-4 p-2 pl-4 pr-2 flex flex-row items-center justify-center rounded-xl'>
          <i className={`${link.icon} mr-2 -ml-2 opacity-50 text-2xl`}></i>
          {link.name}
        </div>
      </a>
    </div>
  ))

const Banner = () => (
  <>
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
          <h1
            style={{
              zIndex: 9999999
            }}
            className={`select-none font-brand text-accent-3 text-5xl md:text-7xl`}
          >
            Third Pig <i className='not-italic'>Software</i>
          </h1>
        </Fade>
        <Fade delay={700}>
          <div>
            <p className='md:p-0 px-10 text-center flex flex-col items-center mb-4 text-xl transition-all font-paragraph duration-500 opacity-80 select-none'>
              <i className='text-xl py-2 text-accent-3 font-semibold not-italic px-6'>
                Experts in the delivery of{' '}
                <i className='font-bold not-italic'>
                  high quality, high-impact software solutions.
                </i>
              </i>
            </p>
          </div>
        </Fade>
        <div className='m-2 text-lg'>
          <StandardButton
            icon='fas fa-cogs'
            text='See what we do'
            onClick={() => {
              document.getElementById('wedo')?.scrollIntoView()
            }}
          />
        </div>
      </div>
    </div>
  </>
)

export const Header = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = React.useState(false)
  const [
    isSkillBackgroundVisible,
    setIsSkillBackgroundVisible
  ] = React.useState(false)
  const { scrollY } = useScroll()
  const [_, height] = useWindowSize()
  const detectMobile = useMobileDetect()

  React.useEffect(() => {
    let skillBackgroundTimer = setTimeout(
      () => setIsSkillBackgroundVisible(true),
      1000
    )

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(skillBackgroundTimer)
    }
  }, [])
  const clutchWidget =
    '<div class="clutch-widget" style="overflow-y:hidden;" data-url="https://widget.clutch.co" data-widget-type="1" data-height="45" data-clutchcompany-id="1884678"></div>'
  return (
    <>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed top-0 bg-white z-50 w-full px-5 py-3 flex flex-col md:flex-row justify-between items-center duration-500 transform transition-all`}
      >
        <div className='flex flex-row w-full md:w-auto justify-between items-center'>
          <div
            style={{ borderWidth: 2 }}
            className='bg-gray-200 md:absolute border-gray-100 w-14 h-14 md:h-20 md:w-20 rounded-full flex items-center justify-center md:top-2'
          >
            <a onClick={() => setIsMobileHeaderOpen(false)} href='#'>
              <img
                className={`select-none buzz-out-on-hover w-12 md:w-20`}
                src={'/static/logo.png'}
              />
            </a>
          </div>
          <MobileHeaderButton
            setIsMobileHeaderOpen={setIsMobileHeaderOpen}
            isMobileHeaderOpen={isMobileHeaderOpen}
          />
        </div>

        <div
          className={`flex flex-col ${
            isMobileHeaderOpen ? 'h-3/4' : 'h-auto'
          } md:h-auto md:flex-row items-center text-center justify-evenly text-accent-3`}
        >
          <Navigation
            setIsMobileHeaderOpen={setIsMobileHeaderOpen}
            isMobileHeaderOpen={isMobileHeaderOpen}
          />

          {isMobileHeaderOpen ? (
            <div className='md:hidden block'>
              <a onClick={() => setIsMobileHeaderOpen(false)} href={'#contact'}>
                <p className='hover:bg-gray-100 hover:text-accent-1 transition-all font-brand text-3xl md:text-lg duration-500 ml-2 mr-2 p-2 pl-4 pr-4 rounded-xl'>
                  <i className={`fab fa-whatsapp mr-2 -ml-2`}></i>Let's talk
                </p>
              </a>
            </div>
          ) : null}

          <div className='ml-2 hidden md:block'>
            <StandardButton
              text="Let's talk"
              icon='fab fa-whatsapp'
              onClick={() => {
                const violation = document.getElementById('contact')
                window.scrollTo({
                  top: violation.offsetTop,
                  behavior: 'smooth'
                })
              }}
            />
          </div>
        </div>
      </header>
      <div
        className={`fixed transition-all duration-1000 top-5 transform md:top-0 w-full ${
          scrollY > 500 ? '-translate-y-72' : ''
        } `}
      >
        <Clouds flip />
      </div>
      <div
        className={`transition-all duration-500 ${
          isSkillBackgroundVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Particles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: height * 10,
            zIndex: 0,
            marginTop: 80,
          }}
          params={{
            particles: {
              number: {
                value: detectMobile.isMobile()
                  ? techSkillsMapped.length
                  : techSkillsMapped.length * 1.2
              },
              collisions: {
                enable: false
              },
              line_linked: {
                enable: !detectMobile.isMobile()
              },
              move: {
                speed: 3,
                out_mode: 'out',
                direction: 'left'
              },
              shape: {
                type: ['images'],
                images: techSkillsMapped
              },
              opacity: {
                value: 0.65,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.34,
                  sync: true
                }
              },
              size: {
                value: detectMobile.isMobile() ? 20 : 25,
                random: true,
                anim: {
                  enable: true,
                  speed: 8,
                  size_min: detectMobile.isMobile() ? 8 : 18,
                  sync: false
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false
                }
              },
              modes: {}
            },
            retina_detect: true
          }}
        />
      </div>
      <div
        style={{ zIndex: 9999999 }}
        className={`mt-24 w-full md:mt-12 transition-all text-2xl relative md:text-4xl text-center items-center flex flex-col transition-all transform`}
      >
        <Banner />
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
      <div
        style={{ zIndex: 999999999 }}
        className={`absolute bottom-0 p-5 -pr-2 w-48 opacity-0 transition-all duration-300 ${
          scrollY > 20 ? '' : 'md:opacity-100'
        }`}
        dangerouslySetInnerHTML={{ __html: clutchWidget }}
      ></div>
      <header
        style={{ zIndex: 999999999 }}
        className={`fixed 
        bottom-0 bg-white z-50 w-full px-5 py-4 flex md:hidden justify-between items-center duration-500 transform transition-all`}
      >
        <div dangerouslySetInnerHTML={{ __html: clutchWidget }}></div>
      </header>
    </>
  )
}
const MobileHeaderButton = ({ setIsMobileHeaderOpen, isMobileHeaderOpen }) => {
  return (
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
  )
}
