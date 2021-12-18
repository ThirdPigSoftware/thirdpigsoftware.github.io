import {
  faBinoculars,
  faBomb,
  faChalkboardTeacher,
  faCloud,
  faCodeBranch,
  faCogs,
  faInfinity,
  faLaptopCode,
  faMedkit,
  faRocket,
  faVials
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const whatWeDo = [
  {
    icon: faLaptopCode,
    title: 'Bespoke Software Development',
    subtitle:
      "We'll take your requirements and deliver an MLP (minimum 'loveable' product)!"
  },
  {
    icon: faCogs,
    title: 'Platform & Infrastructure Development',
    subtitle:
      'World class services around platform and infrastructure development.'
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
    icon: faVials,
    title: 'Automated Testing Frameworks',
    subtitle:
      'Get a solid testing harness for your existing product or platform.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migrations',
    subtitle: 'Reach new heights with your platform in the cloud.'
  },
  {
    icon: faChalkboardTeacher,
    title: 'Agile Coaching',
    subtitle:
      'Want to become more agile, adaptable and responsive to your users needs? We will help you take your organisation to the next level.'
  },
  {
    icon: faBomb,
    title: 'Site Reliability Engineering',
    subtitle:
      "We'll help you create scalable and highly reliable software systems."
  },
  {
    icon: faInfinity,
    title: 'DevOps Consultancy',
    subtitle:
      'Consultation services to help you shorten your software development life cycle.'
  }
]
export const WhatWeDo = () => {
  const [servicesIndex, setServicesIndex] = React.useState(null)
  return (
    <div className='w-full select-none relative'>
      <div id='wedo' className='pt-48 -mt-48' />
      <Fade top>
        <p className='text-center text-prose text-lg md:text-base mx-2 px-12 md:px-32 pb-2  font-paragraph transition-all duration-500'>
          A range of software services across multiple platforms - web, mobile
          and cloud. We're always looking for ways to improve our services, so
          if you can't see exactly what you need,{' '}
          <a className='font-semibold' href='#contact'>
            contact us anyway
          </a>{' '}
          to see if we can help.
        </p>
      </Fade>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 items-center gap-5 md:gap-0 text-white mt-5 transition-all duration-500'>
        {whatWeDo.map((item, index) => (
          <div className='flex flex-col items-start md:items-center justify-center text-accent-2 hover:text-accent-1 transition-all duration-500'>
            <div
              onTouchStart={() => setServicesIndex(index)}
              onMouseEnter={() => setServicesIndex(index)}
              onMouseLeave={() => setServicesIndex(null)}
              className={`justify-start md:justify-center items-center flex flex-row transition-all transform duration-500`}
              key={index}
            >
              <Fade top delay={index * 45}>
                <div
                  style={{ borderWidth: 4 }}
                  className='p-4 rounded-full border-white shadow-sm bg-gray-100 m-4'
                >
                  <FontAwesomeIcon
                    className={`${
                      servicesIndex === index ? 'h-14 w-14' : 'w-8 h-8'
                    } transition-all duration-600  buzz-out-on-hover text-accent-1`}
                    icon={item.icon}
                  />
                </div>
              </Fade>
              <div>
                <Fade bottom delay={index * 30}>
                  <h3
                    className={`text-xl px-10 md:w-32 md:px-0 md:text-base transition-all font-brand text-left `}
                  >
                    {item.title}
                  </h3>
                </Fade>
              </div>
            </div>
            <div
              className={`h-0 ${
                servicesIndex === index ? 'h-auto py-10 md:py-0 md:h-24' : ''
              } transition-all duration-400`}
            >
              <Zoom
                out={!servicesIndex || servicesIndex !== index}
                in={servicesIndex === index}
              >
                <div className='w-full md:w-96 px-10 md:px-0'>
                  <h3 className='text-prose font-paragraph text-left md:text-center'>{item.subtitle}</h3>
                </div>
              </Zoom>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
