import {
  faBinoculars,
  faBomb,
  faChalkboardTeacher,
  faCloud,
  faCodeBranch,
  faLaptopCode,
  faMedkit,
  faRocket,
  faVials
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

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
    icon: faLaptopCode,
    title: 'Bespoke Software Development',
    subtitle:
      "We'll take your requirements and deliver an MLP (minimum 'loveable' product)!"
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
    icon: faBinoculars,
    title: 'Technical Leadership',
    subtitle:
      'Providing support for your organisation to help make better technical decisions.'
  }
]
export const WhatWeDo = () => {
  return (
    <div className='w-full select-none relative'>
      <div id='wedo' className='pt-48 -mt-48' />
      <p className='text-center text-lg text-prose py-10 mx-2 px-12 pb-10  font-paragraph'>
        A range of software services across multiple platforms - web, mobile and
        cloud. We're always looking for ways to improve our services, so if you
        can't see exactly what you need, contact us anyway to see if we can
        help.
      </p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center text-white'>
        {whatWeDo.map((item, index) => (
          <Zoom delay={index * 100}>
            <div
              className={`h-72 justify-center px-8 items-center flex flex-col transition-all transform duration-500`}
              key={index}
            >
              <Fade top delay={index * 45}>
                <div className='p-4 rounded-full bg-gray-100 m-4'>
                  <FontAwesomeIcon
                    className='w-12 h-12 buzz-out-on-hover text-accent-1'
                    icon={item.icon}
                  />
                </div>
              </Fade>
              <div className='flex flex-row flex-wrap justify-evenly items-center'>
                <Fade left delay={index * 30}>
                  <h3
                    className={`text-3xl md:text-xl transition-all font-brand text-center text-accent-1`}
                  >
                    {item.title}
                  </h3>
                </Fade>
              </div>
              <Fade bottom delay={index * 50}>
                <p className='mt-4 mb-2 font-paragraph text-prose text-center'>
                  {item.subtitle}
                </p>
              </Fade>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  )
}
