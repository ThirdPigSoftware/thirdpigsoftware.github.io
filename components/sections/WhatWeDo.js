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
      <div id='wedo' className='pt-72 -mt-72' />
      <Fade top>
        <p className='text-center text-prose text-lg md:text-base mx-2 px-12 md:px-32 pb-2  font-paragraph transition-all duration-500'>
          A range of software services across multiple platforms - web, mobile
          and cloud. We're always looking for ways to improve our services, so
          if you can't see exactly what you need, <a className="font-semibold" href="#contact">contact us anyway</a> to see if we
          can help.
        </p>
      </Fade>
      <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center text-white'>
        {whatWeDo.map((item, index) => (
          <Zoom delay={index * 100}>
            <div
              className={`justify-center items-center flex flex-col transition-all transform duration-500`}
              key={index}
            >
              <Fade top delay={index * 45}>
                <div
                  style={{ borderWidth: 4 }}
                  className='p-4 rounded-full border-white shadow-sm bg-gray-100 m-4'
                >
                  <FontAwesomeIcon
                    className='w-8 h-8 buzz-out-on-hover text-accent-1'
                    icon={item.icon}
                  />
                </div>
              </Fade>
              <div className='flex flex-row flex-wrap justify-evenly items-center'>
                <Fade left delay={index * 30}>
                  <h3
                    className={`text-3xl md:text-base transition-all font-brand text-center text-accent-1`}
                  >
                    {item.title}
                  </h3>
                </Fade>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  )
}
