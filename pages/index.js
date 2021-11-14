import {
  faCodeBranch,
  faLaptopCode,
  faMedkit,
  faPaintBrush,
  faRocket,
  faVials
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import Clouds from '../components/clouds/Clouds'
import { Header } from '../components/header/Header'
import { useScroll } from '../hooks/useScroll'

const whatWeDo = [
  {
    icon: faCodeBranch,
    title: 'Cloud, DevOps, & Infrastructure',
    subtitle:
      'World class services around DevOps, Infrastructure and cloud technologies.'
  },
  {
    icon: faMedkit,
    title: 'Project Rescue',
    subtitle:
      'Time sensitive project in need of a helping hand? See how we can help get you back on track.'
  },
  {
    icon: faRocket,
    title: 'Mobile Development',
    subtitle: 'Take your idea to market quickly with a bespoke mobile app.'
  },
  {
    icon: faLaptopCode,
    title: 'Bespoke Software Development',
    subtitle:
      "We'll take your requirements and deliver an MLP (minimum 'loveable' product)!"
  },
  {
    icon: faVials,
    title: 'Automated Testing Frameworks',
    subtitle:
      'Get a solid testing harness for your existing product or platform.'
  },
  {
    icon: faPaintBrush,
    title: 'Website Design & Development',
    subtitle:
      'Creating clean, custom websites to launch and showcase your business.'
  }
]

export const CloudSection = ({ children, header }) => (
  <>
    <Clouds />
    <div className='bg-white'>
      <div className='pb-12 container mx-auto'>
        {header}
        <div className='grid lg:grid-cols-3 gap-4 items-center text-gray-700 dark:text-gray-100'>
          {children}
        </div>
      </div>
    </div>
    <Clouds flip />
  </>
)

export default function IndexPage () {
  const { scrollY } = useScroll()
  return (
    <div className='text-white dark:text-white'>
      <div>
        <Header />
        <div
          className={`transition-all transform transform transition-all duration-500 ${
            scrollY > 50 ? 'md:-mt-96' : ''
          }`}
          style={{ zIndex: -999 }}
        >
          <CloudSection
            header={
              <>
                <h3
                  style={{ fontFamily: 'nickname', zIndex: 9999999 }}
                  className={`text-2xl text-center md:text-left md:text-3xl p-12 pb-10 transform transition-all text-accent-1`}
                >
                  What can we do for you?
                </h3>
              </>
            }
          >
            {whatWeDo.map((item, index) => (
              <div
                className={`xl:border-t-2 xl:border-r-2 px-2 items-center flex flex-col transition-all transform duration-500 md:opacity-0 ${
                  scrollY > 150 ? 'md:opacity-100' : ''
                }`}
                key={index}
              >
                <Fade delay={index * 200}>
                  <FontAwesomeIcon
                    className='buzz-out-on-hover w-20 h-14 p-2 hover:text-accent-1 m-4 text-accent-1'
                    icon={item.icon}
                  />
                  <div className='flex flex-row flex-wrap justify-evenly items-center'>
                    <div>
                      <h3
                        style={{ fontFamily: 'nickname', zIndex: 9999999 }}
                        className={`text-2xl ${
                          item?.title?.length > 15
                            ? 'md:text-xl'
                            : 'md:text-3xl'
                        } text-center text-accent-1`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className='mt-4 mb-2 text-center font-paragraph font-semibold'
                  >
                    {item.subtitle}
                  </p>
                </Fade>
              </div>
            ))}
          </CloudSection>
        </div>

        <div>
          <div className='py-20 px-20 container mx-auto'>
            <div className='grid grid-cols-1 gap-4 items-center'>
              <h3
                style={{ fontFamily: 'nickname', zIndex: 9999999 }}
                className='text-4xl'
              >
                More than just another consultancy.
              </h3>
              <p  className='text-accent-2 text-center md:text-left text-2xl font-semibold font-paragraph'>
                Chums on seats, not bums on seats. We'll work to thoroughly
                understand your business goals and act like a partner, not an
                outsourcer.
              </p>
            </div>
          </div>
        </div>

        <Clouds />
        <div className='bg-white'>
          <div className='py-20 px-20 container mx-auto text-gray-700 dark:text-gray-100'>
            <div className='md:p-10 md:py-20 flex flex-col flex-wrap justify-center content-center'>
              <div className='w-full flex flex-row items-center justify-center flex-wrap text-2xl'>
                <h3
                  style={{ fontFamily: 'nickname', zIndex: 9999999 }}
                  className='text-4xl text-center md:text-6xl'
                >
                  Want to Hear More?
                </h3>
                <button
                  style={{ fontFamily: 'nickname' }}
                  className='p-10 py-5 bg-accent-1 m-5 md:text-4xl rounded-lg border-white buzz-out-on-hover text-white'
                  onClick={() =>
                    window.open(
                      'https://share-eu1.hsforms.com/1Tk0yABENQ4uXugEOhJ4NUQezsvg'
                    )
                  }
                >
                  Yes Please!
                </button>
              </div>
            </div>
          </div>
        </div>
        <Clouds flip />
      </div>
    </div>
  )
}
