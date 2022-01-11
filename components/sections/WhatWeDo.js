import {
  faBomb,
  faChalkboardTeacher,
  faCloud,
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
      'Want to become more adaptable and responsive to your users needs? We can help.'
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
      <div id='wedo' className='pt-32 -mt-32' />
      <Fade top>
        <div className='text-left md:text-center max-w-7xl mx-auto px-4 sm:px-6 md:px-0'>
          <h2 className='text-base text-accent-1 font-semibold tracking-wide uppercase'>
            Our Services
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Accelerate your delivery. 🏎️
          </p>
          <p className='mt-4 max-w-2xl  text-lg text-prose lg:mx-auto'>
            A range of software services across multiple platforms - web, mobile
            and cloud. We're always looking for ways to improve our services, so
            if you can't see exactly what you need,{' '}
            <a className='font-semibold' href='#contact'>
              contact us anyway
            </a>{' '}
            to see if we can help.
          </p>
        </div>
      </Fade>
      <div className='mt-10 px-5 md:px-16'>
        <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-5'>
          {whatWeDo.map((item, index) => (
            <div
              onTouchStart={() => setServicesIndex(index)}
              onMouseEnter={() => setServicesIndex(index)}
              onMouseLeave={() => setServicesIndex(null)}
              key={index}
            >
              <div key={item.title} className='relative'>
                <Fade delay={index * 200} left>
                  <dt>
                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-accent-1 text-white'>
                      <FontAwesomeIcon
                        className='p-3'
                        size={20}
                        icon={item.icon}
                      />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                      {item.title}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {item.subtitle}
                  </dd>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
