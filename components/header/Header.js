import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import { useScroll } from '../../hooks/useScroll'

export const Header = () => {
  const { scrollY } = useScroll()
  return (
    <>
      <div
        style={{ zIndex: 9999999 }}
        className={`text-2xl relative md:text-4xl text-center items-center flex flex-col transition-all transform`}
      >
        <div
          className={`flex mt-12 md:mt-auto ml-12 mr-12 transition-all transform md:h-screen flex-row flex-wrap justify-center items-center`}
        >
          <div
            className={`buzz-out-on-hover flex items-center md:w-3/4 flex-col justify-around transform scale-25`}
          >
            <Fade delay={200}>
              <h3
                style={{
                  fontFamily: 'nickname',
                  zIndex: 9999999,
                  textShadow: '3px 3px #1a0041'
                }}
                className={`select-none text-white text-7xl md:text-8xl`}
              >
                Third Pig <i className='not-italic'>Software</i>
                <i className='not-italic text-sm'>Ltd</i>
              </h3>
            </Fade>
            <Fade delay={800}>
              <p
                style={{
                  fontFamily: 'nickname',
                  zIndex: 9999999,
                  color: '#1a0041'
                }}
                className='p-2 md:p-0 text-2xl transition-all duration-500 opacity-80 select-none'
              >
                Experts in the delivery of high quality, high-impact, software
                solutions.
              </p>
            </Fade>
          </div>
          <img
            style={{ zIndex: 9999999 }}
            className={`w-3/4 buzz-out-on-hover static top-0 md:w-1/4 mb-10 md:mb-0`}
            src={'/static/logo.png'}
          />
        </div>
      </div>

      <header
        style={{ zIndex: 99999999 }}
        class={`fixed top-0 bg-white shadow-sm z-50 w-full px-5 py-4 flex justify-between items-center duration-500 transform transition-all ${
          scrollY < 300 ? '-translate-y-96' : ''
        }`}
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
            Third Pig <i className='not-italic'>Software</i>
            <i className='ml-1 not-italic text-sm'>Ltd</i>
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
    </>
  )
}
