import {
  faCloud,
  faCodeBranch,
  faLaptopCode,
  faMedkit,
  faRocket,
  faVials
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import { useScroll } from '../../hooks/useScroll'

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
    icon: faCloud,
    title: 'Cloud Migrations',
    subtitle: 'Reach new heights with your platform in the cloud.'
  }
]
export const WhatWeDo = () => {
  const { scrollY } = useScroll()
  return (
    <div className='grid lg:grid-cols-3 gap-4 items-center text-gray-700 dark:text-gray-100'>
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
                    item?.title?.length > 15 ? 'md:text-xl' : 'md:text-xl'
                  } text-center text-accent-1`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
            <p className='mt-4 mb-2 text-prose text-center font-paragraph'>
              {item.subtitle}
            </p>
          </Fade>
        </div>
      ))}
    </div>
  )
}
