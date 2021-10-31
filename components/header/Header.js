import Fade from 'react-reveal/Fade'
import { useScroll } from '../../hooks/useScroll'

export const Header = () => {
  const { scrollY } = useScroll()
  return (
    <div
      style={{ zIndex: 9999999 }}
      className={`text-2xl relative md:text-4xl text-center items-center flex flex-col transition-all transform`}
    >
      <div
        className={`flex mt-12 md:mt-auto ml-12 mr-12 transition-all transform md:h-screen flex-row flex-wrap justify-center items-center`}
      >
        <img
          style={{ zIndex: 9999999 }}
          className='w-3/4 buzz-out-on-hover md:w-1/4 mb-10 md:mb-0'
          src={'/static/logo.png'}
        />

        <div className='buzz-out-on-hover flex items-center md:w-3/4 flex-col justify-around'>
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
      </div>
    </div>
  )
}
